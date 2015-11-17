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
            styles: ["\n    .tooltip-rune {\n      padding: 0 1rem;\n      text-align: center;\n    }\n\n    .name {\n      font-size: 1.1rem;\n      margin: 1.5rem 0 .5rem;\n    }\n\n    .description {\n      font-size: .8rem;\n    }\n\n    .tier,\n    .ip {\n      font-size: .7rem;\n      position: absolute;\n      top: 2px;\n    }\n\n    .tier {\n      left: 3px;\n      color: orange;\n    }\n\n    .ip {\n      right: 3px;\n    }\n\n    .mark { color: #a1161f; }\n    .seal { color: #c7da27; }\n    .glyph { color: #4fb0f9; }\n    .quintessence { color: #9f60eb; }\n  "],
            encapsulation: angular2_1.ViewEncapsulation.Native,
            template: "\n    <div class=\"tooltip-rune\">\n      <h3 class=\"name {{ rune.type }}\">{{ rune.name }}</h3>\n      <p class=\"description\">{{ rune.description }}</p>\n      <span class=\"tier\">Tier {{ rune.tier }}</span>\n      <span class=\"ip\">{{ rune.ip }} ip</span>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TooltipRuneComponent);
    return TooltipRuneComponent;
})();
exports.TooltipRuneComponent = TooltipRuneComponent;
