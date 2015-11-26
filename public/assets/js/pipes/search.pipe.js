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
var angular2_1 = require('angular2/angular2');
// TODO: async observable search
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, _a) {
        var fields = _a[0], query = _a[1];
        var rx = new RegExp(query, 'i');
        // RegExp.prototype.test converts everything to sting
        // including arrays. For example: ['asd', 1, 'foo'] -> 'asd,1,foo'.
        //
        // This is why array does not break this code. Need to refactor if comas
        // will be a problem.
        return value.filter(function (item) { return fields.some(function (field) { return rx.test(item[field]); }); });
    };
    SearchPipe = __decorate([
        angular2_1.Pipe({
            name: 'search',
            pure: true
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
})();
exports.SearchPipe = SearchPipe;
