import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {MasteryService} from '../../services/mastery/mastery.service';

@Component({
  selector: 'mastery-page-name-component',
  templateUrl: './app/components/masteryPageName/masteryPageName.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class MasteryPageNameComponent {
  private showInput: boolean = false;
  public model = {
    name: this.masteryService.getName()
  };
  constructor(public masteryService: MasteryService) {}


  toggleInput() {
    this.showInput = !this.showInput;
  }

  onSubmit() {
    this.masteryService.setName(this.model.name);
    this.toggleInput();
  }
}