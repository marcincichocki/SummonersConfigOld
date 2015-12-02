import {Component, Input, NgClass, NgFor} from 'angular2/angular2';

import {MasteryPageMasteryComponent} from '../masteryPageMastery/masteryPageMastery.component';
import {MasteryService} from '../../services/mastery/mastery.service';
import {TooltipDirective} from '../../directives/tooltip.directive';


@Component({
  selector: 'mastery-page-row-component',
  template: `
    <div class="mastery-row row{{ rowIndex + 1 }}"
      [ng-class]="{ even: masteryService.isEven(rowIndex + 1) }">
      <mastery-page-mastery-component
        *ng-for="#mastery of row"
        [tooltip]="{
          type: 'mastery',
          data: {
            mastery: masteryService.masteries[mastery],
            rank: masteryService.getRank(mastery)
          }
        }"
        (wheel)="masteryService.onScroll(mastery, $event)"
        (click)="masteryService.addMastery(mastery, $event)"
        (contextmenu)="masteryService.removeMastery(mastery, $event)"
        [mastery]="mastery"
        [row-index]="rowIndex">
      </mastery-page-mastery-component>
    </div>
  `,
  directives: [MasteryPageMasteryComponent, NgClass, NgFor, TooltipDirective]
})
export class MasteryPageRowComponent {
  @Input() row;
  @Input('index') rowIndex;

  constructor(public masteryService: MasteryService) { }
}