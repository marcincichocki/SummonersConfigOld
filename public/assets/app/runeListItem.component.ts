import {Component, Input} from 'angular2/angular2';


@Component({
  selector: 'rune-list-item-component',
  templateUrl: 'assets/app//templates/runeListItem.component.html'
})
export class RuneListItemComponent {
  @Input() rune;
}