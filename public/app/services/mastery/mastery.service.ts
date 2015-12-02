import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import {Pages} from '../Pages';
import {Page} from './Page';
import {TooltipService} from '../tooltip/tooltip.service';


@Injectable()
export class MasteryService extends Pages<Page> {
  public grid: any;
  public masteries: any;
  public categories: string[] = [
    'Ferocity',
    'Resolve',
    'Cunning'
  ];


  constructor(
    public http: Http,
    public tooltipService: TooltipService
  ) {
    super(Page, 'Mastery Page');
    this.addPage();
  }

  getMasteries() {
    this.http.get('./app/data/en/masteries.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.grid = data.grid;
          this.masteries = data.masteries;
        },
        error => console.log(error)
      );
  }

  isEven(n) {
    return n % 2 === 0;
  }

  addMastery(id: number): void {
    const {category, row} = this.getInfo(id);

    if (this.masteryCheckUp(id, category, row)) {
      this.pages[this.active].addMastery(id, category);
      this.updateTooltip(id);
    } else {
      console.log('sorry, you can not do that!');
    }
  }

  getInfo(id: number): {category: number, row: number} {
    return {
      category: parseInt(id.toString().slice(1, 2), 10),
      row: parseInt(id.toString().slice(2, 3), 10)
    }
  }

  removeMastery(id: number): void {
    const {category, row} = this.getInfo(id);

    if (this.masteryCheckDown(id, row, category)) {
      this.pages[this.active].removeMastery(id, category);
      this.updateTooltip(id);
    } else {
      console.log('stop that!');
    }
  }

  masteryCheckUp(id: number, category?: number, row?: number): boolean {
    if (isNaN(category) || isNaN(row)) {
      const {category, row} = this.getInfo(id);
    }

    if (this.pages[this.active].max > 0 && !this.isMaxed(row, category)) {
      if (row !== 1 && this.isMaxed(row - 1, category)) {
        return true;
      } else if (row === 1) {
        return true;
      }
    }
    return false;
  }


  masteryCheckDown(id: number, row: number, category: number): boolean {
    if (
      this.pages[this.active].max < 30
      && this.getRank(id) > 0
      && this.rowSum(row + 1, category) === 0
    ) {
      return true;
    }
    return false;
  }

  isMaxed(row: number, category: number): boolean {
    const even = this.isEven(row);
    const rowSum = this.rowSum(row, category);

    return even ? rowSum === 1 : rowSum === 5;
  }

  isMasteryMaxed(id: number): boolean {
    return (this.getRank(id) || 0) === this.masteries[id].ranks;
  }

  isMasteryActive(id: number): boolean {
    return (this.getRank(id) || 0) > 0;
  }

  getRank(id: number): number {
    return this.pages[this.active].rank[id];
  }

  getCategory(id: number): number {
    return parseInt(id.toString().slice(1, 2), 10);
  }

  rowSum(r: number, c: number): number {
    return this.pages[this.active].masteries
      .filter(mastery => {
        const {category, row} = this.getInfo(mastery.id);
        return r === row && c === category
      })
      .map(mastery => mastery.rank)
      .reduce((a, b) => a + b, 0);
  }

  updateTooltip(id: number): void {
    this.tooltipService.show({
      type: 'mastery',
      data: {
        mastery: this.masteries[id],
        rank: this.getRank(id)
      }
    });
  }

  getPointsOfCategory(category: number): number {
    return this.pages[this.active].sums[category];
  }

  getSums(page: number = this.active): number[] {
    return this.pages[page].sums;
  }
}