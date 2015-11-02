import {Component} from 'angular2/angular2';
import {SearchComponent} from './search.component';
import {RuneListComponent} from './runeList.component';
import {RuneStatComponent} from './runeStat.component';
import {RunePageComponent} from './runePage.component';
import {RuneNameComponent} from './runeName.component';
import {PagesComponent} from './pages.component';


@Component({
  directives: [
    SearchComponent,
    RuneListComponent,
    RuneStatComponent,
    RunePageComponent,
    RuneNameComponent,
    PagesComponent
  ],
  selector: 'runes-component',
  template: `
    <aside class="col-xs-4 runes-aside">
      <pages-component></pages-component>
      <rune-name-component></rune-name-component>
      <rune-stat-component></rune-stat-component>
    </aside>
    <section class="col-xs-8 runes-section">
      <div class="runes-wrapper">
        <div class="rune-list-wrapper">
          <search-component #search-component></search-component>
          <rune-list-component [search-component]="searchComponent"></rune-list-component>
        </div>
        <div class="rune-page-wrapper">
          <rune-page-component></rune-page-component>
        </div>
      </div>
    </section>
  `
})
export class RunesComponent {}