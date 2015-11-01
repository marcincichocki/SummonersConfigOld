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
var http_1 = require('angular2/http');
var core_1 = require('angular2/core');
var Page_1 = require('./Page');
var RuneService = (function () {
    function RuneService(http) {
        this.http = http;
        this.runes = [];
        this.page = [new Page_1.Page(this.name + "1")];
        this.active = 0;
        this.name = 'Rune Page #';
        this.types = ['mark', 'seal', 'glyph', 'quintessence'];
    }
    RuneService.prototype.getRunes = function () {
        var _this = this;
        this.http.get('assets/app/data/en/runes-lang.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.stats = data.stats;
            _this.runes = data.runes;
        }, function (error) { return console.log(error); }, function () { return console.log('Done!'); });
        this.http.get('assets/app/data/en/runes.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.RUNES = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Done!'); });
    };
    RuneService.prototype.addPage = function (name) {
        if (this.page.length < 20) {
            this.page.push(new Page_1.Page(this.name + this.page.length));
        }
    };
    RuneService.prototype.addRune = function (id) {
        var rune = this.RUNES[id];
        var type = this.types.indexOf(rune.type);
        if (this.page[this.active].counter[type] > 0) {
            this.page[this.active].addRune(rune, type);
            this.count();
        }
        else {
            console.log("Reached maximum of " + rune.type);
        }
    };
    RuneService.prototype.removeRune = function (id) {
        var rune = this.RUNES[id];
        var type = this.types.indexOf(rune.type);
        this.page[this.active].removeRune(rune, type);
    };
    RuneService.prototype.count = function () {
        var _this = this;
        var runes = this.page[this.active].runes.map(function (rune) { return _this.RUNES[rune]; });
        this.page[this.active].count(runes);
    };
    RuneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RuneService);
    return RuneService;
})();
exports.RuneService = RuneService;
