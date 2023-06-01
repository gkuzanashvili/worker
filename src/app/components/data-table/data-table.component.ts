import {Component, NgZone, OnInit} from '@angular/core';
import {DataElement} from "../../models/models";
import {plainToClass} from "class-transformer";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  worker= new Worker(new URL('./../../socket.worker', import.meta.url), { type: 'module' }); //Worker = new Worker('');
  public last10Elements: DataElement[] = [];
  public filteredElements: DataElement[] = [];
  public timerInterval = 300; // Default timer interval in milliseconds
  public dataSize = 10; // Default data size
  public additionalIds = '';

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.onMassage();
    this.startPseudoSocket();
  }
  onMassage() {
    this.worker.onmessage = (event: MessageEvent) => {
      this.zone.run(() => {
        const data = event.data;
        const elements = data.map((item: any) =>  plainToClass(DataElement,item));
        this.last10Elements = elements.slice(-this.dataSize);
      });
    };
  }


  startPseudoSocket() {
    const { timerInterval, dataSize } = this;
    const workerData = { interval: timerInterval, dataSize: dataSize };
    if(!this.worker){
      this.worker = new Worker(new URL('./../../socket.worker', import.meta.url), { type: 'module' });
      this.onMassage();
    }
    console.log(workerData , 'workerData params');
    this.worker.postMessage(workerData);

  }
  onSearchBlur(){
    if (!this.additionalIds) {
      this.filteredElements = [];
    }
  }
  onSearch(){
    const  ids = this.additionalIds.split(',')
    if (this.additionalIds) {
      this.filteredElements = this.last10Elements.filter(item => {
        return ids.includes(item.id.toString())} )
    } else {
      this.filteredElements = [];
    }
  }

  stopPseudoSocket() {
    // Terminate the worker to stop receiving data
    this.worker.terminate();
    this.worker = null as any;
  }

  onChangeIntervalAndSize() {
    // Restart the pseudo-socket with the updated interval/size
    this.stopPseudoSocket();
    this.startPseudoSocket();
  }
}




