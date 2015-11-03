var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var app_component_1 = require('./app.component');
var http_1 = require('angular2/http');
var rune_service_1 = require('./rune.service');
angular2_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_BINDINGS, rune_service_1.RuneService]);
