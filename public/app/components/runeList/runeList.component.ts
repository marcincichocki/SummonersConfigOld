import {Component, CORE_DIRECTIVES, Input} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';
import {SearchPipe} from '../../pipes/search.pipe';
import {FilterType} from '../../pipes/filter.pipe';
import {RuneListItemComponent} from '../runeListItem/runeListItem.component';


@Component({
  selector: 'rune-list-component',
  pipes: [SearchPipe, FilterType],
  templateUrl: './app/components/runeList/runeList.component.html',
  styleUrls: [`./app/components/runeList/style.css`],
  directives: [CORE_DIRECTIVES, RuneListItemComponent]
})
export class RuneListComponent {
  @Input() searchComponent;

  private show: boolean[] = [
    false,
    false,
    false,
    false
  ];

  constructor(public runeService: RuneService) {};

  toggle(id: number) {
    this.show[id] = !this.show[id];
  }
}