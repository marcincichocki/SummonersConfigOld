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
var rune_service_1 = require('../../services/rune/rune.service');
var search_pipe_1 = require('../../pipes/search.pipe');
var filter_pipe_1 = require('../../pipes/filter.pipe');
var runeListItem_component_1 = require('../runeListItem/runeListItem.component');
var RuneListComponent = (function () {
    function RuneListComponent(runeService) {
        this.runeService = runeService;
        this.show = [
            false,
            false,
            false,
            false
        ];
    }
    ;
    RuneListComponent.prototype.toggle = function (id) {
        this.show[id] = !this.show[id];
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], RuneListComponent.prototype, "searchComponent");
    RuneListComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-list-component',
            pipes: [search_pipe_1.SearchPipe, filter_pipe_1.FilterType],
            templateUrl: './app/components/runeList/runeList.component.html',
            styleUrls: ["./app/components/runeList/style.css"],
            directives: [angular2_1.CORE_DIRECTIVES, runeListItem_component_1.RuneListItemComponent]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneListComponent);
    return RuneListComponent;
})();
exports.RuneListComponent = RuneListComponent;
