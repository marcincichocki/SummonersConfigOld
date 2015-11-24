import {Component} from 'angular2/angular2';

import {RuneSearchComponent} from '../runeSearch/runeSearch.component';
import {RuneListComponent} from '../runeList/runeList.component';
import {RuneStatComponent} from '../runeStat/runeStat.component';
import {RunePageComponent} from '../runePage/runePage.component';
import {RunePageNameComponent} from '../runePageName/runePageName.component';
import {RuneIpTimeComponent} from '../runeIpTime/runeIpTime.component';
import {RunePageGroupComponent} from '../runePageGroup/runePageGroup.component';


@Component({
  directives: [
    RuneSearchComponent,
    RuneListComponent,
    RuneStatComponent,
    RunePageComponent,
    RunePageNameComponent,
    RuneIpTimeComponent,
    RunePageGroupComponent
  ],
  selector: 'runes-component',
  template: `
    <aside class="col-4 main-aside column">
      <rune-page-group-component class="component"></rune-page-group-component>
      <rune-page-name-component class="component"></rune-page-name-component>
      <rune-stat-component class="component"></rune-stat-component>
      <rune-ip-time-component class="component"></rune-ip-time-component>
    </aside>
    <section class="col-8 main-section">
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
  `,
  styles: [`
    :host {
      display: flex;
      width: 100%;
    }
  `]
})
export class RunesComponent {}