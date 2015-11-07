import {Injectable} from 'angular2/core';

import {Tooltip} from './tooltip';


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
