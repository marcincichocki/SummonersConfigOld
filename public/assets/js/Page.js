var Rune_1 = require('./Rune');
var Page = (function () {
    function Page(name) {
        this.name = name;
        this.runes = [];
        this.sums = [];
        this.counter = [9, 9, 9, 3];
    }
    Page.prototype.addRune = function (rune, type) {
        this.counter[type] -= 1;
        this.runes.push(rune.id);
        console.log(this.runes);
    };
    Page.prototype.removeRune = function (rune, type) {
        var index = this.runes.indexOf(rune.id);
        this.counter[type] += 1;
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
        if (runes.length) {
            this.sums = [];
            var units = runes.map(function (obj) { return obj.unitId; }).filter(function (unit, index, self) { return self.indexOf(unit) === index; });
            units.forEach(function (unit) {
                var test = runes.filter(function (obj) { return obj.unitId === unit; });
                _this.sums.push({
                    unitId: unit,
                    value: parseFloat(test.map(function (obj) { return obj.value; }).reduce(function (a, b) { return a + b; }, 0).toFixed(2))
                });
            });
            console.log(this.sums);
        }
    };
    return Page;
})();
exports.Page = Page;
