import {Component, NgFor, NgClass, Input} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';
import {Rune} from '../../services/rune/Rune';
import {SearchPipe} from '../../pipes/search.pipe';
import {Filter} from '../../pipes/filter.pipe';
import {RuneListItemComponent} from '../runeListItem/runeListItem.component';
import {TooltipDirective} from '../../directives/tooltip.directive';


@Component({
  selector: 'rune-list-component',
  pipes: [SearchPipe, Filter],
  templateUrl: './app/components/runeList/runeList.component.html',
  directives: [NgFor, NgClass, RuneListItemComponent, TooltipDirective]
})
export class RuneListComponent {
  @Input() searchComponent;

  private show: boolean[] = [false, false, false, false];
  private types: RunesByType[] = [];

  constructor(public runeService: RuneService) {
    const runes = Object.keys(this.runeService.runes).map(key => this.runeService.runes[key]);

    this.runeService.types.forEach((type, index) => {
      this.types.push(new RunesByType(
        type,
        runes.filter(rune => rune.type === type)
      ));
    });
  };

  toggle(id: number) {
    this.show[id] = !this.show[id];
  }

  addRune(event: MouseEvent, id: string): void {
    if (event.ctrlKey) {
      this.runeService.addRune(id, {
        max: true
      });
    } else {
      this.runeService.addRune(id);
    }
  }
}

class RunesByType {
  constructor(
    public name: string,
    public runes: Rune[]
  ) { }
}