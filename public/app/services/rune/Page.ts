import {Rune} from './Rune';
import {Sum} from './Sum';


export class Page {
  public ip: number = 0;
  public runes = [];
  public sums: Object[] = [];
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
    let runes: Rune[] = [];

    this.runes.forEach(rune => {
      Object.keys(rune.stats).forEach(stat => {
        runes.push(new Rune(
          rune.ip,
          stat,
          rune.stats[stat],
          rune.type,
          rune.id
        ));
      });
    });

    this.ip = runes.map(obj => obj.ip).reduce((a, b) => a + b, 0);

    this.sums = [];

    let units = runes.map(obj => obj.unitId).filter((unit, index, self) => self.indexOf(unit) === index);

    units.forEach(unit => {
      let sameUnit = runes.filter(obj => obj.unitId === unit);
      this.sums.push(new Sum(
        unit,
        parseFloat(sameUnit.map(obj => obj.value).reduce((a, b) => a + b, 0).toFixed(2))
      ));
    });
  }
}