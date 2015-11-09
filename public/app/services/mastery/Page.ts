import {Mastery} from './Mastery';


export class Page {
  public counter: number[] = [0, 0, 0];
  public max: number = 30;
  public masteries: Mastery[] = [];
  constructor(public name: string) { }


  addMastery(id: string, category: number, row: number) {
    const mastery = this.masteries.filter(mastery => mastery.id === id)[0];

    if (typeof mastery === 'undefined') {
      this.masteries.push(new Mastery(id, 1, category, row));
    } else {
      mastery.rank += 1;
    }
    this.max -= 1;
    console.log(this.masteries);
  }
}