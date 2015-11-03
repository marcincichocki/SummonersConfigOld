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
var search_component_1 = require('./search.component');
var runeList_component_1 = require('./runeList.component');
var runeStat_component_1 = require('./runeStat.component');
var runePage_component_1 = require('./runePage.component');
var runeName_component_1 = require('./runeName.component');
var pages_component_1 = require('./pages.component');
var RunesComponent = (function () {
    function RunesComponent() {
    }
    RunesComponent = __decorate([
        angular2_1.Component({
            directives: [
                search_component_1.SearchComponent,
                runeList_component_1.RuneListComponent,
                runeStat_component_1.RuneStatComponent,
                runePage_component_1.RunePageComponent,
                runeName_component_1.RuneNameComponent,
                pages_component_1.PagesComponent
            ],
            selector: 'runes-component',
            template: "\n    <aside class=\"col-xs-4 runes-aside\">\n      <pages-component></pages-component>\n      <rune-name-component></rune-name-component>\n      <rune-stat-component></rune-stat-component>\n    </aside>\n    <section class=\"col-xs-8 runes-section\">\n      <div class=\"runes-wrapper\">\n        <div class=\"rune-list-wrapper\">\n          <search-component #search-component></search-component>\n          <rune-list-component [search-component]=\"searchComponent\"></rune-list-component>\n        </div>\n        <div class=\"rune-page-wrapper\">\n          <rune-page-component></rune-page-component>\n        </div>\n      </div>\n    </section>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RunesComponent);
    return RunesComponent;
})();
exports.RunesComponent = RunesComponent;
