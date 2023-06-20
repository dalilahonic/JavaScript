'use strict';

//function declaration

function calcAge1(year) {
  return 2023 - year;
}

console.log(calcAge1(2005));

function calcAge(year) {
  console.log(2023 - year);
}

calcAge(2005);

//....

//function expression

const funkcija = function (year) {
  console.log(`trenutno je ${year} godina`);
};

funkcija(2023);

// we can invoke (call) function declaration before defining a function, whereas function expression, we cannot.

//arrow function..................

const calcAge4 = (year) => 2023 - year; // This is the same as the function above. 'year' is the argument, and after the arrow is the code that needs to be executed.
// We don't use 'return' in arrow functions if it is onlu one line of code

console.log(calcAge4(1934));

const yearsUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `You have ${retirement} years left unitl retirement`;
  // When we have more than one line of code, then we need to use 'return'.
};

const ageX = yearsUntilRetirement(1998);
console.log(ageX);

//.....

const similarFunction = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  return `${firstName} is ${age} years old`;
};

// parentheses are needed only when we have multiple arguments.

const me = similarFunction(2005, 'Dalila');
console.log(me);

// Arrow functions cannot receive the "this" keyword.

//.................FUNCTION CALLING FUNCTIONS.....................

console.log('.........funnctions calling functions...........');

function cutPieces(fruit) {
  return fruit * 4;
}

console.log(cutPieces(4));

function fruitProcessor(apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pices of apples and ${orangePieces} pices of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Why do we use two functions? If we later need to divide the fruit into 3 parts instead of 4, we would have to change the code in multiple places. This would be problematic if we had lengthy code and couldn't modify it in numerous locations. Thus, we strive to minimize repetitions and make it easier to change something in the future at only one place.

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

//"birthYear" and "birthYearX" represent the same thing. We can even name them the same because these arguments don't have any relevance outside of that function.

const yearsUntilRetirement2 = function (birthYearX, firstName) {
  const age = calcAge2(birthYearX);
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has alreadyy retired`;
  }
};

console.log(yearsUntilRetirement2(2005, 'Dalila'));
console.log(yearsUntilRetirement2(1922, 'Mitar'));

//..........................

const calcAvrage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

const checkWinner = function (scoreDolphines, scoreKoalas) {
  scoreDolphines = calcAvrage(90, 23, 71);
  scoreKoalas = calcAvrage(23, 34, 27);

  scoreDolphines % 1 !== 0
    ? (scoreDolphines = scoreDolphines.toFixed(0))
    : scoreDolphines;
  scoreKoalas % 1 !== 0 ? (scoreKoalas = scoreKoalas.toFixed(0)) : scoreKoalas;
  //These conditions are unnecessary.

  // if(scoreDolphines % 1 !== 0) {

  //     scoreDolphines = scoreDolphines.toFixed(2);
  // }

  // if(scoreKoalas % 1 !==0) {

  //     scoreKoalas = scoreKoalas.toFixed(2);
  // }

  // console.log(scoreDolphines, scoreKoalas);

  if (scoreDolphines >= scoreKoalas * 2) {
    console.log(
      `The Dolphins won with ${scoreDolphines} points (${scoreDolphines} vs ${scoreKoalas})`
    );
  } else if (scoreKoalas >= scoreDolphines * 2) {
    console.log(
      `The Koalas won with ${scoreKoalas} points (${scoreKoalas} vs ${scoreDolphines})`
    );
  } else {
    console.log('No one has won');
  }
};

checkWinner();

//.......................................arrays

const people = ['John', 'Emma', 'Michael', 'Sophia', 'William'];
const years = new Array(1324, 2343, 2133, 1532, 1543);

console.log(people[people.length - 1]);

people[0] = 'Olivia';
console.log(people);

const mojeIme = 'Dalila';

const niz = [mojeIme, 'something else', 27 - 20, years];
console.log(niz);

//..........

const birthYearArray = [2005, 2003, 1984, 2001, 1999, 1998, 2010];

const calcAgeX = function (birthYear) {
  console.log(2023 - birthYear);
};

for (let i = 0; i < birthYearArray.length; i++) {
  calcAgeX(birthYearArray[i]);
}

people.push('Inas');
console.log(people);

const newLength = people.push('Stefan');
console.log(newLength);
//adding elements to the end of the array

people.unshift('Bisera');
console.log(people);
//adding elements to the beggining of an array

people.pop();
console.log(people);
//pop deletes the last element from an array

people.shift();
console.log(people);
//deletes the first element from an array

console.log(people.indexOf('Emma'));
// We can get the position of that element in the array.

console.log(people.includes('Emma'));
console.log(people.includes('Hamed'));
//checking if that name is in 'people' array

if (people.includes('Michael')) {
  console.log('The element "Michael" is present in the "people" array.');
}

///.............

let vrednost = 100;

// function calcTip(racun) {
//     if(racun >= 50 && racun <=300) {
//         return (15 / 100) * racun;
//     } else {
//         return (20 /100) * racun;
//     }
// }

const calcTip = function (racun) {
  return racun >= 50 && racun <= 300 ? (15 / 100) * racun : (20 / 100) * racun;
};

/*
const calcTip = racun => racun >= 50 && racun <= 300 ? (15 / 100) * racun : (20 / 100) * racun

*/

let bills = [125, 555, 44];
let tips = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  // tips.push(calcTip(bills[i]));
}

console.log(tips);

let total = [];

function calcTotal(value) {
  return calcTip(value) + value;
}

for (let i = 0; i < bills.length; i++) {
  total.push(calcTotal(bills[i]));
}

console.log(total);

function calcTotalAndTip(value) {
  console.log('bill + tips are ' + calcTotal(value));
  console.log('tips are ' + calcTip(value));
}

calcTotalAndTip(200);

//......................................................

// function declaration
function funkcija1(argument) {
  console.log(argument);
}

//function expression
const funkcija6 = function (argument) {
  console.log(argument);
};

// arrow function exoression
const funkcija2 = (argument) => {
  console.log(argument);
// We could have also written it on the same line if it's just a single line of code without curly braces.
  // The argument can be with or without parentheses, but when there are multiple arguments, parentheses are required.
};

const funkcija3 = (argument) => console.log(argument);

const funkcija4 = (argument1, argument2) => {
  console.log(argument1, argument2);
};

// Immediately Invoked Functions

(function () {
  console.log('This is a self-invoking function.');
})();

(function () {
  console.log('this is another self-invoking function.');
})();

(() => {
  console.log('self-invoking arrow function');
})();

//..........

const funkcijaT = () => {
  console.log('d');
};

funkcijaT();

console.log('dan');

//................... objects.......................
console.log('objects');

const myObject = {
  firstName: 'Dalila',
  lastName: 'Honic',
  age: 2023 - 2005,
  friends: ['Jonas', 'Steven', 'Taylor'],
};

console.log(myObject);
console.log(myObject.lastName);
console.log(myObject['firstName']);

const nameKey = 'Name';

console.log(myObject['first' + nameKey], myObject['last' + nameKey]);

// let interestedIn = prompt(
//   'what do you want to know about me? firstName, lastName, age, nesto'
// );

// console.log(myObject[interestedIn]);

// if (myObject[interestedIn]) {
//   console.log(myObject[interestedIn]);
// } else {
//   console.log('wrong request');
// }

myObject.location = 'Novi Pazar';
myObject['school'] = 'Gimnazija';

console.log(
  `${myObject.firstName} has ${myObject.friends.length} friends and my best friend is ${myObject.friends[0]}`
);

const anotherObject = {
  firstName: 'Dalila',
  lastName: 'Honic',
  birthYear: 2005,
  friends: ['Jonas', 'Steven', 'Taylor'],
  hasDriversLicence: true,
  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
  //here we can only use function expression, we cannot use function declaration

  calcAge2: function () {
    console.log(this);
    return 2023 - this.birthYear;
    // Of course, here we can also say anotherObject.birthYear, but we should avoid repetition. If we were to change the object, it would no longer work.
  },

  calcAge3: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

console.log(anotherObject.calcAge(2005));
console.log(anotherObject['calcAge'](2005));

console.log(anotherObject.calcAge2());

console.log('calc Age 3 funkcija....');
console.log(anotherObject.calcAge3());
console.log(anotherObject.age);

function informationAboutMe() {
  let varijabla;
  // if(anotherObject.hasDriversLicence) {
  //     varijabla = 'has a drivers licence'
  // } else {
  //     varijabla = `doesn't have a drivers licence`
  // }

  anotherObject.hasDriversLicence
    ? (varijabla = 'has a drivers licence')
    : (varijabla = `doesn't have a drivers licence`);

  return `${anotherObject.firstName} ${anotherObject.lastName} is born in ${
    anotherObject.birthYear
  } and she has ${anotherObject.friends.length} friends: ${
    anotherObject.friends[0]
  }... ${
    anotherObject.firstName
  } ${varijabla} and she is ${anotherObject.calcAge2()} years old `;
}

console.log(informationAboutMe());

///.........

const markMiller = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 169,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const johnSmith = {
  fullName: 'Mark Miller',
  mass: 92,
  height: 195,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(johnSmith.calcBMI(), johnSmith.bmi);
console.log(johnSmith);

markMiller.calcBMI();
console.log(markMiller.bmi);

// if(markMiller.bmi > johnSmith.bmi) {
//     console.log(`${markMiller.fullName} (${markMiller.calcBMI}) has a higher BMI than ${johnSmith.fullName} (${johnSmith.bmi}) `);
// } else if(johnSmith.bmi > markMiller.bmi) {
//     console.log(`${johnSmith.fullName} (${johnSmith.calcBMI}) has a higher BMI than ${markMiller.fullName} (${markMiller.calcBMI}) `);
// }

if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `${markMiller.fullName} (${markMiller.calcBMI()}) has a higher BMI than ${
      johnSmith.fullName
    } (${johnSmith.calcBMI()}) `
  );
} else if (johnSmith.calcBMI() > markMiller.calcBMI()) {
  console.log(
    `${johnSmith.fullName} (${johnSmith.calcBMI()}) has a higher BMI than ${
      markMiller.fullName
    } (${markMiller.calcBMI()}) `
  );
}

const someoneElse = {
  fullName: 'Mark Miller',
  mass: 92,
  height: 195,
  // calcBMI: function() {
  //     this.bmi = this.mass / (this.height * this.height);
  //     return this.bmi

  // }
};

console.log(someoneElse);

someoneElse.calcBMI = function () {
  this.bmi = this.mass / (this.height * this.height);
  return this.bmi;
};

console.log(someoneElse);
// We added the function to the object, but the BMI is still not within the object because the function is not called, meaning the code inside it is not executed.

someoneElse.calcBMI();

console.log(someoneElse);
// We called the function, so now the BMI is a property in the someoneElse object because we added it using that function.

//................................

const myArray = [
  true,
  'ime',
  342,
  'trud',
  'rad',
  324,
  false,
  true,
  {},
  'string',
  324,
];

//print only string from the array
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] !== 'string') continue;

  console.log(myArray[i]);
}

// When it finds the first occurrence of a number in the array, the loop stops.
for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === 'number') break;

  console.log(myArray[i]);
}

//...........

for (let excercise = 1; excercise <= 3; excercise++) {
  console.log(`starting excercise ${excercise}........................ 🏋️`);

  for (let i = 1; i <= 5; i++) {
    console.log(`excercise ${excercise}: starting repetion ${i} ⛹️‍♂️`);
  }
}

//...........

let i = 1;
while (i <= 10) {
  console.log(`broj ${i}`);
  i++;
}

//....

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('you got a 6, the loop is over');
}

//...........

console.log('.....................');

bills = [22, 295, 176, 440, 36, 105, 10, 1100, 86, 52];
tips = [];
total = [];

function calculateTip(bill) {
  return (20 / 100) * bills[bill];
}

for (let i = 0; i < bills.length; i++) {
  console.log(`the tip for ${bills[i]} is ${calculateTip(i)}`);
  tips.push(calculateTip(i));
  // console.log(tips[i]);

  // console.log('total amount is: ', tips[i] + bills[i]);
  total.push(tips[i] + bills[i]);
  console.log('total amount is: ', total[i]);
}

console.log(tips);
console.log(total);

//.........................

let tips2 = [];
let totals2 = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calculateTip(i);
  tips2.push(tip);
  totals2.push(tip + bills[i]);
}

console.log(bills, tips2, totals2);

//........................

function calculateAvrage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calculateAvrage([10, 34, 42])); 

//....................


let temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let highest = temperatures[0];
let lowest = temperatures[0];

for (let i = 0; i < temperatures.length; i++) {
    if(typeof temperatures[i] !== 'number') continue;

  if (temperatures[i] > highest) {
    highest = temperatures[i];
  }

  if (temperatures[i] < lowest) {
    lowest = temperatures[i];
  }
}

console.log('The highest temperature is ', highest);
console.log('the lowest temperature is ', lowest);
console.log('amplitude is ', highest - lowest);

//..........

const numbers = [5, 2, 9, 1, 7, 3];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

///Here, ...numbers spreads the array elements [5, 2, 9, 1, 7, 3] into separate arguments, as if you had written Math.max(5, 2, 9, 1, 7, 3) and Math.min(5, 2, 9, 1, 7, 3).
// the spread operator is used to expand an array into separate arguments

// let temperaturesAndNumbers = temperatures.concat(numbers);

// console.log(temperaturesAndNumbers);

let noviArray = [21, 432, 432, 32, 22, 1, 53]
temperatures = temperatures.concat(noviArray);
console.log(temperatures);


let reverseThisArray = [2, 8, 3, 5 , 4];
console.log(reverseThisArray);

let reverisedArray = [];

for(let i = reverseThisArray.length - 1; i >= 0 ; i--) {
    reverisedArray.push(reverseThisArray[i])
}

console.log(reverisedArray);

//.............

let arr = [17, 21, 23]

function printForecast(data) {
    let str = '';
    for(let i = 0, x = 1; i < data.length; i++, x++) {
        // console.log(`...  ${data[i]} C in ${x} days`);
        str = str + ` ${data[i]} C in ${x} days ... `;
    }
    console.log('...' + str);
}

printForecast(arr);