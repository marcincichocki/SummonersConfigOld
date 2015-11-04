import {Component, Input} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';


@Component({
  selector: 'rune-stat-item-component',
  styles: [`
    h5 {
      font-weight: bold;
    }
  `],
  template: `
    <div>
      <h5>{{ runeService.stats[stat.unit] }}</h5>
      <p>{{ stat.value }}{{ runeService.isPercentage(stat.unit) }}</p>
    </div>
  `
})
export class RuneStatItemComponent {
  @Input() stat;
  constructor(public runeService: RuneService) {}
}