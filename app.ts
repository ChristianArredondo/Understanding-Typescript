// string
let myName = 'Christian';
// myName = 90;

// number
let myAge = 27;
// myAge = 'lol';

// boolean
let hasHobbies = false;
// hasHobbies = 1;

// assign typew
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
