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
var rune_service_1 = require('./rune.service');
var RuneNameComponent = (function () {
    function RuneNameComponent(runeService) {
        this.runeService = runeService;
        this.showInput = false;
    }
    RuneNameComponent.prototype.toggleInput = function () {
        this.showInput = !this.showInput;
    };
    RuneNameComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-name-component',
            template: "\n    <div class=\"row\">\n      <div class=\"col-xs-8\">\n        <h1 *ng-if=\"!showInput\">{{ runeService.getName() }}</h1>\n        <input type=\"text\" placeholder=\"new rune page name\" *ng-if=\"showInput\">\n      </div>\n      <div class=\"col-xs-4\">\n        <button class=\"btn btn-block btn-primary\"\n          (click)=\"toggleInput()\"\n          *ng-if=\"!showInput\">Change name</button>\n        <button class=\"btn btn-block btn-primary\"\n          (click)=\"toggleInput()\"\n          *ng-if=\"showInput\">Save</button>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneNameComponent);
    return RuneNameComponent;
})();
exports.RuneNameComponent = RuneNameComponent;
