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
