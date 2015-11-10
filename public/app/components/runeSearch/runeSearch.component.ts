import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';


@Component({
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
  selector: 'rune-search-component',
  template: `
    <label *ng-for="#tier of tiers">
      <input type="checkbox" [(ng-model)]="tier.selected">{{ tier.name }}
    </label>
    <input type="text" placeholder="Search" [(ng-model)]="query">
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