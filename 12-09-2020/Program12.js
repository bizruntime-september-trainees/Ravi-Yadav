"use strict";
exports.__esModule = true;
var Officer = /** @class */ (function () {
    function Officer(Fname, Lname, age, mob) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
        this.Mob = mob;
    }
    Officer.prototype.GetAge = function () {
        return this.age;
    };
    Officer.prototype.FullName = function () {
        return this.Fname + " " + this.Lname;
    };
    return Officer;
}());
var o1 = new Officer("Raju", "Sikka", 25, 123456);
console.log(o1);
console.log(o1.FullName());
console.log(o1.GetAge());
