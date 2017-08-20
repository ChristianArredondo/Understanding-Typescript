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
