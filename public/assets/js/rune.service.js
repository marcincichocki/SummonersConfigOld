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
        this.types = ['mark', 'seal', 'glyph', 'quintessence'];
        this.name = 'Rune Page #';
        this.runes = [];
        this.page = [new Page_1.Page(this.name + "1")];
        this.active = 0;
    }
    RuneService.prototype.getRunes = function () {
        var _this = this;
        this.http.get('assets/app/data/en/runes.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.stats = data.stats;
            _this.runes = data.runes;
        }, function (error) { return console.log(error); }, function () { return console.log('Done!'); });
        this.http.get('assets/app/data/en/runesStats.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.runesStats = data;
        }, function (error) { return console.log(error); }, function () { return console.log('Done!'); });
    };
    RuneService.prototype.addPage = function (name) {
        if (name === void 0) { name = this.name + (this.page.length + 1); }
        if (this.page.length < 20) {
            this.page.push(new Page_1.Page(name));
            this.changePage(this.page.length - 1);
        }
    };
    RuneService.prototype.removePage = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.page.length > 1) {
            this.page.splice(page, 1);
            this.changePage();
        }
    };
    RuneService.prototype.isInRange = function (page, max) {
        return page >= 0 && page < (max || this.page.length);
    };
    RuneService.prototype.changePage = function (page) {
        if (page === void 0) { page = 0; }
        if (this.isInRange(page)) {
            this.active = page;
        }
    };
    RuneService.prototype.clearPage = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            this.page[page] = new Page_1.Page(this.getName());
        }
    };
    RuneService.prototype.isEmpty = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            return !this.page[page].sums.length;
        }
    };
    RuneService.prototype.isActive = function (page) {
        if (this.isInRange(page)) {
            return page === this.active;
        }
    };
    RuneService.prototype.getName = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            return this.page[page].name;
        }
    };
    RuneService.prototype.setName = function (name, page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            this.page[page].name = name;
        }
    };
    RuneService.prototype.addRune = function (id, type, img) {
        var typeId = this.types.indexOf(type);
        if (this.page[this.active].counter[typeId] > 0) {
            this.page[this.active].addRune(id, typeId, img);
            this.count();
        }
        else {
            console.log("Reached maximum of " + type);
        }
    };
    RuneService.prototype.removeRune = function (id) {
        this.page[this.active].removeRune(id);
        this.count();
    };
    RuneService.prototype.count = function () {
        var _this = this;
        var runes = this.page[this.active].runes.map(function (rune) { return _this.runesStats[rune.id]; });
        this.page[this.active].count(runes);
    };
    RuneService.prototype.isPercentage = function (unit) {
        return unit.indexOf('Percent') > -1 ? '%' : '';
    };
    RuneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RuneService);
    return RuneService;
})();
exports.RuneService = RuneService;
