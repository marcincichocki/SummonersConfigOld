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
var rune_service_1 = require('../../services/rune/rune.service');
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
            templateUrl: './app/components/runeName/runeName.component.html',
            directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneNameComponent);
    return RuneNameComponent;
})();
exports.RuneNameComponent = RuneNameComponent;