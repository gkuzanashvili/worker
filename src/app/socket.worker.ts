// socket.worker.ts

import {concatAll} from "rxjs";

self.onmessage = (event: MessageEvent) => {
  const { interval, dataSize } = event.data;
  setInterval(() => {
    const data = generateData(dataSize);
    self.postMessage(data);
  }, interval);
};

function generateData(size: number) {
  const data = [];
  for (let i = 0; i < size; i++) {
    const element = {
      id: Math.floor(Math.random() * 1000000000) + 1, //`ID${i + 1}`,
      int: Math.floor(Math.random() * 100000),
      float: (Math.random() * 100).toFixed(18),
      color: getRandomColor(),
      child: {
        id: Math.floor(Math.random() * 10000) + 1, //`ChildID${i + 1}`,
        color: getRandomColor()
      }
    };
    data.push(element);
  }
  return data;
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
const colors: string[] = [
  'AliceBlue',
  'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Beige',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'Blue',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Green',
  'GreenYellow'
];

