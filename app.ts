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

const human = {
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
