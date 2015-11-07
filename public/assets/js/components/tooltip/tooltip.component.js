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
var TooltipComponent = (function () {
    function TooltipComponent(tooltipService) {
        this.tooltipService = tooltipService;
    }
    TooltipComponent.prototype.show = function (type) {
        return this.tooltipService.tooltip.type === type;
    };
    TooltipComponent = __decorate([
        angular2_1.Component({
            selector: 'tooltip-component',
            template: "\n    <div id=\"tooltip\" *ng-if=\"tooltipService.tooltip\"\n      style.top=\"{{tooltipService.y}}px\"\n      style.left=\"{{tooltipService.x}}px\">\n      <div id=\"tooltip-rune\" *ng-if=\"show('rune')\">\n        THIS IS A RUNE TOOLTIP\n        {{ tooltipService.tooltip.data.name }}\n      </div>\n      <div id=\"tooltip-mastery\" *ng-if=\"show('mastery')\">\n        so basicly this is how you make different templates for tooltips,\n        you pass type and make new div where you check type and hide if its\n        bad.\n      </div>\n    </div>\n  ",
            styles: ["\n    #tooltip {\n      position: absolute;\n      font-size: 1rem;\n      color: #fff;\n      width: 200px;\n      height: 50px;\n      border-radius: 5px;\n      background-color: #000;\n      text-align: center;\n    }\n  "],
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [tooltip_service_1.TooltipService])
    ], TooltipComponent);
    return TooltipComponent;
})();
exports.TooltipComponent = TooltipComponent;
