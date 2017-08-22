// simple generic
function echo (data: any) {
  return data;
}
console.log(echo('Christian').length);
console.log(echo(26));
console.log(echo({name: 'Christian', age: 26}));

// better generic
function betterEcho <T>(data: T) {
  return data;
}
console.log(betterEcho('Christian'));
console.log(betterEcho(26));
console.log(betterEcho({name: 'Christian', age: 26}));

// built-in generics
const testArray: Array<number> = [1.01, 4.93];
testArray.push(-84);
console.log(testArray);

// arrays
function printAll<T> (args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<string>(['apples, kiwis, lemons']);

// generic types
const echo2: <T> (data: T) => T = betterEcho;
console.log(echo2<string>('Something'));

// generic class
class SimpleMath<T extends number | string>{
  baseVal: T;
  multiplyVal: T;
  calculate (): number {
    return +this.baseVal * +this.multiplyVal;
  }
}

const simpleMath = new SimpleMath();
simpleMath.baseVal = '5';
simpleMath.multiplyVal = 7;
console.log(simpleMath.calculate());