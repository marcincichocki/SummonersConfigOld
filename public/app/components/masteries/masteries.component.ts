import {Component} from 'angular2/angular2';

import {MasteryPageComponent} from '../masteryPage/masteryPage.component';
import {MasteryPageGroupComponent} from '../masteryPageGroup/masteryPageGroup.component';


@Component({
  directives: [
    MasteryPageComponent,
    MasteryPageGroupComponent
  ],
  selector: 'masteries-component',
  template: `
    <aside class="col-xs-4 main-aside">
      <mastery-page-group-component></mastery-page-group-component>
    </aside>
    <section class="col-xs-8 main-section">
      <mastery-page-component></mastery-page-component>
    </section>
  `
})
export class MasteriesComponent {}