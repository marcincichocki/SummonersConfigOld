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
var RuneListItemComponent = (function () {
    function RuneListItemComponent() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], RuneListItemComponent.prototype, "rune");
    RuneListItemComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-list-item-component',
            templateUrl: 'assets/app//templates/runeListItem.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RuneListItemComponent);
    return RuneListItemComponent;
})();
exports.RuneListItemComponent = RuneListItemComponent;
