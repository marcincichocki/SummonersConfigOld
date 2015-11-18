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
var tooltip_directive_1 = require('../../directives/tooltip.directive');
var RuneListComponent = (function () {
    function RuneListComponent(runeService) {
        var _this = this;
        this.runeService = runeService;
        this.show = [false, false, false, false];
        this.types = [];
        var runes = Object.keys(this.runeService.runes).map(function (key) { return _this.runeService.runes[key]; });
        this.runeService.types.forEach(function (type, index) {
            _this.types.push(new RunesByType(type, runes.filter(function (rune) { return rune.type === type; })));
        });
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
            pipes: [search_pipe_1.SearchPipe, filter_pipe_1.Filter],
            templateUrl: './app/components/runeList/runeList.component.html',
            styleUrls: ["./app/components/runeList/style.css"],
            directives: [angular2_1.NgFor, angular2_1.NgClass, runeListItem_component_1.RuneListItemComponent, tooltip_directive_1.TooltipDirective]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneListComponent);
    return RuneListComponent;
})();
exports.RuneListComponent = RuneListComponent;
var RunesByType = (function () {
    function RunesByType(name, runes) {
        this.name = name;
        this.runes = runes;
    }
    return RunesByType;
})();
