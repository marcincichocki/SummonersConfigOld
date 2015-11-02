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
var rune_service_1 = require('./rune.service');
var RuneStatComponent = (function () {
    function RuneStatComponent(runeService) {
        this.runeService = runeService;
    }
    ;
    RuneStatComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-stat-component',
            styles: ["\n    #rune-stat {\n      float: left;\n      width: 100%;\n      height: 50vh;\n      overflow: auto;\n    }\n  "],
            template: "\n    <div id=\"rune-stat\">\n      <div *ng-for=\"#stat of runeService.page[runeService.active].sums\">\n        <h6>{{ runeService.stats[stat.unit] }}</h6>\n        <p>{{ stat.value }}{{ runeService.isPercentage(stat.unit) }}</p>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneStatComponent);
    return RuneStatComponent;
})();
exports.RuneStatComponent = RuneStatComponent;
