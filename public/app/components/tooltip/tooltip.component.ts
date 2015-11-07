import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {TooltipService} from '../../services/tooltip/tooltip.service';


@Component({
  selector: 'tooltip-component',
  templateUrl: './app/components/tooltip/tooltip.component.html',
  styleUrls: ['./app/components/tooltip/style.css'],
  directives: [CORE_DIRECTIVES]
})
export class TooltipComponent {
  constructor(public tooltipService: TooltipService) { }

  show(type: string): boolean {
    return this.tooltipService.tooltip.type === type;
  }
}