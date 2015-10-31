import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {Search} from './search.pipe';
import {SearchComponent} from './search.component';
import {RuneService} from './rune.service';


@Component({
  pipes: [Search],
  directives: [CORE_DIRECTIVES, SearchComponent],
  selector: 'runes-component',
  styles: [`
    #runes-list {
      height: 60vh;
      overflow: auto;
    }
  `],
  template: `
    <search-component #search-component></search-component>
    <div id="runes-list" *ng-if="runeService.runes.length">
      <h2>Rune list</h2>
      <div class="media" *ng-for="#rune of runeService.runes | search: 'name': searchComponent.query">
        <a class="media-left" href="#">
          <img width="50px" height="50px" alt="rune image">
        </a>
        <div class="media-body">
          <h4 class="media-heading">{{ rune.name }}</h4>
          <p>{{ rune.description }}</p>
        </div>
      </div>
    </div>
  `
})
export class RunesComponent {
  constructor(public runeService: RuneService) {}
}