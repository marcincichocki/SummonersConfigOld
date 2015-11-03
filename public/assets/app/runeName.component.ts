import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {RuneService} from './rune.service';

@Component({
  selector: 'rune-name-component',
  template: `
    <div class="row" *ng-if="!showInput">
      <div class="col-xs-8">
        <h1>{{ runeService.getName() }}</h1>
      </div>
      <div class="col-xs-4">
        <button class="btn btn-block btn-primary"
          (click)="toggleInput()">Change name</button>
      </div>
    </div>
    <div class="row" *ng-if="showInput">
      <form action="">
        <div class="col-xs-8 form-group">
          <input class="form-control" type="text" placeholder="new rune page name">
        </div>
        <div class="col-xs-4 form-group">
          <input class="btn btn-block btn-primary" type="submit" value="Save"
          (click)="toggleInput()">
        </div>
      </form>
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