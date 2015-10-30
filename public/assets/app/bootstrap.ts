import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {HTTP_BINDINGS} from 'angular2/http';


bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_BINDINGS]);