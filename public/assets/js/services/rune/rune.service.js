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
var Rune_1 = require('./Rune');
var UniqueRune_1 = require('./UniqueRune');
var RuneService = (function () {
    function RuneService(http) {
        this.http = http;
        this.types = ['mark', 'seal', 'glyph', 'quintessence'];
        this.name = 'Rune Page #';
        this.page = [new Page_1.Page(this.name + "1")];
        this.active = 0;
    }
    RuneService.prototype.getRunes = function () {
        var _this = this;
        this.http.get('./app/data/en/runes.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.stats = data.stats;
            _this.runes = data.runes;
        }, function (error) { return console.log(error); });
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
    RuneService.prototype.getIp = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            return this.page[page].ip;
        }
    };
    RuneService.prototype.getTypeId = function (id) {
        return this.types.indexOf(this.runes[id].type);
    };
    RuneService.prototype.addRune = function (id, count) {
        if (count === void 0) { count = true; }
        var typeId = this.getTypeId(id);
        if (this.page[this.active].counter[typeId] > 0) {
            // Add new rune
            this.page[this.active].addRune(new Rune_1.Rune(id), typeId);
            // update sums
            if (count)
                this.count();
        }
    };
    RuneService.prototype.removeRune = function (rune) {
        var typeId = this.getTypeId(rune.id);
        if (this.page[this.active].runes.length) {
            this.page[this.active].removeRune(rune, typeId);
            this.count();
        }
    };
    RuneService.prototype.count = function () {
        var _this = this;
        // Get list of unique ids.
        var uniqueIds = this.page[this.active].runes
            .map(function (rune) { return rune.id; })
            .filter(function (id, index, self) { return self.indexOf(id) === index; });
        // Prepare array to store unique runes.
        var runes = [];
        // For each unique id add new unique rune.
        uniqueIds.forEach(function (id) {
            var rune = new UniqueRune_1.UniqueRune(
            // Ip cost of specyfic rune.
            _this.runes[id].ip, 
            // Stats of specyfic rune.
            _this.runes[id].stats, 
            // quantity of exactly same runes.
            _this.page[_this.active].runes.filter(function (rune) { return rune.id === id; }).reduce(function (a) { return a + 1; }, 0));
            runes.push(rune);
        });
        // Call specyfic method to generate sums.
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
