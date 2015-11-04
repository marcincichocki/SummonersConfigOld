import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';
import {RuneStatItemComponent} from '../runeStatItem/runeStatItem.component';


@Component({
  selector: 'rune-stat-component',
  template: `
    <div class="row">
      <div class="col-xs-8">
        <rune-stat-item-component
          *ng-for="#stat of runeService.page[runeService.active].sums"
          [stat]="stat">
        </rune-stat-item-component>
      </div>
      <div class="col-xs-4">
        <button class="btn btn-block btn-primary"
          (click)="runeService.clearPage()"
          [disabled]="runeService.isEmpty()">Clear</button>
      </div>
    </div>
  `,
  directives: [CORE_DIRECTIVES, RuneStatItemComponent]
})
export class RuneStatComponent {
  constructor(public runeService: RuneService) {};
}