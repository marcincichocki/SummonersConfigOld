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

  addMastery(id: string, event: MouseEvent): void {
    const category = parseInt(id.slice(1, 2), 10);
    const row = parseInt(id.slice(2, 3), 10);

    if (this.masteryCheckUp(id, category, row)) {
      this.pages[this.active].addMastery(id, category, row);
      this.updateTooltip(id);
    } else {
      console.log('sorry, you can not do that!');
    }
  }

  removeMastery(id: string, event: MouseEvent): void {

    // prevent context menu from showing up
    event.preventDefault();

    const category = parseInt(id.slice(1, 2), 10);
    const row = parseInt(id.slice(2, 3), 10);

    if (this.masteryCheckDown(id, row, category)) {
      this.pages[this.active].removeMastery(id);
      this.updateTooltip(id);
    } else {
      console.log('stop that!');
    }
  }

  masteryCheckUp(id: string, category?: number, row?: number): boolean {
    if (isNaN(category) || isNaN(row)) {
      var category = parseInt(id.toString().slice(1, 2), 10);
      var row = parseInt(id.toString().slice(2, 3), 10);
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

  onScroll(id: string, event: WheelEvent): void {
    event.preventDefault();
    if (event.deltaY > 0) {
      this.removeMastery(id, event);
    } else {
      this.addMastery(id, event);
    }
  }

  masteryCheckDown(id: string, row: number, category: number): boolean {
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

  isMasteryMaxed(id: string): boolean {
    return (this.getRank(id) || 0) === this.masteries[id].ranks;
  }

  isMasteryActive(id: string): boolean {
    return (this.getRank(id) || 0) > 0;
  }

  getRank(id: string): number {
    return this.pages[this.active].rank[id];
  }

  getCategory(id: number): number {
    console.log(id);
    return parseInt(id.toString().slice(1, 2), 10);
  }

  rowSum(row: number, category: number): number {
    return this.pages[this.active].masteries
      .filter(mastery => mastery.row === row && mastery.category === category)
      .map(mastery => mastery.rank)
      .reduce((a, b) => a + b, 0);
  }

  updateTooltip(id: string): void {
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