var Rune_1 = require('./Rune');
var Sum_1 = require('./Sum');
var Page = (function () {
    function Page(name) {
        this.name = name;
        this.ip = 0;
        this.runes = [];
        this.sums = [];
        this.counter = [9, 9, 9, 3];
        this.slotStart = [1, 10, 19, 28];
    }
    Page.prototype.getSlot = function (typeId) {
        var from = this.slotStart[typeId];
        var to = from + 9 < 30 ? from + 9 : 30;
        var runes = this.runes.map(function (obj) { return obj.position; });
        for (var i = from; i <= to; i += 1) {
            if (runes.indexOf(i) === -1)
                return i;
        }
    };
    Page.prototype.addRune = function (rune, typeId) {
        this.counter[typeId] -= 1;
        rune.position = this.getSlot(typeId);
        // We don't like references here.
        this.runes.push(JSON.parse(JSON.stringify(rune)));
    };
    Page.prototype.removeRune = function (rune, typeId) {
        var index = this.runes.indexOf(rune);
        this.counter[typeId] += 1;
        this.runes.splice(index, 1);
    };
    Page.prototype.count = function () {
        var _this = this;
        var runes = [];
        this.runes.forEach(function (rune) {
            Object.keys(rune.stats).forEach(function (stat) {
                runes.push(new Rune_1.Rune(rune.ip, stat, rune.stats[stat], rune.type, rune.id));
            });
        });
        this.ip = runes.map(function (obj) { return obj.ip; }).reduce(function (a, b) { return a + b; }, 0);
        this.sums = [];
        var units = runes.map(function (obj) { return obj.unitId; }).filter(function (unit, index, self) { return self.indexOf(unit) === index; });
        units.forEach(function (unit) {
            var sameUnit = runes.filter(function (obj) { return obj.unitId === unit; });
            _this.sums.push(new Sum_1.Sum(unit, parseFloat(sameUnit.map(function (obj) { return obj.value; }).reduce(function (a, b) { return a + b; }, 0).toFixed(2))));
        });
    };
    return Page;
})();
exports.Page = Page;
