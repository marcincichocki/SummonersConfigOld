import {Sum} from './Sum';
import {Rune} from './Rune';
import {UniqueRune} from './UniqueRune';

/** Class representing a rune page. */
export class Page {

  /**
   * TODO: Change(or not) class properties to public/private/static
   */

  // Store ip sum of all runes in the current page.
  // RuneService.count() updates this property.
  public ip: number = 0;

  // Store every rune in page(Rune instances).
  public slots: Rune[] = [];

  // Store calculated values with unitIds of all runes in page.
  public sums: Sum[] = [];

  // FIXME: This should be private property.
  //
  // Store ammount of maximum available runes to add in respective types.
  //
  // this.counter[0] => "mark", max 9
  // this.counter[1] => "seal", max 9
  // this.counter[2] => "glyph", max 9
  // this.counter[3] => "quintessence", max 3
  public counter: number[] = [9, 9, 9, 3];

  // FIXME: This should be static property.
  //
  // Store runes first slot information for respective types. Slot is 1-based.
  //
  // this.slotStart[0] => "mark" starts at slot number 1
  // this.slotStart[0] => "seal" starts at slot number 10, and so on..
  private slotStart: number[] = [1, 10, 19, 28];


  /**
   * Create a page.
   * @constructor
   * @param {string} name - Name of rune page.
   */
  constructor(public name: string) { }


  /**
   * Get first available slot for given typeId
   * @param {number} typeId - Number representing type.
   * @param {number[]} [unofficial=[]] - Array of rune slots that will
   * be added, but are not yet in this.runes.
   * @returns {(number | boolean)} Slot number 1-based
   */
  getSlot(typeId: number, unofficial: number[] = []): number {

    // Get starting position.
    const from: number = this.slotStart[typeId];

    // Get finishing position.
    const to = from + 9 < 30 ? from + 9 : 30;

    // Get array of taken rune slots.
    const runes: number[] = this.slots.map(rune => rune.runeSlot).concat(unofficial);


    // Loop through all slots for specyfic typeId.
    for (let i = from; i <= to; i += 1) {

      // If slot does not exist in array, return slot.
      if (runes.indexOf(i) === -1) return i;
    }
  }

  /**
   * Check if rune slot in null.
   * @param  {number | void} slot - Slot of rune.
   * @return {boolean} Value describing if slot is null.
   */
  checkSlot(slot: number | void): boolean {
    return slot === null;
  }

  /**
   * Update counter and add rune to this.runes array.
   * @param {Rune} rune - Rune which will be added.
   * @param {string} rune.id - Rune unique id.
   * @param {number | void} [rune.runeSlot=null] - Unique slot which
   * rune will be placed in.
   * @param {number} typeId - Number representing type.
   * @param {number} [ammount=1] - Ammount of runes to add.
   */
  addRune(rune: Rune, typeId: number, ammount: number = 1, slots: number[]): void {

    // Decrease counter by ammount of runes to add.
    this.counter[typeId] -= ammount;

    // Adding multiple runes at once.
    if (ammount > 1) {

      // create array of runes to add.
      const runes = new Array(ammount).fill(rune);

      // Update each rune slot if null.
      if (this.checkSlot(rune.runeSlot)) {
        runes.forEach((rune, index, thisArr) => {
           thisArr[index] = new Rune(
             rune.id,
             slots[index] || this.getSlot(typeId, thisArr.map(rune => rune.runeSlot).filter(Boolean))
           );
        });
      }

      // Add new runes.
      Array.prototype.push.apply(this.slots, runes);
    } else {
      // Add just one rune.

      // Set rune slot if null.
      if (this.checkSlot(rune.runeSlot)) rune.runeSlot = this.getSlot(typeId);

      // Add new rune.
      this.slots.push(rune);
    }
  }


  /**
   * Update counter and remove rune from this.runes array.
   * @param {Rune} rune - Rune which will be removed.
   * @param {string} rune.id - Rune unique id.
   * @param {number} rune.runeSlot - Unique slot of given rune.
   * @param {number} typeId - Number representing type.
   * @param {boolean} max - Remove all runes with given id.
   */
  removeRune(rune: Rune, typeId: number, max: boolean): void {
    const runes = max ? this.slots.filter(r => r.id !== rune.id) : this.slots.filter(r => r !== rune);

    this.counter[typeId] += this.slots.length - runes.length;
    this.slots = runes;
  }


  /**
   * Generate sums of current page.
   * @param {UniqueRune[]} runes [description]
   * @param {number} runes[].ip - Ip const of single rune
   * @param {*} runes[].stats - Object which contain unit: <Number>value paris.
   * @param {number} runes[].ammount - Quantity of exactly same runes.
   */
  count(runes: UniqueRune[]): void {

    // Reset array.
    this.sums = [];

    // Get sum of ip.
    this.ip = runes.reduce((sum, rune) => sum + (rune.ip * rune.ammount), 0);

    runes.forEach(rune => {

      // Some runes may give more then one stat. For example
      // Greater Mark of Hybrid Penetration gives both Armor Penetration and
      // Magic Penetration.
      Object.keys(rune.stats).forEach(unitId => {

        // FIXME: Regeneration stats are in fact per second, not per 5 seconds
        // like description says. Should multiply value times 5 if unitId
        // contains 'Regeneration' string.
        const value: number = parseFloat((rune.stats[unitId] * rune.ammount).toFixed(2));
        const index: number = this.sums.map(sum => sum.unitId).indexOf(unitId);

        // If stat alredy is in array then add values, otherwise create new
        // sum with new stat and initial value.
        if (index > -1) {
          this.sums[index].value += value;
        } else {
          this.sums.push(new Sum(unitId, value));
        }
      });
    });
  }
}