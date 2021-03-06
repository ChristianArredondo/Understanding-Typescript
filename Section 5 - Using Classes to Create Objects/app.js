"use strict";
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
// classes
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 26;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Cool guy');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Christian', 'christian');
console.log(person);
person.printAge();
// inheritance
var Christian = (function (_super) {
    __extends(Christian, _super);
    // name = 'Christian'; // overrides constructor
    function Christian(username) {
        var _this = _super.call(this, 'Christian', username) || this;
        _this.age = 99;
        return _this;
    }
    return Christian;
}(Person));
var christian = new Christian('christian91');
console.log(christian);
// getters and setters
var Plant = (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
console.log(plant.species = 'Flowers');
plant.species = 'lo';
console.log(plant.species);
// static properties and methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (d) {
        return d * this.PI;
    };
    Helpers.PI = 3.14159265358979;
    return Helpers;
}());
console.log(2 * Helpers.PI);
// abstract classes
var Project = (function () {
    function Project() {
        this.projectName = 'Default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
// private constructors
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var privC = OnlyOne.getInstance();
console.log(privC.name);
privC.name = 'Some new name';
