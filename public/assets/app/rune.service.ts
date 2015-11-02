import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Page} from './Page';


@Injectable()
export class RuneService {
  public stats: Object;
  public runes: Object[] = [];
  public runesStats: Object;
  public page: Page[] = [new Page(`${this.name}1`)];
  public active: number = 0;
  private name: string = 'Rune Page #';
  private types: string[] = ['mark', 'seal', 'glyph', 'quintessence'];
  constructor(public http: Http) { }

  getRunes() {
    this.http.get('assets/app/data/en/runes.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.stats = data.stats;
          this.runes = data.runes;
        },
        error => console.log(error),
        () => console.log('Done!')
      );

     this.http.get('assets/app/data/en/runesStats.json')
      .map(res => res.json())
      .subscribe(
        data => {
          this.runesStats = data;
        },
        error => console.log(error),
        () => console.log('Done!')
      );
  }

  addPage(name) {
    if (this.page.length < 20) {
      this.page.push(new Page(this.name + this.page.length));
      this.changePage(this.page.length - 1)
    }
  }

  removePage(page: number) {
    if (this.page.length > 1) {
      this.page.splice(page, 1);
      this.changePage();
    }
  }

  changePage(page: number = 0) {
    if (page >= 0 && page < this.page.length) {
      this.active = page;
    }
  }

  addRune(id, type, img) {
    const typeId: number = this.types.indexOf(type);

    if (this.page[this.active].counter[typeId] > 0) {
      this.page[this.active].addRune(id, typeId, img);
      this.count();
    } else {
      console.log(`Reached maximum of ${type}`);
    }
  }

  removeRune(id: string) {
    this.page[this.active].removeRune(id);

    this.count();
  }

  count() {
    const runes = this.page[this.active].runes.map(rune => this.runesStats[rune.id]);

    this.page[this.active].count(runes);
  }

  isPercentage(unit: string) {
    return unit.indexOf('Percent') > -1 ? '%' : '';
  }
}