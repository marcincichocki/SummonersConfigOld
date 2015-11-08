var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var route_config_1 = require('../../routes/route.config');
var rune_service_1 = require('../../services/rune/rune.service');
var mastery_service_1 = require('../../services/mastery/mastery.service');
var tooltip_component_1 = require('../tooltip/tooltip.component');
var AppComponent = (function () {
    function AppComponent(runeService, masteryService) {
        this.runeService = runeService;
        this.masteryService = masteryService;
        this.routes = route_config_1.Routes;
    }
    AppComponent.prototype.onInit = function () {
        this.runeService.getRunes();
        this.masteryService.getMasteries();
    };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'app-component',
            templateUrl: './app/components/app/app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, tooltip_component_1.TooltipComponent]
        }),
        router_1.RouteConfig(route_config_1.APP_ROUTES), 
        __metadata('design:paramtypes', [rune_service_1.RuneService, mastery_service_1.MasteryService])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
