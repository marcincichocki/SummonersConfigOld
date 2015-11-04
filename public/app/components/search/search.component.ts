import {Component, FORM_DIRECTIVES} from 'angular2/angular2';


@Component({
  directives: [FORM_DIRECTIVES],
  selector: 'search-component',
  template: `
    <input type="text" placeholder="Search" [(ng-model)]="query">
  `
})
export class SearchComponent {
  public query: string = '';
}