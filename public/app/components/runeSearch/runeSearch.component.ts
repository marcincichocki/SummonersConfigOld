import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';


@Component({
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  selector: 'rune-search-component',
  template: `
    <div class="form-inline">
      <div class="form-group">
        <input class="form-control" type="text" placeholder="Search" [(ng-model)]="query">
      </div>
      <div class="form-group">
        <label class="checkbox" *ng-for="#tier of tiers">
          <input type="checkbox" [(ng-model)]="tier.selected">{{ tier.name }}
        </label>
      </div>
    </div>
  `
})
export class RuneSearchComponent {
  public query: string = '';
  public tiers: Tier[] = [
    new Tier(1, 'Tier 1', false),
    new Tier(2, 'Tier 2', false),
    new Tier(3, 'Tier 3', true)
  ];

  getTiers() {
    return this.tiers.filter(tier => tier.selected).map(tier => tier.id);
  }
}


class Tier {
  constructor(
    public id: number,
    public name: string,
    public selected: boolean
  ) { }
}