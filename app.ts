// interfaces and properties
interface NamedHuman {
  firstName: string;
  age?: number;
  [propName: string]: any;
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
  hobbies: ['Cooking', 'Sports', 'Swangin']
}

console.log(human);
greeter(human);
changeName(human);
greeter(human);

