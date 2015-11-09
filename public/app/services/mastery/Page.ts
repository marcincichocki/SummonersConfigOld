import {Mastery} from './Mastery';


export class Page {
  public counter: number[] = [0, 0, 0];
  public max: number = 30;
  public masteries: Mastery[] = [];
  public rank: any = {};
  constructor(public name: string) { }


  addMastery(id: string, category: number, row: number) {
    const mastery = this.masteries.filter(mastery => mastery.id === id)[0];

    if (typeof mastery === 'undefined') {
      this.masteries.push(new Mastery(id, 1, category, row));
      this.rank[id] = 1;
    } else {
      mastery.rank += 1;
      this.rank[id] += 1;
    }
    this.max -= 1;
    console.log(this.masteries);
  }

  removeMastery(id: string) {
    const mastery = this.masteries.filter(mastery => mastery.id === id)[0];
    const index = this.masteries.indexOf(mastery);

    if (mastery.rank > 1) {
      mastery.rank -= 1;
      this.rank[id] -= 1;
    } else {
      this.masteries.splice(index, 1);
      delete this.rank[id];
    }
    this.max += 1;
    console.log(this.masteries);
  }
}