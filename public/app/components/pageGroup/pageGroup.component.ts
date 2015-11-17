import {Component, NgFor, NgClass, Input} from 'angular2/angular2';

import {TooltipDirective} from '../../directives/tooltip.directive';


@Component({
  selector: 'page-group-component',
  directives: [NgFor, NgClass, TooltipDirective],
  template: `
    <div class="row">
      <div class="col-xs-8 page-group">
        <button class="btn btn-primary-outline"
          *ng-for="#page of service.page, #i = index"
          (click)="service.changePage(i)"
          [ng-class]="{active: service.isActive(i)}"
          [tooltip]="{ type: type, data: { sums: page.sums, index: i } }">{{ i + 1 }}
        </button>
      </div>
      <div class="col-xs-4">
        <button class="btn btn-block btn-primary"
          (click)="service.addPage()"
          [disabled]="service.page.length >= 20">Add
        </button>
        <button class="btn btn-block btn-primary"
          (click)="service.removePage()"
          [disabled]="service.page.length <= 1">Remove
        </button>
      </div>
    </div>
  `
})
export class PageGroupComponent {
  @Input() service;
  @Input() type;
}