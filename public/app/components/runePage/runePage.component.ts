import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';
import {RunePageItemComponent} from '../runePageItem/runePageItem.component';
import {TooltipDirective} from '../../directives/tooltip.directive';
import {TooltipService} from '../../services/tooltip/tooltip.service';
import {Slot} from '../../services/rune/Slot';


@Component({
  selector: 'rune-page-component',
  templateUrl: './app/components/runePage/runePage.component.html',
  directives: [CORE_DIRECTIVES, RunePageItemComponent, TooltipDirective]
})
export class RunePageComponent {
  constructor(
    public runeService: RuneService,
    public tooltipService: TooltipService
  ) { };

  removeRune(event: MouseEvent, slot: Slot): void {
    this.tooltipService.hide();

    if (event.ctrlKey) {
      this.runeService.removeRune(slot, true);
    } else {
      this.runeService.removeRune(slot);
    }
  }
}