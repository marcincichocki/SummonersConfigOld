import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';


@Component({
  selector: 'pages-component',
  styles: [`
    .pages {
      display: flex;
      flex-wrap: wrap;
    }

    .pages > button {
      margin: 4px;
      flex-grow: 1;
      flex-basis: 50px;
    }
  `],
  template: `
    <div class="row">
      <div class="col-xs-8 pages">
        <button class="btn btn-primary-outline"
          *ng-for="#page of runeService.page, #i = index"
          (click)="runeService.changePage(i)"
          [disabled]="runeService.isActive(i)"
          [ng-class]="{active: runeService.isActive(i)}">{{ i + 1 }}
        </button>
      </div>
      <div class="col-xs-4">
        <button class="btn btn-block btn-primary"
          (click)="runeService.addPage()"
          [disabled]="runeService.page.length >= 20">Add page
        </button>
        <button class="btn btn-block btn-primary"
          (click)="runeService.removePage()"
          [disabled]="runeService.page.length <= 1">Remove page
        </button>
      </div>
    </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class PagesComponent {
  constructor(public runeService: RuneService) {}
}