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
var TooltipRuneComponent = (function () {
    function TooltipRuneComponent() {
    }
    __decorate([
        angular2_1.Input('data'), 
        __metadata('design:type', Object)
    ], TooltipRuneComponent.prototype, "rune");
    TooltipRuneComponent = __decorate([
        angular2_1.Component({
            selector: 'tooltip-rune-component',
            template: "\n    <div class=\"tooltip-rune\">\n      <h3 class=\"name {{ rune.type }}\">{{ rune.name }}</h3>\n      <p class=\"description\">{{ rune.description }}</p>\n      <span class=\"tier\">Tier {{ rune.tier }}</span>\n      <span class=\"ip\">{{ rune.ip }} ip</span>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipRuneComponent);
    return TooltipRuneComponent;
})();
exports.TooltipRuneComponent = TooltipRuneComponent;
