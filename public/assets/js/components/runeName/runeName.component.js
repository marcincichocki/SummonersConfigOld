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
var rune_service_1 = require('../../services/rune.service');
var RuneNameComponent = (function () {
    function RuneNameComponent(runeService) {
        this.runeService = runeService;
        this.showInput = false;
        this.model = {
            name: this.runeService.getName()
        };
    }
    RuneNameComponent.prototype.toggleInput = function () {
        this.showInput = !this.showInput;
    };
    RuneNameComponent.prototype.onSubmit = function () {
        this.runeService.setName(this.model.name);
        this.toggleInput();
    };
    RuneNameComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-name-component',
            template: "\n    <div class=\"row\" *ng-if=\"!showInput\">\n      <div class=\"col-xs-8\">\n        <h1>{{ runeService.getName() }}</h1>\n      </div>\n      <div class=\"col-xs-4\">\n        <button class=\"btn btn-block btn-primary\"\n          (click)=\"toggleInput()\">Change name</button>\n      </div>\n    </div>\n    <div class=\"row\" *ng-if=\"showInput\">\n      <form (ng-submit)=\"onSubmit()\" #nf=\"form\">\n        <div class=\"col-xs-8 form-group\">\n          <input class=\"form-control\" type=\"text\" placeholder=\"new rune page name\"\n          [(ng-model)]=\"model.name\"\n          ng-control=\"name\"\n          #name=\"form\"\n          required>\n\n          <div [hidden]=\"name.valid\" class=\"alert alert-danger\">\n            <span>Name is required</span>\n          </div>\n        </div>\n        <div class=\"col-xs-4 form-group\">\n          <input class=\"btn btn-block btn-primary\" type=\"submit\" value=\"Save\"\n          [disabled]=\"!nf.form.valid\">\n        </div>\n      </form>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneNameComponent);
    return RuneNameComponent;
})();
exports.RuneNameComponent = RuneNameComponent;
