"use strict";
// simple generic
function echo(data) {
    return data;
}
console.log(echo('Christian').length);
console.log(echo(26));
console.log(echo({ name: 'Christian', age: 26 }));
// better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Christian'));
console.log(betterEcho(26));
console.log(betterEcho({ name: 'Christian', age: 26 }));
// built-in generics
var testArray = [1.01, 4.93];
testArray.push(-84);
console.log(testArray);
// arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['apples, kiwis, lemons']);
// generic types
var echo2 = betterEcho;
console.log(echo2('Something'));
// generic class
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseVal * +this.multiplyVal;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseVal = '5';
simpleMath.multiplyVal = 7;
console.log(simpleMath.calculate());
