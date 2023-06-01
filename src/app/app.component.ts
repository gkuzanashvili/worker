import {Component, HostListener, NgZone, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worker-app';
}

//   worker= new Worker(new URL('./socket.worker', import.meta.url), { type: 'module' }); //Worker = new Worker('');
//   public last10Elements: DataElement[] = [];
//   public timerInterval = 3000; // Default timer interval in milliseconds
//   public dataSize = 10; // Default data size
//
//   constructor(private zone: NgZone) {}
//
//    ngOnInit() {
//     //this.worker = new Worker(new URL('./socket.worker', import.meta.url), { type: 'module' })
//     // //console.log('sdfsfsf');
//     // const worker = new Worker(new URL('./socket.worker', import.meta.url), { type: 'module' });
//     // worker.onmessage = ({ data }) => {
//     //   console.log(`page got message: ${data}`);
//     // };
//     // worker.postMessage('hello');
//      this.onMassage();
//
//     // this.worker.onmessage = (event: MessageEvent) => {
//     //   console.log(event, 'receved');
//     //
//     //   this.zone.run(() => {
//     //
//     //     const data = event.data;
//     //     //console.log(data, 'sssssssssss')
//     //     const elements = data.map((item: any) => new DataElement(item));
//     //      this.last10Elements = elements.slice(-this.dataSize);
//     //   });
//     // };
//
//     // Start the pseudo-socket with default values
//     this.startPseudoSocket();
//   }
//
//   // @HostListener('window:message', ['$event'])
//   // onMessage(event: MessageEvent) {
//   //   console.log(event, 'MessageEvent')
//   // }
//
//   onMassage() {
//     console.log('fdssfsfsfsdf');
//     this.worker.onmessage = (event: MessageEvent) => {
//       console.log(event, 'receved');
//
//       this.zone.run(() => {
//
//         const data = event.data;
//         //console.log(data, 'sssssssssss')
//         const elements = data.map((item: any) => new DataElement(item));
//         this.last10Elements = elements.slice(-this.dataSize);
//       });
//     };
//   }
//
//
//   startPseudoSocket() {
//     const { timerInterval, dataSize } = this;
//     const workerData = { interval: timerInterval, dataSize: dataSize };
//     if(!this.worker){
//       this.worker = new Worker(new URL('./socket.worker', import.meta.url), { type: 'module' });
//       //console.log(this.worker);
//       this.onMassage();
//     }
//     console.log(workerData , 'workerData params');
//     this.worker.postMessage(workerData);
//
//   }
//
//   stopPseudoSocket() {
//     // Terminate the worker to stop receiving data
//     this.worker.terminate();
//     this.worker = null as any;
//   }
//
//   onChangeInterval() {
//     // Restart the pseudo-socket with the updated interval
//     this.stopPseudoSocket();
//     this.startPseudoSocket();
//   }
// }
// // data-element.model.ts
// export class DataElement {
//   id: string;
//   int: number;
//   float: number;
//   color: string;
//   child: {
//     id: string;
//     color: string;
//   };
//
//   constructor(data: any) {
//     this.id = data.id;
//     this.int = data.int;
//     this.float = parseFloat(data.float);
//     this.color = data.color;
//     this.child = {
//       id: data.child.id,
//       color: data.child.color
//     };
//   }
// }


