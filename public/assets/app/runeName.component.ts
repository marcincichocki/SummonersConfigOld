import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RuneService} from './rune.service';

@Component({
  selector: 'rune-name-component',
  template: `
    <div class="row">
      <div class="col-xs-8">
        <h1 *ng-if="!showInput">{{ runeService.getName() }}</h1>
        <input type="text" placeholder="new rune page name" *ng-if="showInput">
      </div>
      <div class="col-xs-4">
        <button class="btn btn-block btn-primary"
          (click)="toggleInput()"
          *ng-if="!showInput">Change name</button>
        <button class="btn btn-block btn-primary"
          (click)="toggleInput()"
          *ng-if="showInput">Save</button>
      </div>
    </div>
  `,
  directives: [CORE_DIRECTIVES]
})
export class RuneNameComponent {
  public showInput: boolean = false;
  constructor(public runeService: RuneService) {}


  toggleInput() {
    this.showInput = !this.showInput;
  }
}