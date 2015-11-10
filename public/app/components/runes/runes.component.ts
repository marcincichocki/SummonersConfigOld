import {Component} from 'angular2/angular2';

import {RuneSearchComponent} from '../runeSearch/runeSearch.component';
import {RuneListComponent} from '../runeList/runeList.component';
import {RuneStatComponent} from '../runeStat/runeStat.component';
import {RunePageComponent} from '../runePage/runePage.component';
import {RuneNameComponent} from '../runeName/runeName.component';
import {RuneIpTimeComponent} from '../runeIpTime/runeIpTime.component';
import {RunePageGroupComponent} from '../runePageGroup/runePageGroup.component';


@Component({
  directives: [
    RuneSearchComponent,
    RuneListComponent,
    RuneStatComponent,
    RunePageComponent,
    RuneNameComponent,
    RuneIpTimeComponent,
    RunePageGroupComponent
  ],
  selector: 'runes-component',
  template: `
    <aside class="col-xs-4 runes-aside">
      <rune-page-group-component></rune-page-group-component>
      <rune-name-component></rune-name-component>
      <rune-stat-component></rune-stat-component>
      <rune-ip-time-component></rune-ip-time-component>
    </aside>
    <section class="col-xs-8 runes-section">
      <div class="runes-wrapper">
        <div class="rune-list-wrapper">
          <rune-search-component #search-component></rune-search-component>
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