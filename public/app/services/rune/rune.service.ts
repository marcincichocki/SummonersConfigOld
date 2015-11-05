import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import {Page} from './Page';
import {Rune} from './Rune';


@Injectable()
export class RuneService {
  public types: string[] = ['mark', 'seal', 'glyph', 'quintessence'];
  private name: string = 'Rune Page #';

  public stats: Object;
  public runes: Object;
  public runesArray: Rune[] = [];
  public page: Page[] = [new Page(`${this.name}1`)];
  public active: number = 0;
  constructor(public http: Http) { }

  getRunes() {
    this.http.get('./app/data/en/runes.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.stats = data.stats;
          this.runes = data.runes;
          this.runesArray = Object.keys(data.runes).map(key => data.runes[key]);
        },
        error => console.log(error)
      );
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

  isInRange(page: number, max?: number) {
    return page >= 0 && page < (max || this.page.length);
  }

  changePage(page: number = 0) {
    if (this.isInRange(page)) {
      this.active = page;
    }
  }

  clearPage(page = this.active) {
    if (this.isInRange(page)) {
      this.page[page] = new Page(this.getName());
    }
  }

  isEmpty(page = this.active) {
    if (this.isInRange(page)) {
      return !this.page[page].sums.length;
    }
  }

  isActive(page: number) {
    if (this.isInRange(page)) {
      return page === this.active;
    }
  }

  getName(page: number = this.active) {
    if (this.isInRange(page)) {
      return this.page[page].name;
    }
  }

  setName(name: string, page: number = this.active) {
    if (this.isInRange(page)) {
      this.page[page].name = name;
    }
  }

  getIp(page: number = this.active) {
    if (this.isInRange(page)) {
      return this.page[page].ip;
    }
  }

  addRune(id) {
    const rune = this.runes[id];
    const typeId: number = this.types.indexOf(rune.type);

    if (this.page[this.active].counter[typeId] > 0) {
      this.page[this.active].addRune(rune, typeId);
      this.count();
    } else {
      console.log(`Reached maximum of ${rune.type}`);
    }
  }

  removeRune(rune) {
    const typeId: number = this.types.indexOf(rune.type);
    if (this.page[this.active].runes.length) {
      this.page[this.active].removeRune(rune, typeId);

      this.count();
    }
  }

  count() {
    this.page[this.active].count();
  }

  isPercentage(unit: string) {
    return unit.indexOf('Percent') > -1 ? '%' : '';
  }
}