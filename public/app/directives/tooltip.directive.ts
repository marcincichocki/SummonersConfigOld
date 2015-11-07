import {Directive, Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Injectable} from 'angular2/core';

// move to separate file
export interface Tooltip {
  type: string;
  data: any;
}

// move to separate file
@Injectable()
export class TooltipService {
  public tooltip: Tooltip = null;
  public x: number = 0;
  public y: number = 0;
  private offsetX: number = 20;
  private offsetY: number = 20;
  show(tooltip: Tooltip) {
    this.tooltip = tooltip;
  }

  hide() {
    this.tooltip = null;
  }

  // TODO: Make tooltip change position near the "walls"(viewport).
  follow(event: MouseEvent) {
    this.x = event.pageX + this.offsetX;
    this.y = event.pageY + this.offsetY;
  }
}


// separate file
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


@Directive({
  selector: '[tooltip]',
  inputs: [
    'tooltip: tooltip'
  ],
  host: {
    '(mouseenter)': 'tooltipService.show(tooltip)',
    '(mousemove)': 'tooltipService.follow($event)',
    '(mouseleave)': 'tooltipService.hide()'
  }
})
export class TooltipDirective {

  constructor(public tooltipService: TooltipService) { }
}