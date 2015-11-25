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
var runeSearch_component_1 = require('../runeSearch/runeSearch.component');
var runeList_component_1 = require('../runeList/runeList.component');
var runeStat_component_1 = require('../runeStat/runeStat.component');
var runePage_component_1 = require('../runePage/runePage.component');
var runePageName_component_1 = require('../runePageName/runePageName.component');
var runeIpTime_component_1 = require('../runeIpTime/runeIpTime.component');
var runePageGroup_component_1 = require('../runePageGroup/runePageGroup.component');
var RunesComponent = (function () {
    function RunesComponent() {
    }
    RunesComponent = __decorate([
        angular2_1.Component({
            directives: [
                runeSearch_component_1.RuneSearchComponent,
                runeList_component_1.RuneListComponent,
                runeStat_component_1.RuneStatComponent,
                runePage_component_1.RunePageComponent,
                runePageName_component_1.RunePageNameComponent,
                runeIpTime_component_1.RuneIpTimeComponent,
                runePageGroup_component_1.RunePageGroupComponent
            ],
            selector: 'runes-component',
            template: "\n    <aside class=\"col-4 main-aside column\">\n      <rune-page-group-component class=\"component\"></rune-page-group-component>\n      <rune-page-name-component class=\"component\"></rune-page-name-component>\n      <rune-ip-time-component class=\"component\"></rune-ip-time-component>\n      <rune-stat-component class=\"component\"></rune-stat-component>\n    </aside>\n    <section class=\"col-8 main-section center\">\n      <div class=\"column\">\n        <rune-search-component #search-component></rune-search-component>\n        <div class=\"runes-wrapper\">\n          <rune-list-component [search-component]=\"searchComponent\"></rune-list-component>\n          <rune-page-component></rune-page-component>\n        </div>\n      </div>\n\n    </section>\n  ",
            styles: ["\n    :host {\n      display: flex;\n      width: 100%;\n    }\n\n    rune-list-component,\n    rune-page-component {\n      display: flex;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], RunesComponent);
    return RunesComponent;
})();
exports.RunesComponent = RunesComponent;
