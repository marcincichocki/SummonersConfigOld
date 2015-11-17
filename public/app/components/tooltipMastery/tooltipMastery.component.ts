import {Component, Input, NgClass, NgFor} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';


@Component({
  selector: 'tooltip-mastery-component',
  directives: [NgClass, NgFor],
  styles: [`
    .c1 { color: #a1161f; }
    .c2 { color: #9f60eb; }
    .c3 { color: #4fb0f9; }

    .tooltip-mastery {
      padding: .5rem;
    }

    .mastery-name {
      font-size: 1.2rem;
    }

    .mastery-rank {
      margin: 0;
      font-size: .8rem;
      color: #999;
    }

    .mastery-rank.available {
      color: #478fca;
    }

    .mastery-rank.active {
      color: #ffd700;
    }

    .mastery-description {
      display: none;
      margin: .3rem 0;
      font-size: .8rem;
    }

    .mastery-description.current,
    .mastery-description.next {
      display: block;
    }

    .mastery-description.next {
      color: #666;
    }

    .mastery-description.next::before {
      content: 'Next rank:\\00a0';
      color: #999;
    }
  `],
  template: `
    <div class="tooltip-mastery">
      <h3
        class="mastery-name c{{ masteryService.getCategory(data.mastery.id) }}">
        {{ data.mastery.name }}
      </h3>
      <p class="mastery-rank"
        [ng-class]="{
          available: masteryService.masteryCheckUp(data.mastery.id),
          active: data.rank > 0
        }">Rank:
        <span>{{ data.rank || 0 }} /</span>
        <span>{{ data.mastery.ranks }}</span>
      </p>
      <p class="mastery-description"
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