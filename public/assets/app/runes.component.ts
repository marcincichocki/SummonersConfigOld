import {Component} from 'angular2/angular2';
import {SearchComponent} from './search.component';
import {RuneListComponent} from './runeList.component';


@Component({
  directives: [SearchComponent, RuneListComponent],
  selector: 'runes-component',
  template: `
    <search-component #search-component></search-component>
    <rune-list-component [search-component]="searchComponent"></rune-list-component>
  `
})
export class RunesComponent {}