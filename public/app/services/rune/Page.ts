import {RuneSingle} from './RuneSingle';
import {Sum} from './Sum';
import {Rune} from './Rune';


export class Page {
  public ip: number = 0;
  public runes: Rune[] = [];
  public sums: Sum[] = [];
  public counter: number[] = [9, 9, 9, 3];
  private slotStart: number[] = [1, 10, 19, 28];
  constructor(public name: string) {}

  getSlot(typeId) {
    const from = this.slotStart[typeId];
    const to = from + 9 < 30 ? from + 9 : 30;
    const runes = this.runes.map(obj => obj.position);

    for (let i = from; i <= to; i += 1) {
      if (runes.indexOf(i) === -1) return i;
    }
  }

  addRune(rune, typeId) {
    this.counter[typeId] -= 1;
    rune.position = this.getSlot(typeId);

    // We don't like references here.
    this.runes.push(JSON.parse(JSON.stringify(rune)));
  }

  removeRune(rune, typeId) {
    const index = this.runes.indexOf(rune);

    this.counter[typeId] += 1;
    this.runes.splice(index, 1);
  }

  count() {
    let runes: RuneSingle[] = [];

    this.runes.forEach(rune => {
      Object.keys(rune.stats).forEach(stat => {
        runes.push(new RuneSingle(
          rune.ip,
          stat,
          rune.stats[stat]
        ));
      });
    });

    // get sum of ip
    this.ip = runes.map(obj => obj.ip).reduce((a, b) => a + b, 0);

    // reset array
    this.sums = [];


    // store unique unit ids of all runes in page
    const unitIds = runes.map(obj => obj.unitId).filter((unit, index, self) => self.indexOf(unit) === index);

    // get sum of every unique unit id and save to array
    unitIds.forEach(unitId => {

      // get array of object with same unit
      let sameUnit = runes.filter(obj => obj.unitId === unitId);

      // push unit and sum of values to sums array
      this.sums.push(new Sum(
        unitId,
        parseFloat(sameUnit.map(obj => obj.value).reduce((a, b) => a + b, 0).toFixed(2))
      ));
    });
  }
}