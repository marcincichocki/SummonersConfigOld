import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';
import {MasteryPageCategoryComponent} from '../masteryPageCategory/masteryPageCategory.component';


@Component({
  selector: 'mastery-page-component',
  templateUrl: './app/components/masteryPage/masteryPage.component.html',
  directives: [CORE_DIRECTIVES, MasteryPageCategoryComponent]
})
export class MasteryPageComponent {
  constructor(public masteryService: MasteryService) { }
}