console.log(23 === 23.0); // true
// Base 10 : 0 to 9
// Binary base 2 : 0 and 1

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 3); // false

// Converting string to numbers
console.log(Number('23')); //23
console.log(+'23'); //23
// when JS sees the + operator it will automaticlly convert all the operants to numbers

// Parsing
console.log(Number.parseInt('12px')); // 12
//in order for this to work the string needs to start with a number
console.log(Number.parseInt('e23')); //NaN
console.log(Number.parseInt(23.23)); // 23

console.log(Number.parseInt('2.5rem')); //2
console.log(Number.parseFloat('2.5rem')); //2.5

parseFloat('3.14'); // returns 3.14
parseFloat('3.14abc'); // returns 3.14
parseFloat('abc'); // returns NaN

//parseFloat is a function that parses a string argument and returns a floating-point number.
// It attempts to convert a portion of the input string into a number and stops parsing when it encounters an invalid character.
//The function ignores leading whitespace and stops parsing at the first non-numeric character (excluding the decimal point).
//If the string does not contain any valid numeric characters, parseFloat returns NaN (Not a Number).

// isNaN
// check if value is NaN
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN('30e')); // false
console.log(Number.isNaN(+'30e')); // true
console.log(Number.isNaN(23 / 0)); // false

console.log(isNaN('string')); // true
console.log(Number.isNaN('string')); // false

// isFinite
// checking if the value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20E')); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

// Math and Rounding

console.log(Math.sqrt(25)); //5
// square root
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2
// cube root

console.log(Math.max(23, 45, 63, 12, 1)); // 63
console.log(Math.max(23, 45, '63', 12, 1)); // 63
console.log(Math.max(23, 45, '63px', 12, 1)); // NaN
console.log(Math.max(23, '45px', 63, 12, 1)); // NaN

console.log(Math.min(23, 45, 63, 12, 1)); // 1

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);
// Math.random() gives us the number between 0 and 1. Math.trunc() removes the decimal part

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

// Rounding integers

console.log(Math.trunc(23.43)); // 23
// Math.trunc() is a method that returns the integer part of a given number by removing the decimal places.

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24
// rounds a number to the nearest integer.
//When the decimal part of the number is less than 0.5, it rounds down to the nearest integer. When the decimal part is 0.5 or greater, it rounds up to the nearest integer.

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24
// that rounds a number up to the next highest integer, regardless of the decimal part.

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
// rounds a number down to the next lowest integer, regardless of the decimal part.

// trunc and floor with negative numbers
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// Rounding decimals

console.log((2.4).toFixed(0)); // 2
console.log((2.7).toFixed(0)); // 3
// toFixed returns a string
console.log((2.7).toFixed(3)); // 2.700
console.log(+(2.7).toFixed(3)); // 2.7 (number)

//...................Remainder operator

console.log(5 % 2); // 1
// 5 = 2 * 2 + 1
// 8 = 2 * 3 + 2

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(25)); // false

// labelBalance.addEventListener('click', function () {
//     [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//       // 0, 2, 4, 6
//       if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//       // 0, 3, 6, 9
//       if (i % 3 === 0) row.style.backgroundColor = 'blue';
//     });
//   });

//...........Numeric Seperators

// 287,460,000,000
// const diametar = 287460000000;
const diametar = 287_460_000_000;
console.log(diametar); // 287460000000

const priceCents = 345_99;

//.................Working with BigInt

// biggerst number that javascript can represent
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER);

// if we do calculations with numbers that are bigger than this we might lose precision

console.log(24356432234345435435345345435454252353235n);
// console.log(BigInt(24356432234345435435345345435454252353235n));
// this n transforms a regular number into a BigInt number

// Operations
// operators work just the same with BigInt
console.log(100000n + 12142n);
// console.log(Math.sqrt(16n)); // does not work

// it is not possible to mix BigInts with regular numbers. however, there are 2 exceptions to this which are the comparison operators and plus operator when working with strings

// Exceptions
console.log(20n > 12); // true
console.log(20n === 20); // false
console.log(20n == 20); // true
console.log(20n == '20'); // true

// Divisions

console.log(10n / 3n); //3n
// it just cuts off the decimal part
console.log(10 / 3); //3.3333333333333335

//..................Creating Dates

const now = new Date();
console.log(now);

console.log(new Date('January 9, 2024'));
// this is unreliable. if javascript creates these dates then it is fine

console.log(new Date(2023, 3, 4, 12, 43, 42));
// year, month, day, hours, minutes, seconds
// month in js is 0 based.

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate()); // day of the month
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);

//..........................................

// const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(Number(future));
// timestamp in miliseconds

const dayPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// divide it by 1 000 to convert it to seconds, 60 to convert it to minutres, 60 to hours, 24 to convert it to days

const days1 = dayPassed(
  new Date(2037, 3, 20),
  new Date(2037, 3, 14)
);

console.log(days1); // 10

const day2 = dayPassed(
  new Date(2037, 3, 20, 10, 8),
  new Date(2037, 3, 14)
);
console.log(Math.round(day2)); // 6
// 2037, 3, 20, 10, 8 : 10 hours and 8 minutes
// Math.round to round the number

//.................................................

const num = 32432.32;

const options = {
  // style: 'unit',
  // unit: 'mile-per-hour',

  // style: 'percent'
  // unit: 'celsius'

  style: 'currency',
  currency: 'EUR',
  // useGrouping: false
};

console.log(
  'US',
  new Intl.NumberFormat('en-US', options).format(num)
); // US €32,432.32
console.log(
  'Germany',
  new Intl.NumberFormat('de-DE', options).format(num)
); // Germany 32.432,32 €
console.log(
  'Serbia',
  new Intl.NumberFormat('sr-Latn', options).format(num)
); // Serbia 32.432,32 €

//.....................................
// setTimeout runs only once after a defined time
// setInterval runs forever until we stop it

function consoleLog(message) {
  console.log(message);
}

setTimeout(() => consoleLog('console log this'), 3000); //console log this
// we delayed calling this function for 3s
// 3sec = 3000 miliseconds

setTimeout(
  (firstName, lastName) =>
    console.log(`my name is ${firstName} ${lastName}`),
  3000,
  'Dalila',
  'Honic'
); // my name is Dalila Honic

const ingredients = ['olives', 'spinach'];

const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(
      `Here is your pizza with ${ing1} and ${ing2}`
    ),
  3000,
  ...ingredients
);

if (ingredients.includes('spinach'))
  clearTimeout(pizzaTimer);

//setInterval

// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// },1000);
// every second a new date is created and printed to the console