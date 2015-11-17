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
var tooltip_service_1 = require('../tooltip/tooltip.service');
var MasteryService = (function () {
    function MasteryService(http, tooltipService) {
        this.http = http;
        this.tooltipService = tooltipService;
        this.name = 'Mastery Page #';
        this.page = [new Page_1.Page(this.name + "1")];
        this.active = 0;
        this.categories = [
            'Ferocity',
            'Cunning',
            'Resolve'
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
    MasteryService.prototype.isActive = function (page) {
        if (this.isInRange(page)) {
            return page === this.active;
        }
    };
    MasteryService.prototype.clearPage = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            this.page[page] = new Page_1.Page(this.getName());
        }
    };
    MasteryService.prototype.isEmpty = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            return !this.page[page].masteries.length;
        }
    };
    MasteryService.prototype.isInRange = function (page, max) {
        return page >= 0 && page < (max || this.page.length);
    };
    MasteryService.prototype.addMastery = function (id, event) {
        var category = parseInt(id.slice(1, 2), 10);
        var row = parseInt(id.slice(2, 3), 10);
        if (this.masteryCheckUp(id, category, row)) {
            this.page[this.active].addMastery(id, category, row);
            this.updateTooltip(id);
        }
        else {
            console.log('sorry, you can not do that!');
        }
    };
    MasteryService.prototype.removeMastery = function (id, event) {
        // prevent context menu from showing up
        event.preventDefault();
        var category = parseInt(id.slice(1, 2), 10);
        var row = parseInt(id.slice(2, 3), 10);
        if (this.masteryCheckDown(id, row, category)) {
            this.page[this.active].removeMastery(id);
            this.updateTooltip(id);
        }
        else {
            console.log('stop that!');
        }
    };
    MasteryService.prototype.masteryCheckUp = function (id, category, row) {
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
    MasteryService.prototype.onScroll = function (id, event) {
        event.preventDefault();
        if (event.deltaY > 0) {
            this.removeMastery(id, event);
        }
        else {
            this.addMastery(id, event);
        }
    };
    MasteryService.prototype.masteryCheckDown = function (id, row, category) {
        if (this.page[this.active].max < 30
            && this.getRank(id) > 0
            && this.rowSum(row + 1, category) === 0) {
            return true;
        }
        return false;
    };
    MasteryService.prototype.isMaxed = function (row, category) {
        var even = this.isEven(row);
        var rowSum = this.rowSum(row, category);
        return even ? rowSum === 1 : rowSum === 5;
    };
    MasteryService.prototype.isMasteryMaxed = function (id) {
        return (this.getRank(id) || 0) === this.masteries[id].ranks;
    };
    MasteryService.prototype.isMasteryActive = function (id) {
        return (this.getRank(id) || 0) > 0;
    };
    MasteryService.prototype.getRank = function (id) {
        return this.page[this.active].rank[id];
    };
    MasteryService.prototype.getCategory = function (id) {
        return parseInt(id.slice(1, 2), 10);
    };
    MasteryService.prototype.rowSum = function (row, category) {
        return this.page[this.active].masteries
            .filter(function (mastery) { return mastery.row === row && mastery.category === category; })
            .map(function (mastery) { return mastery.rank; })
            .reduce(function (a, b) { return a + b; }, 0);
    };
    MasteryService.prototype.updateTooltip = function (id) {
        this.tooltipService.show({
            type: 'mastery',
            data: {
                mastery: this.masteries[id],
                rank: this.getRank(id)
            }
        });
    };
    MasteryService.prototype.getName = function (page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            return this.page[page].name;
        }
    };
    MasteryService.prototype.setName = function (name, page) {
        if (page === void 0) { page = this.active; }
        if (this.isInRange(page)) {
            this.page[page].name = name;
        }
    };
    MasteryService.prototype.getPointsOfCategory = function (category) {
        return this.page[this.active].sums[category];
    };
    MasteryService.prototype.getPointsMax = function () {
        return this.page[this.active].max;
    };
    MasteryService.prototype.getSums = function (page) {
        if (page === void 0) { page = this.active; }
        return this.page[page].sums;
    };
    MasteryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, tooltip_service_1.TooltipService])
    ], MasteryService);
    return MasteryService;
})();
exports.MasteryService = MasteryService;
