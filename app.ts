// interfaces and classes
interface NamedHuman {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet (lastName: string): void;
}

function greeter (person: NamedHuman) {
  console.log('Hello ' + person.firstName);
} 

function changeName (person: NamedHuman) {
  person.firstName = 'Someone Else';
}

const human: NamedHuman = {
  firstName: 'Christian',
  age: 27,
  hobbies: ['Cooking', 'Sports', 'Swangin'],
  greet (lastName: string) {
    console.log('My last name is', lastName)
  }
}

console.log(human);
greeter(human);
changeName(human);
greeter(human);
human.greet('What');

class Humanoid implements NamedHuman {
  firstName: string;
  greet (lastName: string) {
    console.log(lastName);
  }
}

const myPerson = new Humanoid();
myPerson.firstName = 'Christian Ivan';
greeter(myPerson);
myPerson.greet('Anything');

// Function Types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(v1: number, v2: number) {
  return (v1 + v2) * 2;
}
console.log(myDoubleFunction(8,10));

// interface inheritance
interface AgedPerson extends NamedHuman {
  age: number;
}

const elderPerson : AgedPerson = {
  age: 27,
  firstName: 'Chris',
  greet(lastName: string) {
    console.log(this.firstName + ' ' + lastName);
  }
}
console.log(elderPerson);
elderPerson.greet('Last Name');
