"use strict";
// // Exercise 1
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };
//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
var CarTS = (function () {
    function CarTS(name) {
        this.acceleration = 0;
        this.name = name;
    }
    CarTS.prototype.honk = function () {
        console.log('HONK!!!');
    };
    CarTS.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return CarTS;
}());
var carTS = new CarTS('Tesla');
carTS.honk();
console.log(carTS.acceleration);
carTS.accelerate(10);
console.log(carTS.acceleration);
// // Exercise 2
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());
var Shape = (function () {
    function Shape(width, length) {
        this.width = 0;
        this.length = 0;
        this.width = width;
        this.length = length;
    }
    return Shape;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Shape));
var rectangleTS = new Rectangle(5, 10);
console.log(rectangleTS);
console.log(rectangleTS.calcSize());
// // // Exercise 3
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
var PersonTS = (function () {
    function PersonTS() {
        this._firstName = 'Default Name';
    }
    Object.defineProperty(PersonTS.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = 'Default Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonTS;
}());
var personTS = new PersonTS();
console.log(personTS.firstName);
personTS.firstName = 'Jimmy';
console.log(personTS.firstName);
personTS.firstName = 'John';
console.log(personTS.firstName);
