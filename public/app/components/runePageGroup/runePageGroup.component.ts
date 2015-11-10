import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';
import {TooltipDirective} from '../../directives/tooltip.directive';


@Component({
  selector: 'rune-page-group-component',
  styleUrls: ['./app/components/runePageGroup/style.css'],
  templateUrl: './app/components/runePageGroup/runePageGroup.component.html',
  directives: [CORE_DIRECTIVES, TooltipDirective]
})
export class RunePageGroupComponent {
  constructor(public runeService: RuneService) {}
}