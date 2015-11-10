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
var mastery_service_1 = require('../../services/mastery/mastery.service');
var MasteryPageStatsComponent = (function () {
    function MasteryPageStatsComponent(masteryService) {
        this.masteryService = masteryService;
    }
    MasteryPageStatsComponent = __decorate([
        angular2_1.Component({
            selector: 'mastery-page-stats-component',
            template: "\n      <div class=\"row\">\n        <div class=\"col-xs-8\">\n          <div class=\"mastery-category-points\">\n            <div class=\"mastery-category-point\"\n              *ng-for=\"#category of masteryService.categories, #i = index\">\n              <div class=\"{{ category | lowercase }}-image\"></div>\n              <span>{{ masteryService.getPointsOfCategory(i) }}</span>\n            </div>\n          </div>\n          <p>Points available: {{ masteryService.getPointsMax() }}</p>\n        </div>\n        <div class=\"col-xs-4\">\n          <button class=\"btn btn-block btn-primary\"\n            (click)=\"masteryService.clearPage()\"\n            [disabled]=\"masteryService.isEmpty()\">Clear</button>\n        </div>\n      </div>\n    ",
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [mastery_service_1.MasteryService])
    ], MasteryPageStatsComponent);
    return MasteryPageStatsComponent;
})();
exports.MasteryPageStatsComponent = MasteryPageStatsComponent;
