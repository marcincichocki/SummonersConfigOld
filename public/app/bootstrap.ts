import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import {AppComponent} from './components/app/app.component';
import {RuneService} from './services/rune/rune.service';

// just for test, move service to separate file
import {TooltipService} from './directives/tooltip.directive';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_BINDINGS, RuneService, TooltipService]);