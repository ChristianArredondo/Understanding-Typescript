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
// assign typew
var myRealAge;
myRealAge = 27;
myRealAge = '27';
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
