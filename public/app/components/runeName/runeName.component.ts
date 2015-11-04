import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune.service';

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
      <form (ng-submit)="onSubmit()" #nf="form">
        <div class="col-xs-8 form-group">
          <input class="form-control" type="text" placeholder="new rune page name"
          [(ng-model)]="model.name"
          ng-control="name"
          #name="form"
          required>

          <div [hidden]="name.valid" class="alert alert-danger">
            <span>Name is required</span>
          </div>
        </div>
        <div class="col-xs-4 form-group">
          <input class="btn btn-block btn-primary" type="submit" value="Save"
          [disabled]="!nf.form.valid">
        </div>
      </form>
    </div>
  `,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class RuneNameComponent {
  private showInput: boolean = false;
  public model = {
    name: this.runeService.getName()
  };
  constructor(public runeService: RuneService) {}


  toggleInput() {
    this.showInput = !this.showInput;
  }

  onSubmit() {
    this.runeService.setName(this.model.name);
    this.toggleInput();
  }
}