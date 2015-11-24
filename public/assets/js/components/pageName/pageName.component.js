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
var select_directive_1 = require('../../directives/select.directive');
var PageNameComponent = (function () {
    function PageNameComponent() {
        this.showInput = false;
        this.model = new Name();
    }
    PageNameComponent.prototype.toggleInput = function () {
        this.showInput = !this.showInput;
    };
    PageNameComponent.prototype.onSubmit = function () {
        this.service.setName(this.model.name);
        this.model.reset();
        this.toggleInput();
    };
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], PageNameComponent.prototype, "service");
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', String)
    ], PageNameComponent.prototype, "placeholder");
    PageNameComponent = __decorate([
        angular2_1.Component({
            selector: 'page-name-component',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES, select_directive_1.SelectDirective],
            styles: ["\n    .ng-valid[required] {\n      border-left: 5px solid #42A948;\n    }\n    .ng-invalid {\n      border-left: 5px solid #a94442 !important;\n    }\n  "],
            template: "\n    <div class=\"row\" *ng-if=\"!showInput\">\n      <div class=\"col-8 center-y\">\n        <h2 class=\"page-name\">{{ service.getName() }}</h2>\n      </div>\n      <div class=\"col-4\">\n        <button class=\"btn btn-block btn-primary\"\n          (click)=\"toggleInput()\">Change</button>\n      </div>\n    </div>\n    <div *ng-if=\"showInput\">\n      <form class=\"row\" (ng-submit)=\"onSubmit()\" #nf=\"form\">\n        <div class=\"col-8 form-group\">\n          <input class=\"form-control\"\n            type=\"text\"\n            [placeholder]=\"placeholder\"\n            [(ng-model)]=\"model.name\"\n            select\n            ng-control=\"name\"\n            #name=\"form\"\n            required>\n        </div>\n        <div class=\"col-4 form-group\">\n          <input class=\"btn btn-block btn-primary\" type=\"submit\" value=\"Save\"\n            [disabled]=\"!nf.form.valid\">\n        </div>\n      </form>\n      <div class=\"row\">\n        <div class=\"col-offset-8 col-4\">\n          <button class=\"btn btn-block\"\n            (click)=\"toggleInput()\">Close\n          </button>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PageNameComponent);
    return PageNameComponent;
})();
exports.PageNameComponent = PageNameComponent;
var Name = (function () {
    function Name(name) {
        if (name === void 0) { name = ''; }
        this.name = name;
    }
    Name.prototype.reset = function () {
        this.name = '';
    };
    return Name;
})();
