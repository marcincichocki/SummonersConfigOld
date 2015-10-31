import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Page} from './Page';


@Injectable()
export class RuneService {
  public stats: Object;
  public runes: Object[] = [];
  public page: Page[] = [];
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
  }

  addPage(name) {
    if (this.page.length < 20) {
      this.page.push(new Page(name));
    }
  }
}