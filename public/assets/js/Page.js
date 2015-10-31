var Page = (function () {
    function Page(name) {
        this.name = name;
        this.runes = [];
        this.sums = [];
        this.counter = [9, 9, 9, 3];
    }
    Page.prototype.addRune = function (rune) {
        this.runes.push(rune);
    };
    return Page;
})();
exports.Page = Page;
