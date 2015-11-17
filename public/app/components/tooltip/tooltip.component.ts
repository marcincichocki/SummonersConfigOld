import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {TooltipService} from '../../services/tooltip/tooltip.service';
import {RuneService} from '../../services/rune/rune.service';
import {MasteryService} from '../../services/mastery/mastery.service';


@Component({
  selector: 'tooltip-component',
  templateUrl: './app/components/tooltip/tooltip.component.html',
  styleUrls: ['./app/components/tooltip/style.css'],
  directives: [CORE_DIRECTIVES]
})
export class TooltipComponent {
  constructor(
    public tooltipService: TooltipService,
    public runeService: RuneService,
    public masteryService: MasteryService
  ) { }
}