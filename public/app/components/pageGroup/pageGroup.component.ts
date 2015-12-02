import {Component, NgFor, NgClass, Input} from 'angular2/angular2';

import {TooltipDirective} from '../../directives/tooltip.directive';


@Component({
  selector: 'page-group-component',
  directives: [NgFor, NgClass, TooltipDirective],
  template: `
    <div class="row">
      <div class="col-8 page-group">
        <button class="btn"
          *ng-for="#page of service.pages, #index = index"
          (click)="service.changePage(index)"
          [ng-class]="{active: isActive(index)}"
          [tooltip]="{
            type: type,
            data: {
              sums: page.sums,
              index: index
            }
          }">{{ index + 1 }}
        </button>
      </div>
      <div class="col-4">
        <button class="btn btn-block"
          (click)="service.addPage()"
          [disabled]="service.size >= 20">Add
        </button>
        <button class="btn btn-block"
          (click)="service.removePage()"
          [disabled]="service.size <= 1">Remove
        </button>
      </div>
    </div>
  `
})
export class PageGroupComponent {
  @Input() service;
  @Input() type;


  /**
   * Check if given page id is active.
   * @param {number} page - Rune page id. Zero-based.
   */
  isActive(page: number) {
    return page === this.service.active;
  }
}