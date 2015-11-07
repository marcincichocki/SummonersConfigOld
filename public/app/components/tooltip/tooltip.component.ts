import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {TooltipService} from '../../services/tooltip/tooltip.service';


@Component({
  selector: 'tooltip-component',
  template: `
    <div id="tooltip" *ng-if="tooltipService.tooltip"
      style.top="{{tooltipService.y}}px"
      style.left="{{tooltipService.x}}px">
      <div id="tooltip-rune" *ng-if="show('rune')">
        THIS IS A RUNE TOOLTIP
        {{ tooltipService.tooltip.data.name }}
      </div>
      <div id="tooltip-mastery" *ng-if="show('mastery')">
        so basicly this is how you make different templates for tooltips,
        you pass type and make new div where you check type and hide if its
        bad.
      </div>
    </div>
  `,
  styles: [`
    #tooltip {
      position: absolute;
      font-size: 1rem;
      color: #fff;
      width: 200px;
      height: 50px;
      border-radius: 5px;
      background-color: #000;
      text-align: center;
    }
  `],
  directives: [CORE_DIRECTIVES]
})
export class TooltipComponent {
  constructor(public tooltipService: TooltipService) { }

  show(type: string): boolean {
    return this.tooltipService.tooltip.type === type;
  }
}