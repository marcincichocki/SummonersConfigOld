import {Component, Input} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';


@Component({
  selector: 'rune-stat-item-component',
  template: `
    <div>
      <h6>{{ runeService.stats[stat.unit] }}</h6>
      <p>{{ stat.value }}{{ runeService.isPercentage(stat.unit) }}</p>
    </div>
  `
})
export class RuneStatItemComponent {
  @Input() stat;
  constructor(public runeService: RuneService) {}
}