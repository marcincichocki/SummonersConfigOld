import {Mastery} from './Mastery';


export class Page {
  public sums: number[] = [0, 0, 0];
  public max: number = 30;
  public masteries: Mastery[] = [];
  public rank: any = {};
  constructor(public name: string) { }


  addMastery(id: number, category: number) {
    const mastery = this.masteries.filter(mastery => mastery.id === id)[0];

    if (typeof mastery === 'undefined') {
      this.masteries.push(new Mastery(id, 1));
      this.rank[id] = 1;
    } else {
      mastery.rank += 1;
      this.rank[id] += 1;
    }
    this.sums[category - 1] += 1;
    this.max -= 1;
  }

  removeMastery(id: number, category: number) {
    const mastery = this.masteries.filter(mastery => mastery.id === id)[0];
    const index = this.masteries.indexOf(mastery);

    if (mastery.rank > 1) {
      mastery.rank -= 1;
      this.rank[id] -= 1;
    } else {
      this.masteries.splice(index, 1);
      delete this.rank[id];
    }
    this.sums[category - 1] -= 1;
    this.max += 1;
  }
}