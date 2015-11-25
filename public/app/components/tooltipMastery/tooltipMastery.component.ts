import {Component, Input, NgClass, NgFor} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';


@Component({
  selector: 'tooltip-mastery-component',
  directives: [NgClass, NgFor],
  template: `
    <div class="tooltip-mastery">
      <h3 class="c{{ masteryService.getCategory(data.mastery.id) }}">
        {{ data.mastery.name }}
      </h3>
      <p class="rank"
        [ng-class]="{
          available: masteryService.masteryCheckUp(data.mastery.id),
          active: data.rank > 0
        }">Rank:
        <span>{{ data.rank || 0 }} /</span>
        <span>{{ data.mastery.ranks }}</span>
      </p>
      <p class="description"
        *ng-for="#description of data.mastery.description, #i = index"
        [ng-class]="{
          current: data.rank - 1 === i,
          next: (data.rank || 0) === i
        }">{{ description }}
      </p>
    </div>
  `
})
export class TooltipMasteryComponent {
  @Input() data;
  constructor(public masteryService: MasteryService) { }
}