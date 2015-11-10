import {Component, NgFor} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';


@Component({
    selector: 'mastery-page-stats-component',
    template: `
      <div class="row">
        <div class="col-xs-8">
          <div class="mastery-category-points">
            <div class="mastery-category-point"
              *ng-for="#category of masteryService.categories, #i = index">
              <div class="{{ category | lowercase }}-image"></div>
              <span>{{ masteryService.getPointsOfCategory(i) }}</span>
            </div>
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
    directives: [NgFor]
})
export class MasteryPageStatsComponent {
  constructor(public masteryService: MasteryService) { }
}