"use strict";
// let and const
console.log('LET AND CONST');
var variable = 'test';
console.log(variable);
var superVar = 'Christian';
console.log(superVar);
// superVar = 'what';
// block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// arrow functions
console.log('ARROW FUNCTIONS');
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 15));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
console.log(multiplyNumbers(10, 2));
var greet = function () { return console.log('Hello'); };
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('James');
// default parameters
console.log('DEFAULT PARAMETERS');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('Countdown finished!!!');
};
countdown(20);
// rest & spread
console.log('REST & SPREAD');
var numbers = [1, 10, 50, -10];
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray('Christian', 1, 2, 3));
