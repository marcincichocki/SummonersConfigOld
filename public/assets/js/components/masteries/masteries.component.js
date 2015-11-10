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
var masteryPage_component_1 = require('../masteryPage/masteryPage.component');
var masteryPageGroup_component_1 = require('../masteryPageGroup/masteryPageGroup.component');
var masteryPageName_component_1 = require('../masteryPageName/masteryPageName.component');
var MasteriesComponent = (function () {
    function MasteriesComponent() {
    }
    MasteriesComponent = __decorate([
        angular2_1.Component({
            directives: [
                masteryPage_component_1.MasteryPageComponent,
                masteryPageGroup_component_1.MasteryPageGroupComponent,
                masteryPageName_component_1.MasteryPageNameComponent
            ],
            selector: 'masteries-component',
            template: "\n    <aside class=\"col-xs-4 main-aside\">\n      <mastery-page-group-component></mastery-page-group-component>\n      <mastery-page-name-component></mastery-page-name-component>\n    </aside>\n    <section class=\"col-xs-8 main-section\">\n      <mastery-page-component></mastery-page-component>\n    </section>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MasteriesComponent);
    return MasteriesComponent;
})();
exports.MasteriesComponent = MasteriesComponent;
