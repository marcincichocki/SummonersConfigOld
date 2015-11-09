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
var masteryPageMastery_component_1 = require('../masteryPageMastery/masteryPageMastery.component');
var mastery_service_1 = require('../../services/mastery/mastery.service');
var tooltip_directive_1 = require('../../directives/tooltip.directive');
var MasteryPageRowComponent = (function () {
    function MasteryPageRowComponent(masteryService) {
        this.masteryService = masteryService;
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], MasteryPageRowComponent.prototype, "row");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], MasteryPageRowComponent.prototype, "j");
    MasteryPageRowComponent = __decorate([
        angular2_1.Component({
            selector: 'mastery-page-row-component',
            template: "\n    <div class=\"mastery-row row{{ j + 1 }}\"\n      [ng-class]=\"{ even: masteryService.isEven(j + 1) }\">\n      <mastery-page-mastery-component\n        *ng-for=\"#mastery of row\"\n        [tooltip]=\"{ type: 'mastery', data: { mastery: masteryService.masteries[mastery], rank: masteryService.getRank(mastery) } }\"\n        (wheel)=\"masteryService.onScroll(mastery, $event)\"\n        (click)=\"masteryService.addMastery(mastery, $event)\"\n        (contextmenu)=\"masteryService.removeMastery(mastery, $event)\"\n        [mastery]=\"mastery\"\n        [j]=\"j\">\n      </mastery-page-mastery-component>\n    </div>\n  ",
            directives: [masteryPageMastery_component_1.MasteryPageMasteryComponent, angular2_1.CORE_DIRECTIVES, tooltip_directive_1.TooltipDirective]
        }), 
        __metadata('design:paramtypes', [mastery_service_1.MasteryService])
    ], MasteryPageRowComponent);
    return MasteryPageRowComponent;
})();
exports.MasteryPageRowComponent = MasteryPageRowComponent;
