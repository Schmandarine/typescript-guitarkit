// Import stylesheets
import './style.css';
import { walkerCell } from './Cell';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const notes: string[] = [
  'e',
  'f',
  'f#',
  'g',
  'g#',
  'a',
  'a#',
  'b',
  'c',
  'c#',
  'd',
  'd#',
  'e',
];
const scale: string[] = ['d', 'e', 'f'];
const intervals = [
  {
    name: 'first',
    color: 'green',
    note: 'd',
  },
  {
    name: 'second',
    color: 'blue',
    note: 'e',
  },
  {
    name: 'third',
    color: 'yellow',
    note: 'f',
  },
];

console.log(intervals[0].color);

const chooseBorderColor = (currentWalker: string): string => {
  let borderColor: string = '';
  if (currentWalker === intervals[0].note) borderColor = 'green';
  if (currentWalker === intervals[1].note) borderColor = 'red';
  if (currentWalker === intervals[2].note) borderColor = 'purple';
  return `border-color: ${borderColor}; `;
};

const chooseBgColor = (currentWalker: string): string => {
  let backgroundColor: string;
  if (currentWalker === intervals[0].note) backgroundColor = 'orange';
  if (currentWalker === intervals[1].note) backgroundColor = 'white';
  if (currentWalker === intervals[2].note) backgroundColor = 'purple';
  return `background-color: ${backgroundColor}; `;
};

function createStyle(currentWalker: string): string {
  const bgColor: string = chooseBgColor(currentWalker);
  const borderColor: string = chooseBorderColor(currentWalker);
  return borderColor + bgColor;
}

function createContent(currentWalker: string): string {
  return currentWalker;
}

function printCanvas(): void {
  notes.map((current: string) => {
    const currentCell: any = new walkerCell(current);
    currentCell.node.innerHTML = createContent(current);
    currentCell.node.style.cssText = createStyle(current);
    appDiv.appendChild(currentCell.node);
  });
}
printCanvas();
