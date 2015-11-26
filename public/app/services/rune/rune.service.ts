import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import {Page} from './Page';
import {Rune} from './Rune';
import {UniqueRune} from './UniqueRune';


@Injectable()
export class RuneService {
  public types: string[] = ['mark', 'seal', 'glyph', 'quintessence'];
  private name: string = 'Rune Page #';

  public stats: any;
  public runes: any;
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

  getTypeId(id: string): number {
    return this.types.indexOf(this.runes[id].type);
  }

  getCounterOfTypeId(typeId: number) {
    return this.page[this.active].counter[typeId];
  }

  addRune(id: string, options?: {count?: boolean, ammount?: number, max?: boolean, slots?: number[]}): void {
    const typeId: number = this.getTypeId(id);
    const maxCounter = this.getCounterOfTypeId(typeId);

    // Is there a room for this rune?
    if (maxCounter > 0) {

      const defaults: {count: boolean, ammount: number, max: boolean, slots: number[]} = Object.assign({
        count: true,
        ammount: 1,
        max: false,
        slots: []
      }, options);

      if (defaults.max) defaults.ammount = maxCounter;

      // Add new rune
      this.page[this.active].addRune(new Rune(id), typeId, defaults.ammount, defaults.slots);

      // update sums
      if (defaults.count) this.count();
    }
  }

  removeRune(rune: Rune, max: boolean = false): void {
    const typeId: number = this.getTypeId(rune.id);

    if (this.page[this.active].runes.length) {
      this.page[this.active].removeRune(rune, typeId, max);

      this.count();
    }
  }

  count() {

    // Get list of unique ids.
    const uniqueIds: string[] = this.page[this.active].runes
      .map(rune => rune.id)
      .filter((id, index, self) => self.indexOf(id) === index);

    // Prepare array to store unique runes.
    const runes: UniqueRune[] = [];


    // For each unique id add new unique rune.
    uniqueIds.forEach(id => {
      const rune = new UniqueRune(

        // Ip cost of specyfic rune.
        this.runes[id].ip,

        // Stats of specyfic rune.
        this.runes[id].stats,

        // quantity of exactly same runes.
        this.page[this.active].runes.filter(rune => rune.id === id).reduce(a => a + 1, 0)
      );


      runes.push(rune);
    });


    // Call specyfic method to generate sums.
    this.page[this.active].count(runes);
  }

  isPercentage(unit: string) {
    return unit.indexOf('Percent') > -1 ? '%' : '';
  }
}