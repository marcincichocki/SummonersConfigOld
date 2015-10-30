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
var http_1 = require('angular2/http');
var Rune_1 = require('./Rune');
var search_pipe_1 = require('./search.pipe');
var search_component_1 = require('./search.component');
var RunesComponent = (function () {
    function RunesComponent(http) {
        this.http = http;
        this.runes = [new Rune_1.Rune('000', 'Test', 'Desc')];
    }
    RunesComponent.prototype.getRunes = function () {
        var _this = this;
        this.http.get('assets/app/data/en/runes-lang.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.stats = data.stats;
            _this.runes = data.runes;
        }, function (error) { return console.log(error); }, function () { return console.log('Done!'); });
    };
    RunesComponent.prototype.onInit = function () {
        this.getRunes();
    };
    RunesComponent = __decorate([
        angular2_1.Component({
            pipes: [search_pipe_1.Search],
            directives: [angular2_1.CORE_DIRECTIVES, search_component_1.SearchComponent],
            selector: 'runes-component',
            template: "\n    <search-component #search-component></search-component>\n    <div id=\"runes-list\">\n      <h2>Rune list</h2>\n      <div class=\"media\" *ng-for=\"#rune of runes | search: 'name': searchComponent.query\">\n        <a class=\"media-left\" href=\"#\">\n          <img width=\"50px\" height=\"50px\" alt=\"rune image\">\n        </a>\n        <div class=\"media-body\">\n          <h4 class=\"media-heading\">{{ rune.name }}</h4>\n          <p>{{ rune.description }}</p>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RunesComponent);
    return RunesComponent;
})();
exports.RunesComponent = RunesComponent;
