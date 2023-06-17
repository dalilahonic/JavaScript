let variable = 'Dalila';

// if (variable === 'Dalila') alert('variable is "Dalila"');

let $boolean = true;
console.log(typeof $boolean);
console.log(typeof 'Dalila');

str = 'Honic';
console.log(str);

let ageDalila = 2023 - 2005;
let ageSomeoneElse = 2023 - 2000;
console.log(ageDalila, ageSomeoneElse);

// In order to avoid repeating the year '2023' and make the code more maintainable, we can store the current year in a variable and use that variable in the calculations.
let currentYear = 2023;
ageDalila = currentYear - 2005;
ageSomeoneElse = currentYear - 2000;
console.log(ageDalila, ageSomeoneElse);

console.log(2 ** 3); // 2 * 2 * 2
//The expression 2 ** 3 represents the mathematical operation of exponentiation or raising a number to a power. In this case, it calculates 2 raised to the power of 3.

let x = 10;
x += 10; //x = x+10
console.log(x);
x *= 5; //x = x * 5;
x++; // x = x + 1
x--; // x = x -1

//........................

function fullAge(age) {
  if (age >= 18) {
    console.log('The person is of legal age.');
  } else {
    console.log('The person is not of legal age.');
  }
}

fullAge(16);

//..........................

let height = 1.5;
let weight = 42;
let BMI = weight / (height * height);
console.log(BMI);

function calcBMI(height, weight) {
  console.log(weight / (height * height));
}

calcBMI(1.7, 70);

const isItGreater = height < weight;
console.log(isItGreater);

//.......................

console.log(`string
with
multiple
lines😊😊`);

//windows + . = emojies;

function drivingTest(person, age) {
  if (age >= 18) {
    console.log(`${person} can get a drivers licence`);
  } else {
    console.log(
      `${person} can't drive yet. wait for ${
        18 - age
      } years until you can drive`
    );
  }
}

drivingTest('Dalila', 15);

//....................

function centuryCheck(year) {
  if (year.length >= 5) {
    console.log('something went wrong');
  } else if (year) {
    let firstTwo = year.substring(0, 2);
    let century = Number(firstTwo) + 1;
    console.log(`year ${year} is in ${century} century`);
  }
}

centuryCheck('2222');
centuryCheck('1332');

//...................................

function century(year) {
  year = Number(year);

  if (year > 2024 || isNaN(year)) {
    console.log('Invalid year');
  } else if (year) {
    let stringYear = year.toString();
    let firstTwo = stringYear.substring(0, 2);
    let century = Number(firstTwo) + 1;
    console.log(century);
  }
}

century(2021);
century(1334);
century('string');
century(22423);
century('1812');

//..........................................

console.log('................');

let vari = 'string';
vari = Number(vari);
console.log(vari);

//.......................................

let num = 23;
console.log(typeof num);
num = String(num);
console.log(typeof num);

//............

console.log('Boolean.......................');

//Boolean.......................

console.log(Boolean(0)); //fasle
console.log(Boolean(undefined)); //false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

console.log('.....');

console.log(Boolean('string')); //true
console.log(Boolean({})); // true

let money = 0;

if (money) {
  console.log('you have enough money, good job');
} else {
  console.log(`we don't have enough money`);
}

let dalila;
if (dalila) {
  console.log('varijabla "dalila" je definisana');
} else {
  console.log('varijabla "dalila" nije definisana');
}

//..............................

let old = 18;
if (old === 18) console.log(`you are ${old} years old`);

console.log('.....');

//.............................................

// let unos = prompt('Please enter a number:');
// console.log(`${unos} is a very good number`);

//..................

let minimumScore;
let teamOneScore = 32;
let teamTwoScore = 43;

if (teamOneScore > teamOneScore && teamOneScore > 100) {
  console.log(`first team won`);
} else if (teamTwoScore > teamOneScore && teamTwoScore > 100) {
  console.log(`second team won`);
} else if (
  teamOneScore === teamTwoScore &&
  teamOneScore > 100 &&
  teamTwoScore > 100
) {
  console.log(`it's a tie`);
} else {
  console.log('Neither team has won');
}

//................................

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKolas = (97 + 112 + 101) / 3;

if (scoreDolphins > 100 && scoreDolphins > scoreKolas) {
  console.log('Dolphins su pobdeiliThe Dolphins have won');
} else if (scoreKolas > 100 && scoreKolas > scoreDolphins) {
  console.log('Kolas have won');
} else if (
  scoreDolphins > 100 &&
  scoreKolas > 100 &&
  scoreDolphins === scoreKolas
) {
  console.log(`It's a tie`);
} else {
  console.log('No one has won');
}

//..........................

console.log('switch..........................');

//... switch..........

let day = 'monday';

switch (day) {
  case 'monday': // if(day === 'monday')
    console.log('danas je ponedeljak');
    break;
  case 'tuesday':
    console.log('danas je utorak');
    break;
  case 'wednesday':
    console.log('danas je sreda');
    break;
  case 'thursday':
    console.log('danas je cetvrtak');
    break;
  case 'friday':
    console.log('danas je petak');
    break;
  default:
    console.log('niste uneli validan dan');
}

//................................

let broj = '8';

switch (broj) {
  case '4':
    console.log('broj je 4');
  case '7':
  case '8':
    console.log('broj je 7 ili 8');
}

//.................................

let age = 23;
age >= 18
  ? console.log('You can drive a car 🚗')
  : console.log('bicycle only 🚲');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

console.log(`I love to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'} !!!`);
// This can only be done in this case. It is not possible with if-else or switch.

//............................. calculator

let bill = 323;
let tip;
bill >= 50 && bill <= 300
  ? (tip = (15 / 100) * bill)
  : (tip = (20 / 100) * bill);
// 15 percent of the bill or 20 percent depending on the bill.

tip = tip.toFixed(2);
tip = Number(tip);
// let totalAmount = Number(bill) + Number(tip);

console.log(
  `The bill is ${bill}, the tip is ${tip}, and the total amount is ${
    bill + tip
  }.`
);

//....................

// let numNeighbours = Number(prompt('How many neighbours does your country have?'));
// if (!isNaN(numNeighbours)) {
//   console.log(`The country has ${numNeighbours} neighbours.`);
// } else {
//   console.log('You did not enter a valid number.');
// }

//.........................

let language;

switch (language) {
  case 'english':
    console.log(`that's a good choice`);
    break;
  case 'serbian':
    console.log('also good');
    break;
}
