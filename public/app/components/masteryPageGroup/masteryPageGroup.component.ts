import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';
import {TooltipDirective} from '../../directives/tooltip.directive';


@Component({
  selector: 'mastery-page-group-component',
  templateUrl: './app/components/masteryPageGroup/masteryPageGroup.component.html',
  directives: [CORE_DIRECTIVES, TooltipDirective]
})
export class MasteryPageGroupComponent {
  constructor(public masteryService: MasteryService) {}
}