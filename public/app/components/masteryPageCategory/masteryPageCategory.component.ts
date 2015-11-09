import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

import {MasteryPageRowComponent} from '../masteryPageRow/masteryPageRow.component';
import {MasteryService} from '../../services/mastery/mastery.service';


@Component({
  selector: 'mastery-page-category-component',
  template: `
    <div class="category {{ category | lowercase }}">
      <mastery-page-row-component
        *ng-for="#row of masteryService.grid[category], #j = index"
        [row]="row"
        [j]="j">
      </mastery-page-row-component>
      <h3>{{ category }}: {{ masteryService.page[masteryService.active].counter[i] }}</h3>
    </div>
  `,
  directives: [MasteryPageRowComponent, CORE_DIRECTIVES]
})
export class MasteryPageCategoryComponent {
  @Input() category;
  @Input() i;

  constructor(public masteryService: MasteryService) { }
}