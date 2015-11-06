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
var SearchComponent = (function () {
    function SearchComponent() {
        this.query = '';
        this.tiers = [
            new Tier(1, 'Tier 1', false),
            new Tier(2, 'Tier 2', false),
            new Tier(3, 'Tier 3', true)
        ];
    }
    SearchComponent.prototype.getTiers = function () {
        var selectedTiers = this.tiers.filter(function (tier) { return tier.selected; }).map(function (tier) { return tier.id; });
        console.log(selectedTiers);
        return selectedTiers;
    };
    SearchComponent = __decorate([
        angular2_1.Component({
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES],
            selector: 'search-component',
            template: "\n    <label *ng-for=\"#tier of tiers\">\n      <input type=\"checkbox\" [(ng-model)]=\"tier.selected\">{{ tier.name }}\n    </label>\n    <input type=\"text\" placeholder=\"Search\" [(ng-model)]=\"query\">\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
})();
exports.SearchComponent = SearchComponent;
var Tier = (function () {
    function Tier(id, name, selected) {
        this.id = id;
        this.name = name;
        this.selected = selected;
    }
    return Tier;
})();
