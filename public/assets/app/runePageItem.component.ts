import {Component, Input} from 'angular2/angular2';

@Component({
  selector: 'rune-page-item-component',
  templateUrl: 'assets/app/templates/runePageItem.component.html',
})
export class RunePageItemComponent {
  @Input() rune;
}