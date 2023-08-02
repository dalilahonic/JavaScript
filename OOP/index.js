const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // don't create methods inside consturctor functions
  //   this.calcAge = function () {
  //     return 2023 - this.birthYear;
  //   };
};
// arrow functions do not work beacuse they don't have this keyword.

const dalila = new Person('Dalila', 2005);
console.log(dalila); //Person { firstName: 'Dalila', birthYear: 2005 }

const matilda = new Person('Matilda', 1990);
console.log(matilda); //Person { firstName: 'Matilda', birthYear: 1990 }

console.log(dalila instanceof Person); // true

// Prototypes
Person.prototype.calcAge = function () {
  return 2023 - this.birthYear;
};
console.log(Person.prototype);

console.log(dalila.calcAge()); // 18
console.log(dalila); // Person { firstName: 'Dalila', birthYear: 2005 }

console.log(dalila.__proto__);
console.log(dalila.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(dalila)); // true

Person.prototype.species = 'Homo Sapiens';

console.log(dalila);
console.log(dalila.species); // Homo Sapiens

console.log(dalila.hasOwnProperty('firstName')); // true
console.log(dalila.hasOwnProperty('species')); // false

console.log(dalila.__proto__);
console.log(dalila.__proto__.__proto__);
console.log(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 4, 5, 1, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique()); // [ 1, 2, 3, 4, 5 ]

// any array inherits all the methods from its prototype.
// we can add any new method to this prototype and all the arrays will then inherit it
// this keyword is going to be the array on which the method is called

// extending the prototype of a build in object is generally not a good idea

//.......................................................

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelarate = function () {
  return parseFloat(this.speed) + 10 + 'km/h';
};

Car.prototype.break = function () {
  return parseFloat(this.speed) - 5 + 'km/h';
};

const Mercedes = new Car('Mercedes', '120km/h');
const bmw = new Car('bmw', '90km/h');

console.log(Mercedes.accelarate());
console.log(Mercedes.break());

//.........................................................

// class expression
// const Person = class {}

// classes are just a sepcial type of functions

// class declaration

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2023 - this.birthYear;
  }
  // all the methods that we write inside of this class will be on the prototype of the objects

  get age() {
    return 2023 - this.birthYear;
  }
}

const dalila2 = new PersonClass('dalila', 2005);
console.log(dalila2); // PersonClass { firstName: 'dalila', birthYear: 2005 }
console.log(dalila2.calcAge()); // 18

console.log(dalila2.__proto__ === PersonClass.prototype); // true

// PersonClass.prototype.greet = function() {
//   console.log('hey');
// }

// dalila2.greet()

// classes are not hoisted

console.log(dalila2.age); // 18

const account = {
  owner: 'Dalila',
  movements: [1, 2, 3, 4, 5],

  get latest() {
    return this.movements.pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 5
// we write latest as it is just a property. we don't call the method

account.latest = 50;
// we set just like we set any other property
console.log(account.movements); //[ 1, 2, 3, 4, 50 ]

//....................

class FullNameClass {
  constructor(FullName, birthYear) {
    this.FullName = FullName;
    this.birthYear = birthYear;
  }

  // setting a property that already exists
  set FullName(name) {
    if (name.includes(' ')) this._FullName = name;
    else console.log('not a full name');
  }

  get FullName() {
    return this._FullName;
  }

  static hey2() {
    console.log('hey');
  }
}

const jonas = new FullNameClass('Jonas', 2000);
console.log(jonas);
// not a full name
// FullNameClass { birthYear: 2000 }

const james = new FullNameClass('james j', 2003);
console.log(james); // FullNameClass { _FullName: 'james j', birthYear: 2003 }

FullNameClass.hey = function () {
  console.log('hey');
};

FullNameClass.hey(); // hey
// jonas.hey(); tjis does not work
// it is not in the prototype of the jonas object

FullNameClass.hey2(); // hey
// jonas.hey2(); // not a function

//..........................

const PersonProto = {
  calcAge() {
    return 2023 - this.birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'steven';
steven.birthYear = 2003;
console.log(steven.calcAge()); // 20

//..............................................

/* 
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

*/

class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return parseFloat(this.speed) / 1.6 + 'mi/h';
  }

  // always one argument
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new CarClass('Ford', '112km/h');
console.log(car1);
console.log(car1.speedUS); // 70mi/h

//.......................................

const NewPersonClass = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

NewPersonClass.prototype.calcAge = function () {
  return 2023 - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  NewPersonClass.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(NewPersonClass.prototype);

Student.prototype.introduce = function () {
  return `My name is ${this.firstName} and I study ${this.course}`;
};

const mike = new Student('Mike', 2003, 'cs');
console.log(mike);
console.log(mike.introduce()); // My name is Mike and I study cs
console.log(mike.calcAge()); // 20

console.log(mike instanceof Student); // true
console.log(mike instanceof NewPersonClass); // true

//.............................................
