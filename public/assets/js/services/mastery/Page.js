var Mastery_1 = require('./Mastery');
var Page = (function () {
    function Page(name) {
        this.name = name;
        this.counter = [0, 0, 0];
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
        this.max -= 1;
        console.log(this.masteries);
    };
    return Page;
})();
exports.Page = Page;
