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
var MasteryPageMasteryComponent = (function () {
    function MasteryPageMasteryComponent(masteryService) {
        this.masteryService = masteryService;
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], MasteryPageMasteryComponent.prototype, "j");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], MasteryPageMasteryComponent.prototype, "mastery");
    MasteryPageMasteryComponent = __decorate([
        angular2_1.Component({
            selector: 'mastery-page-mastery-component',
            template: "\n    <div class=\"mastery m{{ mastery }}\"\n      [ng-class]=\"{\n        available: masteryService.masteryCheckUp(mastery),\n        active: masteryService.isMasteryActive(mastery),\n        max: masteryService.isMasteryMaxed(mastery)\n      }\">\n\n      <p class=\"rank\" *ng-if=\"masteryService.isEven(j)\">\n        <span>{{ masteryService.getRank(mastery) || 0 }}/</span>\n        <span>{{ masteryService.masteries[mastery].ranks }}</span>\n      </p>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [mastery_service_1.MasteryService])
    ], MasteryPageMasteryComponent);
    return MasteryPageMasteryComponent;
})();
exports.MasteryPageMasteryComponent = MasteryPageMasteryComponent;
