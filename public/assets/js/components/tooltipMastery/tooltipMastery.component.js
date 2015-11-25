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
var TooltipMasteryComponent = (function () {
    function TooltipMasteryComponent(masteryService) {
        this.masteryService = masteryService;
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], TooltipMasteryComponent.prototype, "data");
    TooltipMasteryComponent = __decorate([
        angular2_1.Component({
            selector: 'tooltip-mastery-component',
            directives: [angular2_1.NgClass, angular2_1.NgFor],
            template: "\n    <div class=\"tooltip-mastery\">\n      <h3 class=\"c{{ masteryService.getCategory(data.mastery.id) }}\">\n        {{ data.mastery.name }}\n      </h3>\n      <p class=\"rank\"\n        [ng-class]=\"{\n          available: masteryService.masteryCheckUp(data.mastery.id),\n          active: data.rank > 0\n        }\">Rank:\n        <span>{{ data.rank || 0 }} /</span>\n        <span>{{ data.mastery.ranks }}</span>\n      </p>\n      <p class=\"description\"\n        *ng-for=\"#description of data.mastery.description, #i = index\"\n        [ng-class]=\"{\n          current: data.rank - 1 === i,\n          next: (data.rank || 0) === i\n        }\">{{ description }}\n      </p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [mastery_service_1.MasteryService])
    ], TooltipMasteryComponent);
    return TooltipMasteryComponent;
})();
exports.TooltipMasteryComponent = TooltipMasteryComponent;
