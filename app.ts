// string
let myName = 'Christian';
// myName = 90;

// number
let myAge = 27;
// myAge = 'lol';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign type
let myRealAge;
myRealAge = 27;
myRealAge = '27';

// array
let hobbies: any[] = ['Cooking', 'Sports'];
hobbies = [100];
console.log(typeof hobbies);

// tuples
let address: [string, number] = ['Street', 99]

// enums
enum Color {
  Gray,
  Green = 100,
  Blue
}

let myColor: Color = Color.Blue;
console.log('color');
console.log(myColor);


// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName())

// void
function sayHello(): void {
  console.log('Hello');
}

// argument types
function multiply (value1: number, value2: number): number {
  return value1 * value2
}
console.log(multiply(1,2));

// function types
let  myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 3));

// objects
let userData: {name: string, age: number} = {
  name: 'Christian',
  age: 26
};

// userData = {
//   a: 'hello',
//   b: 22
// };