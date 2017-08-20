// let and const
console.log('LET AND CONST');
let variable = 'test';
console.log(variable);

const superVar = 'Christian';
console.log(superVar);
// superVar = 'what';

// block scope
function reset () {
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// arrow functions
console.log('ARROW FUNCTIONS');
const addNumbers = function (num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addNumbers(10, 15));

const multiplyNumbers = (num1: number, num2: number):number => num1 * num2;
console.log(multiplyNumbers(10,2));

const greet = () => console.log('Hello');
greet();

const greetFriend = friend => console.log(friend);
greetFriend('James');