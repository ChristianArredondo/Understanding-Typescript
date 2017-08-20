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

const greetFriend = (friend: string) => console.log(friend);
greetFriend('James');

// default parameters
console.log('DEFAULT PARAMETERS');
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start --;
  }
  console.log('Countdown finished!!!');
}
countdown(20);

// rest & spread
console.log('REST & SPREAD');
const numbers = [1, 10, 50, -10];
console.log(Math.max(...numbers));

function makeArray (name: string, ...args: number[]) {
  return args;
}

console.log(makeArray('Christian', 1, 2, 3));