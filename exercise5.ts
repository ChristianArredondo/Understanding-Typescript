// // Exercise 1
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

class CarTS {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk () {
    console.log('HONK!!!')
  }

  accelerate (speed: number) {
    this.acceleration += speed;
  }
}
const carTS = new CarTS('Tesla');
carTS.honk();
console.log(carTS.acceleration);
carTS.accelerate(10)
console.log(carTS.acceleration);

// // Exercise 2
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());

class Shape {
  width: number = 0;
  length: number = 0;

  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }
}

class Rectangle extends Shape {
  calcSize () {
    return this.width * this.length;
  }
}
const rectangleTS = new Rectangle(5, 10);
console.log(rectangleTS);
console.log(rectangleTS.calcSize());

// // // Exercise 3
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class PersonTS {
  private _firstName: string = 'Default Name';

  get firstName () {
    return this._firstName;
  }

  set firstName (name: string) {
    if (name.length > 3) {
      this._firstName = name;
    } else {
      this._firstName = 'Default Name';
    }
  }
}
let personTS = new PersonTS();
console.log(personTS.firstName);
personTS.firstName = 'Jimmy';
console.log(personTS.firstName);
personTS.firstName = 'John';
console.log(personTS.firstName);