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
var core_1 = require('angular2/core');
var TooltipService = (function () {
    function TooltipService() {
        this.offsetX = 20;
        this.offsetY = 20;
        this.tooltipMaxWidth = 250;
        this.tooltipMaxHeight = 200;
        this.tooltip = null;
        this.x = 0;
        this.y = 0;
        this.translateX = false;
        this.translateY = false;
    }
    TooltipService.prototype.show = function (tooltip) {
        this.tooltip = tooltip;
    };
    TooltipService.prototype.hide = function () {
        this.tooltip = null;
    };
    // TODO: Make tooltip change position near the "walls"(viewport).
    // UPDATE: hotfix implemented, still need fixing but now does not
    // break the app.
    TooltipService.prototype.follow = function (event) {
        this.x = event.pageX + this.offsetX;
        this.y = event.pageY + this.offsetY;
        var vp = this.inViewport(event.pageX, event.pageY);
        this.translateX = vp.x;
        this.translateY = vp.y;
    };
    TooltipService.prototype.inViewport = function (x, y) {
        return {
            x: x + this.tooltipMaxWidth + this.offsetX > window.innerWidth,
            y: y + this.tooltipMaxHeight + this.offsetY > window.innerHeight
        };
    };
    TooltipService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TooltipService);
    return TooltipService;
})();
exports.TooltipService = TooltipService;
