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
var tooltip_service_1 = require('../../services/tooltip/tooltip.service');
var rune_service_1 = require('../../services/rune/rune.service');
var mastery_service_1 = require('../../services/mastery/mastery.service');
var tooltipRune_component_1 = require('../tooltipRune/tooltipRune.component');
var tooltipRuneSums_component_1 = require('../tooltipRuneSums/tooltipRuneSums.component');
var tooltipMastery_component_1 = require('../tooltipMastery/tooltipMastery.component');
var TooltipComponent = (function () {
    function TooltipComponent(tooltipService, runeService, masteryService) {
        this.tooltipService = tooltipService;
        this.runeService = runeService;
        this.masteryService = masteryService;
    }
    TooltipComponent = __decorate([
        angular2_1.Component({
            selector: 'tooltip-component',
            templateUrl: './app/components/tooltip/tooltip.component.html',
            styleUrls: ['./app/components/tooltip/style.css'],
            directives: [
                angular2_1.CORE_DIRECTIVES,
                tooltipRune_component_1.TooltipRuneComponent,
                tooltipRuneSums_component_1.TooltipRuneSumsComponent,
                tooltipMastery_component_1.TooltipMasteryComponent
            ]
        }), 
        __metadata('design:paramtypes', [tooltip_service_1.TooltipService, rune_service_1.RuneService, mastery_service_1.MasteryService])
    ], TooltipComponent);
    return TooltipComponent;
})();
exports.TooltipComponent = TooltipComponent;
