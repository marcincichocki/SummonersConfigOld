import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {RuneService} from './rune.service';
import {Search} from './search.pipe';

@Component({
  selector: 'rune-list-component',
  styles: [`
    #runes-list {
      height: 60vh;
      overflow: auto;
    }
  `],
  pipes: [Search],
  templateUrl: 'assets/app/templates/runeList.component.html',
  directives: [CORE_DIRECTIVES]
})
export class RuneListComponent {
  @Input() searchComponent;
  constructor(public runeService: RuneService) {};
}