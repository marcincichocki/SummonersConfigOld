import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {RuneService} from '../../services/rune/rune.service';

@Component({
  selector: 'rune-name-component',
  templateUrl: './app/components/runeName/runeName.component.html',
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