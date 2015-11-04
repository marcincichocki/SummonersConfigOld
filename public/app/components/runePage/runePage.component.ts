import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune.service';
import {RunePageItemComponent} from '../runePageItem/runePageItem.component';


@Component({
  selector: 'rune-page-component',
  templateUrl: './app/components/runePage/runePage.component.html',
  directives: [CORE_DIRECTIVES, RunePageItemComponent]
})
export class RunePageComponent {
  constructor(public runeService: RuneService) {};
}