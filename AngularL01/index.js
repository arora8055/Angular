"use strict";
var Bat = /** @class */ (function () {
    function Bat(name) {
        this.name = name;
    }
    Bat.prototype.whoAmI = function () {
        console.log('My name is ' + this.name);
    };
    Bat.prototype.brushHair = function () {
        console.log('I must brush my hair to look pretty');
    };
    Bat.prototype.fly = function () {
        console.log('Flying Jatt');
    };
    return Bat;
}());
var bat = new Bat('Aman');
bat.whoAmI();
bat.brushHair();
bat.fly();
