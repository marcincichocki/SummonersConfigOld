import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import {Page} from './Page';
import {Slot} from './Slot';
import {UniqueRune} from './UniqueRune';


@Injectable()
export class RuneService {

  // Default name for each page.
  private name: string = 'Rune Page #';

  // Determines which page is displayed. Zero-based.
  private active: number = 0;


  // types of runes.
  public types: string[] = [
    'mark',
    'seal',
    'glyph',
    'quintessence'
  ];

  // Object which contains unitId: unit pairs
  public stats: any;

  // Object which contains every rune.
  public runes: any;

  // TODO: rename to "pages" after masteries cleanup.
  //
  // Store information about each page.
  // By default, there is one empty page.
  public page: Page[] = [
    new Page(this.name + 1)
  ];

  // Min and max quantity of pages.
  public pageMin: number = 1;
  public pageMax: number = 20;

  /**
   * Store active page.
   * @return {Page}
   */
  get current(): Page {
    return this.page[this.active];
  }


  constructor(public http: Http) { }


  /**
   * Load runes and save in variables.
   */
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


  /**
   * Check if given page exist.
   * @param  {number} page - Rune page id. Zero-based.
   * @return {boolean}
   */
  exist(page: number): boolean {
    return (page >= 0) && (page < this.page.length);
  }


  /**
   * Add new rune page.
   * @param {string} [name=this.name + (this.page.length + 1)] - Name of rune
   * page.
   */
  addPage(name: string = this.name + (this.page.length + 1)): void {

    // Continue only if there is a space for new rune page.
    if (this.page.length < this.pageMax) {

      // Add new page.
      this.page.push(new Page(name));

      // Change page to just created.
      this.changePage(this.page.length - 1);
    }
  }


  /**
   * Remove rune page.
   * @param {number} [page=this.active] - Rune page id. Zero-based.
   */
  removePage(page: number = this.active): void {

    // Continue only if there is page to be removed.
    if (this.page.length > this.pageMin) {
      this.page.splice(page, 1);
      this.changePage();
    }
  }


  /**
   * Change active rune page to given id.
   * @param {number} [page=0] - Rune page id. Zero-based.
   */
  changePage(page: number = 0): void {
    if (this.exist(page)) {
      this.active = page;
    }
  }


  /**
   * Clear entire active page.
   */
  clearPage(): void {
    this.page[this.active] = new Page(this.getName());
  }


  /**
   * Add rune(s) of given id.
   * @param {number} id - Id of rune.
   * @param {number} [options] - Optional settings.
   * @param {boolean} [options.count] - Update sums after adding rune.
   * @param {number} [options.ammount] - Ammount of same runes to be added.
   * @param {boolean} [options.max] - Add maximum of runes possible. Overrides
   * options.ammount.
   * @param {number[]} [options.slotIds] - Array of slots which will be used.
   * Array length do not have to be equal to ammount runes to add, however
   * if slot is falsy or array os not defined at all, slots will be auto
   * generated
   */
  addRune(id: number, options?: {count?: boolean, ammount?: number, max?: boolean, slotIds?: number[]}): void {
    const typeId: number = this.getTypeId(id);
    const maxCounter = this.current.counter[typeId];

    const defaults: {count: boolean, ammount: number, max: boolean, slotIds: number[]} = Object.assign({
      count: true,
      ammount: 1,
      max: false,
      slotIds: []
    }, options);

    // Is there a room for this rune?
    if ( (maxCounter > 0) && (defaults.ammount <= maxCounter) ) {

      if (defaults.max) defaults.ammount = maxCounter;

      // Add new rune
      this.current.addRune(new Slot(id), typeId, defaults.ammount, defaults.slotIds);

      // update sums
      if (defaults.count) this.count();
    }
  }


  /**
   * Remove rune from given slot.
   * @param {Slot} slot - Shot which will be removed.
   * @param {boolean} [max=false] - Remove all same runes(same runeId).
   */
  removeRune(slot: Slot, max: boolean = false): void {
    const typeId: number = this.getTypeId(slot.runeId);

    if (this.current.slots.length) {
      this.current.removeRune(slot, typeId, max);

      this.count();
    }
  }


  /**
   * Get stats for unique ids and ammount of them in rune page.
   */
  count() {

    // Get list of unique ids.
    const uniqueIds: number[] = this.current.slots
      .map(slot => slot.runeId)
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
        this.current.slots.filter(slot => slot.runeId === id).reduce(a => a + 1, 0)
      );


      runes.push(rune);
    });


    // Call specyfic method to generate sums.
    this.current.count(runes);
  }


  /**
   * Get name of rune page.
   * @param  {numbe} [page=this.active] - Rune page id. Zero-based.
   * @return {string} Rune page name.
   */
  getName(page: number = this.active): string {
    return this.page[page].name;
  }


  /**
   * Get type id of given rune id.
   * @param  {number} id - Id of rune.
   * @return {number} Numerical representation of type.
   */
  getTypeId(id: number): number {
    return this.types.indexOf(this.runes[id].type);
  }


  /**
   * Display "%" if unitId includes string "Percent"
   * @param {string} unitId - Specyfic unitId of rune.
   * @return {string}
   */
  isPercentage(unitId: string): string {
    return /Percent/.test(unitId) ? '%' : '';
  }
}