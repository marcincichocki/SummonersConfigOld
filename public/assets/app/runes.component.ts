import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Http} from 'angular2/http';
import {Rune} from './Rune';
import {Search} from './search.pipe';
import {SearchComponent} from './search.component';


@Component({
  pipes: [Search],
  directives: [CORE_DIRECTIVES, SearchComponent],
  selector: 'runes-component',
  template: `
    <search-component #search-component></search-component>
    <div id="runes-list">
      <h2>Rune list</h2>
      <div class="media" *ng-for="#rune of runes | search: 'name': searchComponent.query">
        <a class="media-left" href="#">
          <img width="50px" height="50px" alt="rune image">
        </a>
        <div class="media-body">
          <h4 class="media-heading">{{ rune.name }}</h4>
          <p>{{ rune.description }}</p>
        </div>
      </div>
    </div>
  `
})
export class RunesComponent {
  public stats: Object;
  public runes: Rune[] = [new Rune('000', 'Test', 'Desc')];
  constructor(public http: Http) {}

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

  onInit() {
    this.getRunes();
  }
}