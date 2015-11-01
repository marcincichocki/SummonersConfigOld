import {Component} from 'angular2/angular2';
import {SearchComponent} from './search.component';
import {RuneListComponent} from './runeList.component';
import {RuneStatComponent} from './runeStat.component';
import {RunePageComponent} from './runePage.component';


@Component({
  directives: [SearchComponent, RuneListComponent, RuneStatComponent, RunePageComponent],
  selector: 'runes-component',
  template: `
    <search-component #search-component></search-component>
    <div class="clearfix">
      <rune-list-component [search-component]="searchComponent"></rune-list-component>
      <rune-stat-component></rune-stat-component>
    </div>
    <rune-page-component></rune-page-component>
  `
})
export class RunesComponent {}