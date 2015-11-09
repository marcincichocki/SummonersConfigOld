import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import {Page} from './Page';


@Injectable()
export class MasteryService {
  public page: Page[] = [new Page(`${this.name}1`)];
  public name: string = 'Mastery Page #';
  public active: number = 0;
  public grid: any;
  public masteries: any;
  public categories: string[] = [
    'Resolve',
    'Cunning',
    'Ferocity'
  ];
  constructor(public http: Http) { }

  getMasteries() {
    this.http.get('./app/data/en/masteries.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.grid = data.masteries;
          this.masteries = data.data;
        },
        error => console.log(error)
      );
  }

  isEven(n) {
    return n % 2 === 0;
  }

  addPage(name: string = this.name + (this.page.length + 1)) {
    if (this.page.length < 20) {
      this.page.push(new Page(name));
      this.changePage(this.page.length - 1)
    }
  }

  removePage(page: number = this.active) {
    if (this.page.length > 1) {
      this.page.splice(page, 1);
      this.changePage();
    }
  }

  changePage(page: number = 0) {
    if (this.isInRange(page)) {
      this.active = page;
    }
  }

  isInRange(page: number, max?: number) {
    return page >= 0 && page < (max || this.page.length);
  }

  addMastery(id: string) {
    const category = parseInt(id.slice(1, 2), 10);
    const row = parseInt(id.slice(2, 3), 10);

    if (this.masteryCheck(id, category, row)) {
      this.page[this.active].addMastery(id, category, row);
    } else {
      console.log('sorry, you can not do that!');
    }
  }

  masteryCheck(id: string, category?: number, row?: number) {
    if (isNaN(category) || isNaN(row)) {
      var category = parseInt(id.slice(1, 2), 10);
      var row = parseInt(id.slice(2, 3), 10);
    }

    if (this.page[this.active].max > 0 && !this.isMaxed(row, category)) {
      if (row !== 1 && this.isMaxed(row - 1, category)) {
        return true;
      } else if (row === 1) {
        return true;
      }
    }
    return false;
  }

  isMaxed(row: number, category: number) {
    const even = this.isEven(row);
    const rowSum = this.rowSum(row, category);

    return even ? rowSum === 1 : rowSum === 5;
  }

  isMasteryMaxed(id: string) {
    const mastery: any = this.page[this.active].masteries.filter(mastery => mastery.id === id)[0] || 0;
    const row = parseInt(id.slice(2, 3), 10);
    return this.masteries[id].ranks === mastery.rank;
  }

  isMasteryActive(id: string) {
    const mastery: any = this.page[this.active].masteries.filter(mastery => mastery.id === id)[0] || 0;
    const row = parseInt(id.slice(2, 3), 10);
    return this.masteries[id].ranks > mastery.rank && mastery.rank > 0;
  }

  rowSum(row: number, category: number) {
    return this.page[this.active].masteries
      .filter(mastery => mastery.row === row && mastery.category === category)
      .map(mastery => mastery.rank)
      .reduce((a, b) => a + b, 0);
  }
}