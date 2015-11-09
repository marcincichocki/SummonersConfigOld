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
var MasteryService = (function () {
    function MasteryService(http) {
        this.http = http;
        this.page = [new Page_1.Page(this.name + "1")];
        this.name = 'Mastery Page #';
        this.active = 0;
        this.categories = [
            'Resolve',
            'Cunning',
            'Ferocity'
        ];
    }
    MasteryService.prototype.getMasteries = function () {
        var _this = this;
        this.http.get('./app/data/en/masteries.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.grid = data.masteries;
            _this.masteries = data.data;
        }, function (error) { return console.log(error); });
    };
    MasteryService.prototype.isEven = function (n) {
        return n % 2 === 0;
    };
    MasteryService.prototype.addPage = function (name) {
        if (name === void 0) { name = this.name + (this.page.length + 1); }
        if (this.page.length < 20) {
            this.page.push(new Page_1.Page(name));
            this.changePage(this.page.length - 1);
        }
    };
    MasteryService.prototype.removePage = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.page.length > 1) {
            this.page.splice(page, 1);
            this.changePage();
        }
    };
    MasteryService.prototype.changePage = function (page) {
        if (page === void 0) { page = 0; }
        if (this.isInRange(page)) {
            this.active = page;
        }
    };
    MasteryService.prototype.isInRange = function (page, max) {
        return page >= 0 && page < (max || this.page.length);
    };
    MasteryService.prototype.addMastery = function (id) {
        var category = parseInt(id.slice(1, 2), 10);
        var row = parseInt(id.slice(2, 3), 10);
        if (this.masteryCheck(id, category, row)) {
            this.page[this.active].addMastery(id, category, row);
        }
        else {
            console.log('sorry, you can not do that!');
        }
    };
    MasteryService.prototype.masteryCheck = function (id, category, row) {
        if (isNaN(category) || isNaN(row)) {
            var category = parseInt(id.slice(1, 2), 10);
            var row = parseInt(id.slice(2, 3), 10);
        }
        if (this.page[this.active].max > 0 && !this.isMaxed(row, category)) {
            if (row !== 1 && this.isMaxed(row - 1, category)) {
                return true;
            }
            else if (row === 1) {
                return true;
            }
        }
        return false;
    };
    MasteryService.prototype.isMaxed = function (row, category) {
        var even = this.isEven(row);
        var rowSum = this.rowSum(row, category);
        return even ? rowSum === 1 : rowSum === 5;
    };
    MasteryService.prototype.isMasteryMaxed = function (id) {
        var mastery = this.page[this.active].masteries.filter(function (mastery) { return mastery.id === id; })[0] || 0;
        var row = parseInt(id.slice(2, 3), 10);
        return this.masteries[id].ranks === mastery.rank;
    };
    MasteryService.prototype.isMasteryActive = function (id) {
        var mastery = this.page[this.active].masteries.filter(function (mastery) { return mastery.id === id; })[0] || 0;
        var row = parseInt(id.slice(2, 3), 10);
        return this.masteries[id].ranks > mastery.rank && mastery.rank > 0;
    };
    MasteryService.prototype.rowSum = function (row, category) {
        return this.page[this.active].masteries
            .filter(function (mastery) { return mastery.row === row && mastery.category === category; })
            .map(function (mastery) { return mastery.rank; })
            .reduce(function (a, b) { return a + b; }, 0);
    };
    MasteryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MasteryService);
    return MasteryService;
})();
exports.MasteryService = MasteryService;
