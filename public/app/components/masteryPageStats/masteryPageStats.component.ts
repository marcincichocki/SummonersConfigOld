import {Component, NgFor} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';
import {MasteryPageStatsItemComponent} from '../masteryPageStatsItem/masteryPageStatsItem.component';


@Component({
    selector: 'mastery-page-stats-component',
    template: `
      <div class="row">
        <div class="col-xs-8">
          <div class="mastery-category-points">
            <mastery-page-stats-item-component
              *ng-for="#sum of masteryService.getSums(), #i = index"
              [sum]="sum"
              [index]="i + 1">
            </mastery-page-stats-item-component>
          </div>
          <p>Points available: {{ masteryService.getPointsMax() }}</p>
        </div>
        <div class="col-xs-4">
          <button class="btn btn-block btn-primary"
            (click)="masteryService.clearPage()"
            [disabled]="masteryService.isEmpty()">Clear</button>
        </div>
      </div>
    `,
    directives: [NgFor, MasteryPageStatsItemComponent]
})
export class MasteryPageStatsComponent {
  constructor(public masteryService: MasteryService) { }
}