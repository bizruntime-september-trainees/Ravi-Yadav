"use strict";
exports.__esModule = true;
var Studio = /** @class */ (function () {
    function Studio(name, code) {
        this.stdName = name;
        this.stdCode = code;
    }
    Studio.prototype.display = function () {
        return ("My Name: " + this.stdName + " My Unique No: " + this.stdCode);
    };
    return Studio;
}());
var s1 = new Studio("Raju", 100);
console.log(s1.display());
