"use strict";
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var obj = new A();
console.log("Result: " + obj.foo(101));
console.log("Length of String: " + obj.foo("HelloWorld"));
