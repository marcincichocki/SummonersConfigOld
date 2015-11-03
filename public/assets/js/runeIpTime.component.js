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
var RuneIpTimeComponent = (function () {
    function RuneIpTimeComponent(runeService) {
        this.runeService = runeService;
        // seconds
        this.gameTime = 2084;
        this.ipPerWin = 97.7;
        this.ipPerLose = 65.1;
        this.winRatio = 50;
        this.loseRatio = 100 - this.winRatio;
        this.ip = 0;
    }
    RuneIpTimeComponent.prototype.format = function (n) {
        return n > 9 ? n.toString() : "0" + n;
    };
    RuneIpTimeComponent.prototype.countTime = function () {
        this.ip = this.runeService.getIp();
        var ipPerGame = parseFloat((((this.ipPerWin * this.winRatio) + (this.ipPerLose * this.loseRatio)) / 100).toFixed(2));
        var gamesQuantity = this.ip / ipPerGame;
        var time = Math.floor(this.gameTime * gamesQuantity);
        var days = Math.floor(time / 3600 / 24);
        var hours = this.format(Math.floor((time / 3600) % 24));
        var minutes = this.format(Math.floor((time / 60) % 60));
        var seconds = this.format(Math.floor(time % 60));
        return days + " day(s) and " + hours + ":" + minutes + ":" + seconds;
    };
    RuneIpTimeComponent = __decorate([
        angular2_1.Component({
            selector: 'rune-ip-time-component',
            template: "\n    <div class=\"row\" *ng-if=\"!runeService.isEmpty()\">\n      <div class=\"col-xs-6\">\n        <h3>Average time</h3>\n        <p>{{ countTime() }}</p>\n      </div>\n      <div class=\"col-xs-6\">\n        <h3>Overall ip</h3>\n        <p>{{ ip }}</p>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [rune_service_1.RuneService])
    ], RuneIpTimeComponent);
    return RuneIpTimeComponent;
})();
exports.RuneIpTimeComponent = RuneIpTimeComponent;
