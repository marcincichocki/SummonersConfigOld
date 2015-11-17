import {Component, Input} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';


@Component({
  selector: 'tooltip-rune-sums-component',
  template: `
    <div class="tooltip-rune-sums">
      <h3 class="rune-page-name">{{ runeService.getName(data.index) }}</h3>
      <p *ng-for="#sum of data.sums">
        <span>{{ sum.value }}{{ runeService.isPercentage(sum.unitId) }}</span>
        <span>{{ runeService.stats[sum.unitId] }}</span>
      </p>
    </div>
  `
})
export class TooltipRuneSumsComponent {
  @Input() data;

  constructor(public runeService: RuneService) { }
}