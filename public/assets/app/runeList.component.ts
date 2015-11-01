import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';
import {RuneService} from './rune.service';
import {SearchPipe} from './search.pipe';
import {RuneListItemComponent} from './runeListItem.component';

@Component({
  selector: 'rune-list-component',
  styles: [`
    #runes-list {
      float: left;
      width: 50vw;
      height: 50vh;
      overflow: auto;
    }
  `],
  pipes: [SearchPipe],
  templateUrl: 'assets/app/templates/runeList.component.html',
  directives: [CORE_DIRECTIVES, RuneListItemComponent]
})
export class RuneListComponent {
  @Input() searchComponent;
  constructor(public runeService: RuneService) {};
}