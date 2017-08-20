// Exercise 1
var double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2
var greet2 = (name: string = 'Max') => console.log("Hello, " + name);
greet2();
greet2("Anna");

// Exercise 3
var numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));

// Exercise 4
var newArray = [55, 20];
newArray.push(...numbers2);
console.log(newArray);

// Exercise 5
var testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6
var scientist = {firstName: "Will", experience: 12};
var {firstName, experience} = scientist;
console.log(firstName, experience);