import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';

import {RuneService} from '../../services/rune.service';
import {SearchPipe} from '../../pipes/search.pipe';
import {RuneListItemComponent} from '../runeListItem/runeListItem.component';


@Component({
  selector: 'rune-list-component',
  pipes: [SearchPipe],
  templateUrl: './app/components/runeList/runeList.component.html',
  directives: [CORE_DIRECTIVES, RuneListItemComponent]
})
export class RuneListComponent {
  @Input() searchComponent;
  constructor(public runeService: RuneService) {};
}