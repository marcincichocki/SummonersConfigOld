import {Component} from 'angular2/angular2';
import {SearchComponent} from './search.component';
import {RuneListComponent} from './runeList.component';
import {RunePageComponent} from './runePage.component';


@Component({
  directives: [SearchComponent, RuneListComponent, RunePageComponent],
  selector: 'runes-component',
  template: `
    <search-component #search-component></search-component>
    <rune-list-component [search-component]="searchComponent"></rune-list-component>
    <rune-page-component></rune-page-component>
  `
})
export class RunesComponent {}