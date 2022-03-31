export class walkerCell {
  classList: string;
  style: string;
  content: string;
  node: HTMLElement;

  constructor(currentWalker) {
    this.classList = 'cell';
    this.node = document.createElement('div');
    this.node.classList.add(this.classList);
  }
}
