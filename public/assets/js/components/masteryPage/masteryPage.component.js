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
var mastery_service_1 = require('../../services/mastery/mastery.service');
var tooltip_directive_1 = require('../../directives/tooltip.directive');
var MasteryPageComponent = (function () {
    function MasteryPageComponent(masteryService) {
        this.masteryService = masteryService;
    }
    MasteryPageComponent = __decorate([
        angular2_1.Component({
            selector: 'mastery-page-component',
            templateUrl: './app/components/masteryPage/masteryPage.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, tooltip_directive_1.TooltipDirective]
        }), 
        __metadata('design:paramtypes', [mastery_service_1.MasteryService])
    ], MasteryPageComponent);
    return MasteryPageComponent;
})();
exports.MasteryPageComponent = MasteryPageComponent;
