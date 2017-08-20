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

