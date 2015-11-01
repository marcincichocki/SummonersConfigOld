import {Rune} from './Rune';


export class Page {
  public runes: string[] = [];
  public sums: Object[] = [];
  public counter: number[] = [9, 9, 9, 3];
  constructor(public name: string) {}

  addRune(rune, type: number) {
    this.counter[type] -= 1;
    this.runes.push(rune.id);

    console.log(this.runes);
  }

  removeRune(rune, type: number) {
    const index = this.runes.indexOf(rune.id);

    this.counter[type] += 1;
    this.runes.splice(index, 1);

    console.log(this.runes);
  }

  count(data) {
    let runes: Rune[] = [];
    data.forEach(rune => {
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

    if (runes.length) {
      this.sums = [];

      let units = runes.map(obj => obj.unitId).filter((unit, index, self) => self.indexOf(unit) === index);

      units.forEach(unit => {
        var test = runes.filter(obj => obj.unitId === unit);
        this.sums.push({
          unitId: unit,
          value: parseFloat(test.map(obj => obj.value).reduce((a, b) => a + b, 0).toFixed(2))
        });
      });

      console.log(this.sums);
    }

  }
}