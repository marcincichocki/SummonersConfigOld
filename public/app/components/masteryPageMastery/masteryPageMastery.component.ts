import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';


@Component({
  selector: 'mastery-page-mastery-component',
  template: `
    <div class="mastery m{{ mastery }}"
      [ng-class]="{
        available: masteryService.masteryCheckUp(mastery),
        active: masteryService.isMasteryActive(mastery),
        max: masteryService.isMasteryMaxed(mastery)
      }">

      <p class="rank" *ng-if="masteryService.isEven(j)">
        <span>{{ masteryService.getRank(mastery) || 0 }}/</span>
        <span>{{ masteryService.masteries[mastery].ranks }}</span>
      </p>
    </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class MasteryPageMasteryComponent {
  @Input() j;
  @Input() mastery;

  constructor(public masteryService: MasteryService) { }
}