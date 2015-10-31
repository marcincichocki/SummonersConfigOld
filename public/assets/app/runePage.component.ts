import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RuneService} from './rune.service';
import {RunePageItemComponent} from './runePageItem.component';

@Component({
  selector: 'rune-page-component',
  templateUrl: 'assets/app/templates/runePage.component.html',
  directives: [CORE_DIRECTIVES, RunePageItemComponent]
})
export class RunePageComponent {
  constructor(public runeService: RuneService) {};
}