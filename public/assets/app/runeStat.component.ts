import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RuneService} from './rune.service';

@Component({
  selector: 'rune-stat-component',
  styles: [`
    #rune-stat {
      float: left;
      width: 100%;
      height: 50vh;
      overflow: auto;
    }
  `],
  template: `
    <div id="rune-stat">
      <div *ng-for="#stat of runeService.page[runeService.active].sums">
        <h6>{{ runeService.stats[stat.unit] }}</h6>
        <p>{{ stat.value }}{{ runeService.isPercentage(stat.unit) }}</p>
      </div>
    </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class RuneStatComponent {
  constructor(public runeService: RuneService) {};
}