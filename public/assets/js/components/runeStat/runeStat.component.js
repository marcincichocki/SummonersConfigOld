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
var rune_service_1 = require('../../services/rune/rune.service');
var runeStatItem_component_1 = require('../runeStatItem/runeStatItem.component');
var RuneStatComponent = (function () {
    function RuneStatComponent(runeService) {
        this.runeService = runeService;
    }
    ;
    RuneStatComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-stat-component',
            template: "\n    <div class=\"row\">\n      <div class=\"col-xs-8\">\n        <rune-stat-item-component\n          *ng-for=\"#sum of runeService.page[runeService.active].sums, #i = index\"\n          [sum]=\"sum\">\n        </rune-stat-item-component>\n      </div>\n      <div class=\"col-xs-4\">\n        <button class=\"btn btn-block btn-primary\"\n          (click)=\"runeService.clearPage()\"\n          [disabled]=\"runeService.isEmpty()\">Clear</button>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, runeStatItem_component_1.RuneStatItemComponent]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneStatComponent);
    return RuneStatComponent;
})();
exports.RuneStatComponent = RuneStatComponent;
