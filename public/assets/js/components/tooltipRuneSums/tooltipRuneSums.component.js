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
var TooltipRuneSumsComponent = (function () {
    function TooltipRuneSumsComponent(runeService) {
        this.runeService = runeService;
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], TooltipRuneSumsComponent.prototype, "data");
    TooltipRuneSumsComponent = __decorate([
        angular2_1.Component({
            selector: 'tooltip-rune-sums-component',
            template: "\n    <div class=\"tooltip-rune-sums\">\n      <h3 class=\"name\">#{{data.index + 1}} - {{ runeService.getName(data.index) }}</h3>\n      <p class=\"sum\" *ng-for=\"#sum of data.sums\">\n        <span class=\"value\">{{ sum.value }}{{ runeService.isPercentage(sum.unitId) }}</span>\n        <span class=\"unit\">{{ runeService.stats[sum.unitId] }}</span>\n      </p>\n    </div>\n  ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], TooltipRuneSumsComponent);
    return TooltipRuneSumsComponent;
})();
exports.TooltipRuneSumsComponent = TooltipRuneSumsComponent;
