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
var pageName_component_1 = require('../pageName/pageName.component');
var MasteryPageNameComponent = (function () {
    function MasteryPageNameComponent(masteryService) {
        this.masteryService = masteryService;
        this.placeholder = 'New mastery page name';
    }
    MasteryPageNameComponent = __decorate([
        angular2_1.Component({
            selector: 'mastery-page-name-component',
            directives: [pageName_component_1.PageNameComponent],
            template: "\n    <page-name-component\n      [service]=\"masteryService\"\n      [placeholder]=\"placeholder\">\n    </page-name-component>\n  "
        }), 
        __metadata('design:paramtypes', [mastery_service_1.MasteryService])
    ], MasteryPageNameComponent);
    return MasteryPageNameComponent;
})();
exports.MasteryPageNameComponent = MasteryPageNameComponent;
