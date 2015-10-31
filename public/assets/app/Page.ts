import {Rune} from './Rune';

export class Page {
  public runes: Rune[] = [];
  public sums: Object[] = [];
  public counter: Number[] = [9, 9, 9, 3];
  constructor(public name: string) {}

  addRune(rune: Rune) {
    this.runes.push(rune);
  }
}