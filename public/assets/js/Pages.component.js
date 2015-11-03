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
var PagesComponent = (function () {
    function PagesComponent(runeService) {
        this.runeService = runeService;
    }
    PagesComponent = __decorate([
        angular2_1.Component({
            selector: 'pages-component',
            styles: ["\n    .pages {\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    .pages > button {\n      margin: 4px;\n      flex-grow: 1;\n      flex-basis: 50px;\n    }\n  "],
            template: "\n    <div class=\"row\">\n      <div class=\"col-xs-8 pages\">\n        <button class=\"btn btn-primary-outline\"\n          *ng-for=\"#page of runeService.page, #i = index\"\n          (click)=\"runeService.changePage(i)\"\n          [disabled]=\"runeService.isActive(i)\"\n          [ng-class]=\"{active: runeService.isActive(i)}\">{{ i + 1 }}\n        </button>\n      </div>\n      <div class=\"col-xs-4\">\n        <button class=\"btn btn-block btn-primary\"\n          (click)=\"runeService.addPage()\"\n          [disabled]=\"runeService.page.length >= 20\">Add page\n        </button>\n        <button class=\"btn btn-block btn-primary\"\n          (click)=\"runeService.removePage()\"\n          [disabled]=\"runeService.page.length <= 1\">Remove page\n        </button>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], PagesComponent);
    return PagesComponent;
})();
exports.PagesComponent = PagesComponent;
