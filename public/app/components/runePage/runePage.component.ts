import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';
import {RunePageItemComponent} from '../runePageItem/runePageItem.component';
import {TooltipDirective} from '../../directives/tooltip.directive';
import {TooltipService} from '../../services/tooltip/tooltip.service';


@Component({
  selector: 'rune-page-component',
  templateUrl: './app/components/runePage/runePage.component.html',
  directives: [CORE_DIRECTIVES, RunePageItemComponent, TooltipDirective]
})
export class RunePageComponent {
  constructor(public runeService: RuneService, public tooltipService: TooltipService) {};

  removeRune(rune) {
    this.tooltipService.hide();
    this.runeService.removeRune(rune);
  }
}