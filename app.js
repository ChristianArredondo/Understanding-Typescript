"use strict";
// string
var myName = 'Christian';
// myName = 90;
// number
var myAge = 27;
// myAge = 'lol';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign type
// let myRealAge;
// myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
console.log(typeof hobbies);
// tuples
var address = ['Street', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log('color');
console.log(myColor);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(1, 2));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 3));
// objects
var userData = {
    name: 'Christian',
    age: 26
};
// complex object
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// complex = {}
var complex2 = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealAge = 27;
myRealAge = "27";
// myRealAge = true;
// check types
var finalValue = 20;
if (typeof finalValue == 'number') {
    console.log('Final value is a number');
}
// never
function neverReturns() {
    throw new Error('An error!');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canBeAny = null;
