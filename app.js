"use strict";
// simple generic
function echo(data) {
    return data;
}
console.log(echo('Christian').length);
console.log(echo(26));
console.log(echo({ name: 'Christian', age: 26 }));
// better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Christian').length);
console.log(betterEcho(26));
console.log(betterEcho({ name: 'Christian', age: 26 }));
