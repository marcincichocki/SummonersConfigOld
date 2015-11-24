import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';
import {RuneStatItemComponent} from '../runeStatItem/runeStatItem.component';


@Component({
  selector: 'rune-stat-component',
  template: `
    <div class="row grow">
      <div class="col-8 column scrollable">
        <rune-stat-item-component
          *ng-for="#sum of runeService.page[runeService.active].sums, #i = index"
          [sum]="sum">
        </rune-stat-item-component>
      </div>
      <div class="col-4">
        <button class="btn btn-block"
          (click)="runeService.clearPage()"
          [disabled]="runeService.isEmpty()">Clear</button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      flex-shrink: 1 !important;
    }
  `],
  directives: [CORE_DIRECTIVES, RuneStatItemComponent]
})
export class RuneStatComponent {
  constructor(public runeService: RuneService) {};
}