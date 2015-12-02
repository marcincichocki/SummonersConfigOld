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

  isEven(n: number): boolean {
    return n % 2 === 0;
  }

  addMastery(id: number): void {
    const {category, row} = this.getInfo(id);

    if (this.masteryCheckUp(id, category, row)) {
      this.current.addMastery(id, category);
      this.updateTooltip(id);
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

    if (this.masteryCheckDown(id, category, row)) {
      this.pages[this.active].removeMastery(id, category);
      this.updateTooltip(id);
    }
  }

  masteryCheckUp(id: number, category?: number, row?: number): boolean {
    if (isNaN(category) || isNaN(row)) {
      var {category, row} = this.getInfo(id);
    }

    if (this.current.max > 0 && !this.isMaxed(category, row)) {
      if (row !== 1 && this.isMaxed(category, row - 1)) {
        return true;
      } else if (row === 1) {
        return true;
      }
    }
    return false;
  }


  masteryCheckDown(id: number, category: number, row: number): boolean {
    if (
      this.current.max < 30
      && this.current.rank[id] > 0
      && this.rowSum(row + 1, category) === 0
    ) {
      return true;
    }
    return false;
  }

  isMaxed(category: number, row: number): boolean {
    const even = this.isEven(row);
    const rowSum = this.rowSum(category, row);

    return even ? rowSum === 1 : rowSum === 5;
  }

  rowSum(category: number, row: number): number {
    return this.current.masteries
      .filter(mastery => {
        const {category: c, row: r} = this.getInfo(mastery.id);
        return category === c && row === r;
      })
      .map(mastery => mastery.rank)
      .reduce((a, b) => a + b, 0);
  }

  updateTooltip(id: number): void {
    this.tooltipService.show({
      type: 'mastery',
      data: {
        mastery: this.masteries[id],
        rank: this.current.rank[id]
      }
    });
  }
}