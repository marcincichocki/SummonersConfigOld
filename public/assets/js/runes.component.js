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
var RunesComponent = (function () {
    function RunesComponent() {
    }
    RunesComponent = __decorate([
        angular2_1.Component({
            directives: [search_component_1.SearchComponent, runeList_component_1.RuneListComponent],
            selector: 'runes-component',
            template: "\n    <search-component #search-component></search-component>\n    <rune-list-component [search-component]=\"searchComponent\"></rune-list-component>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], RunesComponent);
    return RunesComponent;
})();
exports.RunesComponent = RunesComponent;
