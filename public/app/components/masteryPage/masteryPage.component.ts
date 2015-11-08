import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';


@Component({
  selector: 'mastery-page-component',
  templateUrl: './app/components/masteryPage/masteryPage.component.html',
  directives: [CORE_DIRECTIVES]
})
export class MasteryPageComponent {
  constructor(public masteryService: MasteryService) { }
}