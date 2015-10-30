import {Component, OnInit} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
import {RuneService} from './rune.service';



@Component({
    selector: 'app-component',
    templateUrl: 'assets/app/templates/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
  public routes = Routes;
  constructor(public runeService: RuneService) {}

  onInit() {
    this.runeService.getRunes();
  }
}