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
var Tooltip = (function () {
    function Tooltip() {
    }
    Tooltip.prototype.show = function () {
        console.log("Enter: " + this.rune.name);
    };
    Tooltip.prototype.follow = function (event) {
        console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
    };
    Tooltip.prototype.hide = function () {
        console.log('Hide');
    };
    Tooltip = __decorate([
        angular2_1.Directive({
            selector: '[tooltip]',
            inputs: [
                'rune: tooltip'
            ],
            host: {
                '(mouseenter)': 'show()',
                '(mousemove)': 'follow($event)',
                '(mouseleave)': 'hide()'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], Tooltip);
    return Tooltip;
})();
exports.Tooltip = Tooltip;
