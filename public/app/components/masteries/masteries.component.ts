import {Component} from 'angular2/angular2';

import {MasteryPageComponent} from '../masteryPage/masteryPage.component';
import {MasteryPageGroupComponent} from '../masteryPageGroup/masteryPageGroup.component';
import {MasteryPageNameComponent} from '../masteryPageName/masteryPageName.component';


@Component({
  directives: [
    MasteryPageComponent,
    MasteryPageGroupComponent,
    MasteryPageNameComponent
  ],
  selector: 'masteries-component',
  template: `
    <aside class="col-xs-4 main-aside">
      <mastery-page-group-component></mastery-page-group-component>
      <mastery-page-name-component></mastery-page-name-component>
    </aside>
    <section class="col-xs-8 main-section">
      <mastery-page-component></mastery-page-component>
    </section>
  `
})
export class MasteriesComponent {}