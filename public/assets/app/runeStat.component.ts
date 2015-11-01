import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RuneService} from './rune.service';

@Component({
  selector: 'rune-stat-component',
  styles: [`
    #rune-stat {
      float: left;
      width: 50vw;
      height: 50vh;
      overflow: auto;
    }
  `],
  template: `
    <div id="rune-stat">
      <div *ng-for="#stat of runeService.page[runeService.active].sums">
        <h6>{{ stat.unitId }}</h6>
        <p>{{ stat.value }}</p>
      </div>
    </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class RuneStatComponent {
  constructor(public runeService: RuneService) {};
}