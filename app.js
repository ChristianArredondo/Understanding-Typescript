"use strict";
function greeter(person) {
    console.log('Hello ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Someone Else';
}
var human = {
    firstName: 'Christian',
    age: 27,
    hobbies: ['Cooking', 'Sports', 'Swangin'],
    greet: function (lastName) {
        console.log('My last name is', lastName);
    }
};
console.log(human);
greeter(human);
changeName(human);
greeter(human);
human.greet('What');
var Humanoid = (function () {
    function Humanoid() {
    }
    Humanoid.prototype.greet = function (lastName) {
        console.log(lastName);
    };
    return Humanoid;
}());
var myPerson = new Humanoid();
myPerson.firstName = 'Christian Ivan';
greeter(myPerson);
myPerson.greet('Anything');
var myDoubleFunction;
myDoubleFunction = function (v1, v2) {
    return (v1 + v2) * 2;
};
console.log(myDoubleFunction(8, 10));
var elderPerson = {
    age: 27,
    firstName: 'Chris',
    greet: function (lastName) {
        console.log(this.firstName + ' ' + lastName);
    }
};
console.log(elderPerson);
elderPerson.greet('Last Name');
