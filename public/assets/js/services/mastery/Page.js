var Mastery_1 = require('./Mastery');
var Page = (function () {
    function Page(name) {
        this.name = name;
        this.sums = [0, 0, 0];
        this.max = 30;
        this.masteries = [];
        this.rank = {};
    }
    Page.prototype.addMastery = function (id, category, row) {
        var mastery = this.masteries.filter(function (mastery) { return mastery.id === id; })[0];
        if (typeof mastery === 'undefined') {
            this.masteries.push(new Mastery_1.Mastery(id, 1, category, row));
            this.rank[id] = 1;
        }
        else {
            mastery.rank += 1;
            this.rank[id] += 1;
        }
        this.sums[category - 1] += 1;
        this.max -= 1;
        console.log(this.masteries);
    };
    Page.prototype.removeMastery = function (id) {
        var mastery = this.masteries.filter(function (mastery) { return mastery.id === id; })[0];
        var index = this.masteries.indexOf(mastery);
        var category = parseInt(id.slice(1, 2), 10);
        if (mastery.rank > 1) {
            mastery.rank -= 1;
            this.rank[id] -= 1;
        }
        else {
            this.masteries.splice(index, 1);
            delete this.rank[id];
        }
        this.sums[category - 1] -= 1;
        this.max += 1;
        console.log(this.masteries);
    };
    return Page;
})();
exports.Page = Page;
