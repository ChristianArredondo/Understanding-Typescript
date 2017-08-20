"use strict";
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 26;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Christian', 'christian');
console.log(person);
person.setType('myType');
person.printAge();
