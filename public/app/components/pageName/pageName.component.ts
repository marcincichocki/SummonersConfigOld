import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, Input} from 'angular2/angular2';

import {SelectDirective} from '../../directives/select.directive';


@Component({
  selector: 'page-name-component',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, SelectDirective],
  styles: [`
    .ng-valid[required] {
      border-left: 5px solid #42A948;
    }
    .ng-invalid {
      border-left: 5px solid #a94442;
    }
  `],
  template: `
    <div class="row" *ng-if="!showInput">
      <div class="col-xs-8">
        <h1>{{ service.getName() }}</h1>
      </div>
      <div class="col-xs-4">
        <button class="btn btn-block btn-primary"
          (click)="toggleInput()">Change</button>
      </div>
    </div>
    <div class="row" *ng-if="showInput">
      <form (ng-submit)="onSubmit()" #nf="form">
        <div class="col-xs-8 form-group">
          <input class="form-control"
            type="text"
            [placeholder]="placeholder"
            [(ng-model)]="model.name"
            select
            ng-control="name"
            #name="form"
            required>
        </div>
        <div class="col-xs-4 form-group">
          <input class="btn btn-block btn-primary" type="submit" value="Save"
            [disabled]="!nf.form.valid">
        </div>
      </form>
      <div class="col-xs-offset-8 col-xs-4">
        <button class="btn btn-block btn-primary"
          (click)="toggleInput()">Close
        </button>
      </div>
    </div>
  `
})
export class PageNameComponent {
  @Input() service;
  @Input() placeholder: string;

  private showInput: boolean = false;
  private model: Name = new Name();

  toggleInput() {
    this.showInput = !this.showInput;
  }

  onSubmit() {
    this.service.setName(this.model.name);
    this.model.reset();
    this.toggleInput();
  }
}

class Name {
  constructor(public name: string = '') { }

  reset() {
    this.name = '';
  }
}