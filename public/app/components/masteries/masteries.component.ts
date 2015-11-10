import {Component} from 'angular2/angular2';

import {MasteryPageComponent} from '../masteryPage/masteryPage.component';
import {MasteryPageGroupComponent} from '../masteryPageGroup/masteryPageGroup.component';
import {MasteryPageNameComponent} from '../masteryPageName/masteryPageName.component';
import {MasteryPageStatsComponent} from '../masteryPageStats/masteryPageStats.component';


@Component({
  directives: [
    MasteryPageComponent,
    MasteryPageGroupComponent,
    MasteryPageNameComponent,
    MasteryPageStatsComponent
  ],
  selector: 'masteries-component',
  template: `
    <aside class="col-xs-4 main-aside">
      <mastery-page-group-component></mastery-page-group-component>
      <mastery-page-name-component></mastery-page-name-component>
      <mastery-page-stats-component></mastery-page-stats-component>
    </aside>
    <section class="col-xs-8 main-section">
      <mastery-page-component></mastery-page-component>
    </section>
  `
})
export class MasteriesComponent {}