import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_BINDINGS} from 'angular2/http';

import {AppComponent} from './components/app/app.component';
import {RuneService} from './services/rune.service';


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_BINDINGS, RuneService]);