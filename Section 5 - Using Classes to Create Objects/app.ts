// classes
class Person {
  name: string;
  private type: string;
  protected age: number = 26;
  
  constructor (name: string, public username: string) {
    this.name = name;
  }

  printAge () {
    console.log(this.age);
    this.setType('Cool guy');
  }

  private setType (type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Christian', 'christian');
console.log(person);
person.printAge();

// inheritance
class Christian extends Person{
  // name = 'Christian'; // overrides constructor

  constructor (username: string) {
    super('Christian', username);
    this.age = 99;
  }
}
const christian = new Christian('christian91');
console.log(christian);

// getters and setters
class Plant {
  private _species: string = 'Default';

  get species () {
    return this._species;
  }
  
  set species (value: string) {
    if (value.length > 3) {
      this._species = value
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
console.log(plant.species = 'Flowers');
plant.species = 'lo';
console.log(plant.species);

// static properties and methods
class Helpers {
  static PI: number = 3.14159265358979;
  static calcCircumference (d: number) {
    return d * this.PI;
  }
}
console.log(2 * Helpers.PI);

// abstract classes
abstract class Project {
  projectName: string = 'Default';
  budget: number;

  abstract changeName (name: string): void;

  calcBudget () {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName (name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;

  private constructor (public name: string) {}

  static getInstance () {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

let privC = OnlyOne.getInstance();
console.log(privC.name);
privC.name = 'Some new name';
