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
      <h5>{{ runeService.stats[sum.unitId] }}</h5>
      <p>{{ sum.value }}{{ runeService.isPercentage(sum.unitId) }}</p>
    </div>
  `
})
export class RuneStatItemComponent {
  @Input() sum;
  constructor(public runeService: RuneService) {}
}