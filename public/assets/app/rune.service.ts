import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Page} from './Page';


@Injectable()
export class RuneService {
  public stats: Object;
  public runes: string[] = [];
  public RUNES: Object;
  public page: Page[] = [new Page(`${this.name}1`)];
  public active: number = 0;
  private name: string = 'Rune Page #';
  private types: string[] = ['mark', 'seal', 'glyph', 'quintessence'];
  constructor(public http: Http) { }

  getRunes() {
    this.http.get('assets/app/data/en/runes-lang.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.stats = data.stats;
          this.runes = data.runes;
        },
        error => console.log(error),
        () => console.log('Done!')
      );
    this.http.get('assets/app/data/en/runes.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.RUNES = data;
        },
        error => console.log(error),
        () => console.log('Done!')
      );
  }

  addPage(name) {
    if (this.page.length < 20) {
      this.page.push(new Page(this.name + this.page.length));
    }
  }

  addRune(id) {
    const rune = this.RUNES[id];
    const type: number = this.types.indexOf(rune.type);

    if (this.page[this.active].counter[type] > 0) {
      this.page[this.active].addRune(rune, type);
      this.count();
    } else {
      console.log(`Reached maximum of ${rune.type}`);
    }
  }

  removeRune(id) {
    const rune = this.RUNES[id];
    const type: number = this.types.indexOf(rune.type);

    this.page[this.active].removeRune(rune, type);
  }

  count() {
    const runes = this.page[this.active].runes.map(rune => this.RUNES[rune]);
    this.page[this.active].count(runes);
  }
}