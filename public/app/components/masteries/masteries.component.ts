import {Component} from 'angular2/angular2';

import {MasteryPageComponent} from '../masteryPage/masteryPage.component';


@Component({
  directives: [
    MasteryPageComponent
  ],
  selector: 'masteries-component',
  template: `
    <aside class="col-xs-4 main-aside">
    </aside>
    <section class="col-xs-8 main-section">
      <mastery-page-component></mastery-page-component>
    </section>
  `
})
export class MasteriesComponent {}