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
var tooltip_directive_1 = require('../../directives/tooltip.directive');
var PageGroupComponent = (function () {
    function PageGroupComponent() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], PageGroupComponent.prototype, "service");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], PageGroupComponent.prototype, "type");
    PageGroupComponent = __decorate([
        angular2_1.Component({
            selector: 'page-group-component',
            directives: [angular2_1.NgFor, angular2_1.NgClass, tooltip_directive_1.TooltipDirective],
            template: "\n    <div class=\"row\">\n      <div class=\"col-8 page-group\">\n        <button class=\"btn\"\n          *ng-for=\"#page of service.page, #i = index\"\n          (click)=\"service.changePage(i)\"\n          [ng-class]=\"{active: service.isActive(i)}\"\n          [tooltip]=\"{ type: type, data: { sums: page.sums, index: i } }\">{{ i + 1 }}\n        </button>\n      </div>\n      <div class=\"col-4\">\n        <button class=\"btn btn-block gap\"\n          (click)=\"service.addPage()\"\n          [disabled]=\"service.page.length >= 20\">Add\n        </button>\n        <button class=\"btn btn-block gap\"\n          (click)=\"service.removePage()\"\n          [disabled]=\"service.page.length <= 1\">Remove\n        </button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PageGroupComponent);
    return PageGroupComponent;
})();
exports.PageGroupComponent = PageGroupComponent;
