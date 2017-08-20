"use strict";
function greeter(person) {
    console.log('Hello ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Someone Else';
}
var human = {
    firstName: 'Christian',
    age: 27,
    hobbies: ['Cooking', 'Sports', 'Swangin']
};
console.log(human);
greeter(human);
changeName(human);
greeter(human);
