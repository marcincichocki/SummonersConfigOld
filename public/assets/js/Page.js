var Rune_1 = require('./Rune');
var Sums_1 = require('./Sums');
var Page = (function () {
    function Page(name) {
        this.name = name;
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
    Page.prototype.addRune = function (id, typeId, image) {
        this.counter[typeId] -= 1;
        this.runes.push({ id: id, typeId: typeId, image: image, position: this.getSlot(typeId) });
        console.log(this.runes);
    };
    Page.prototype.removeRune = function (id) {
        var index = this.runes.indexOf(id);
        this.counter[this.runes[index].typeId] += 1;
        this.runes.splice(index, 1);
        console.log(this.runes);
    };
    Page.prototype.count = function (data) {
        var _this = this;
        var runes = [];
        data.forEach(function (rune) {
            Object.keys(rune.stats).forEach(function (stat) {
                runes.push(new Rune_1.Rune(rune.ip, stat, rune.stats[stat], rune.type, rune.id));
            });
        });
        this.sums = [];
        var units = runes.map(function (obj) { return obj.unitId; }).filter(function (unit, index, self) { return self.indexOf(unit) === index; });
        units.forEach(function (unit) {
            var sameUnit = runes.filter(function (obj) { return obj.unitId === unit; });
            _this.sums.push(new Sums_1.Sums(unit, parseFloat(sameUnit.map(function (obj) { return obj.value; }).reduce(function (a, b) { return a + b; }, 0).toFixed(2))));
        });
        console.log(this.sums);
    };
    return Page;
})();
exports.Page = Page;
