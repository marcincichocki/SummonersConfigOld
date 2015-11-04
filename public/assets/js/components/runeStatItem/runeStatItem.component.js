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
var rune_service_1 = require('../../services/rune.service');
var RuneStatItemComponent = (function () {
    function RuneStatItemComponent(runeService) {
        this.runeService = runeService;
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], RuneStatItemComponent.prototype, "stat");
    RuneStatItemComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-stat-item-component',
            template: "\n    <div>\n      <h6>{{ runeService.stats[stat.unit] }}</h6>\n      <p>{{ stat.value }}{{ runeService.isPercentage(stat.unit) }}</p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneStatItemComponent);
    return RuneStatItemComponent;
})();
exports.RuneStatItemComponent = RuneStatItemComponent;
