const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 10 + 2,
  price = '100$'
) {
  //default values

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(241); //{ flightNum: 241, numPassangers: 12, price: '100$' }

//.......................

const myFunction = function (x = 10, y = 5 * x) {
  console.log(x, y);
};

myFunction(20); //20 100

//skipping a default parametar
createBooking(10, undefined, '20$'); //{ flightNum: 10, numPassangers: 12, price: '20$' }

//......................................................

const flight = 'LH2445';
const dalila = {
  fullName: 'Dalila Honic',
  passport: 27842782347,
};

const checkIn = (flightNum, passanger) => {
  flightNum = 'LH999';
  passanger.fullName = 'Miss ' + passanger.fullName;

  if (passanger.passport === 27842782347)
    console.log('checked in');
  else console.log('wrong passport');
};

checkIn(flight, dalila); //checked in
console.log(flight); //LH2445
console.log(dalila); //{ fullName: 'Miss Dalila Honic', passport: 27842782347 }

//........................FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
//

const replaceSpace = (str) => {
  return str.replaceAll(' ', '');
};

const firstWordToUpperCase = (str) => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order functions
const transformer = (str, fn) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`String transformed by ${fn.name}`);
};

transformer('this is a sentance', firstWordToUpperCase);
/*
Original string: this is a sentance
Transformed string: THIS is a sentance
String transformed by firstWordToUpperCase
*/
transformer('this is a sentance', replaceSpace);
/*
Original string: this is a sentance
Transformed string: thisisasentance
String transformed by replaceSpace
*/

//..............................FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Dalila'); //hey Dalila

const greet2 = (greeting) => (name) =>
  console.log(`${greeting} ${name}`);

greet2('Hi')('Dalila'); //Hi Dalila

//...................CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  iatCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iatCode} ${flightNum}`,
      name,
    });
  },
};

lufthansa.book(239, 'Dalila Honic'); //Dalila Honic booked a seat on Lufthansa flight LH 239
console.log(lufthansa.bookings); //[ { flight: 'LH 239', name: 'Dalila Honic' } ]

const eurowings = {
  airline: 'Eurowings',
  iatCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work beacuse this keyword points to undefined
//book(23, 'Dalila');

//first argument is what we want the this keyword to point to
book.call(eurowings, 23, 'Dalila'); //Dalila booked a seat on Eurowings flight EW23
console.log(eurowings);

book.call(lufthansa, 53, 'Honic'); //Honic booked a seat on Lufthansa flight LH53
console.log(lufthansa);

//Apply method. Apply does not recive the list of arguments after the this keyword but insted takes an array of arguments.

const swiss = {
  airline: 'Swiss Air Lines',
  iatCode: 'LX',
  bookings: [],
};

const flightData = [635, 'Dalila Honic'];

book.apply(swiss, flightData); //Dalila Honic booked a seat on Swiss Air Lines flight LX635

book.call(swiss, ...flightData); //Dalila Honic booked a seat on Swiss Air Lines flight LX635

//..................the bind method

//this will not call a book function instead it will return a new function where the this keyword will always be set to eurowings
const bookEW = book.bind(eurowings);
bookEW(72, 'Steven'); //Steven booked a seat on Eurowings flight EW72

const bookLH34 = book.bind(lufthansa, 34);
bookLH34('Dalila'); //Dalila booked a seat on Lufthansa flight LH34
// const bookLX = book.bind(swiss);

//With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);
  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane(); //301

// document.querySelector('button').addEventListener('click', lufthansa.buyPlane) //NaN
//this keyword points to a button

// document.querySelector('button').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

//null for this keyword
const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0,23
console.log(addVAT(100)); //123

//.....

const addTax2 = (rate) => {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTax2(0.23);

console.log(addVAT2(100)); // 123

//.....................................................
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: [
//     '0: JavaScript',
//     '1: Python',
//     '2: Rust',
//     '3: C++',
//   ],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let poll = Number(
//       prompt(
//         `${this.question}\n ${this.options.join(
//           '\n'
//         )}. \n Write option number`
//       )
//     );
//     poll >= 0 && poll < this.answers.length
//       ? this.answers[poll]++
//       : console.log('Invalid number');

//     // console.log(this.answers);

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') console.log(this.answers);
//     else if (type === 'string')
//       console.log(
//         `Poll results are ${this.answers.join(', ')}`
//       );
//   },
// };

// document
//   .querySelector('button')
//   .addEventListener(
//     'click',
//     poll.registerNewAnswer.bind(poll)
//   );

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// const testData = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: testData });
// let obj = {
//   answers: testData,
// };

// poll.displayResults.call(obj);

//.............................Immediately Invoked Function Expressions

(function () {
  console.log('function');
})();

(() => console.log('arrow function'))();

{
  const isPrivate = 3;
  var notPrivate = 2;
}

// console.log(isPrivate); isPrivate is not defined
console.log(notPrivate); //2

//..............................CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
};

const booker = secureBooking();

booker();
booker();

// console.dir(booker)

//................................

// (function () {
//   const heading = document.querySelector('.heading');
//   heading.style.color = 'red';

//   document.addEventListener('click', () => {
//     heading.style.color = 'blue';
//   });
// })();
