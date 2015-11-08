import {Component, OnInit} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Routes, APP_ROUTES} from '../../routes/route.config';
import {RuneService} from '../../services/rune/rune.service';
import {MasteryService} from '../../services/mastery/mastery.service';
import {TooltipComponent} from '../tooltip/tooltip.component';


@Component({
    selector: 'app-component',
    templateUrl: './app/components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, TooltipComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public routes = Routes;
  constructor(
    public runeService: RuneService,
    public masteryService: MasteryService
  ) {}

  onInit() {
    this.runeService.getRunes();
    this.masteryService.getMasteries();
  }
}