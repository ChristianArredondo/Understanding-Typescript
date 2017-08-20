"use strict";
// // string
// let myName = 'Christian';
// // myName = 90;
// // number
// let myAge = 27;
// // myAge = 'lol';
// // boolean
// let hasHobbies = false;
// // hasHobbies = 1;
// // assign type
// // let myRealAge;
// // myRealAge = 27;
// // myRealAge = '27';
// // array
// let hobbies: any[] = ['Cooking', 'Sports'];
// hobbies = [100];
// console.log(typeof hobbies);
// // tuples
// let address: [string, number] = ['Street', 99]
// // enums
// enum Color {
//   Gray,
//   Green = 100,
//   Blue
// }
// let myColor: Color = Color.Blue;
// console.log('color');
// console.log(myColor);
// // functions
// function returnMyName(): string {
//   return myName;
// }
// console.log(returnMyName())
// // void
// function sayHello(): void {
//   console.log('Hello');
// }
// // argument types
// function multiply (value1: number, value2: number): number {
//   return value1 * value2
// }
// console.log(multiply(1,2));
// // function types
// let  myMultiply: (val1: number, val2: number) => number;
// // myMultiply = sayHello;
// // myMultiply();
// myMultiply = multiply;
// console.log(myMultiply(2, 3));
// // objects
// let userData: {name: string, age: number} = {
//   name: 'Christian',
//   age: 26
// };
// // complex object
// let complex: {data: number[], output: (all: boolean) => number[]} = {
//   data: [1, 2, 3],
//   output: function (all: boolean): number[] {
//     return this.data
//   }
// }
// // type alias
// type Complex = {data: number[], output: (all: boolean) => number[]};
// // complex = {}
// let complex2: Complex = {
//   data: [1, 2, 3],
//   output: function (all: boolean): number[] {
//     return this.data
//   }
// };
// // union types
// let myRealAge: number | string = 27;
// myRealAge = "27";
// // myRealAge = true;
// // check types
// let finalValue = 20;
// if (typeof finalValue == 'number') {
//   console.log('Final value is a number')
// }
// // never
// function neverReturns (): never {
//   throw new Error('An error!');
// }
// // Nullable types
// let canBeNull: number | null = 12;
// canBeNull = null;
// let canAlsoBeNull;
// canAlsoBeNull = null; 
