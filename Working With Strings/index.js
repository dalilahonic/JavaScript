const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log('B737'[0]); //B

console.log(airline.length); //16
console.log('b737'.length); //4

console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10

console.log(airline.indexOf('Portugal')); // 8
//case sensitive

console.log(airline.slice(4, 7)); //Air
//this is called a substring. this does not change the original string.

console.log(airline.slice(0, airline.indexOf(' '))); //TAP
//extracting the first word of a string

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal
//extracting the last word of a string
// + 1 removes the space before "Portugal"

console.log(airline.slice(-8)); //Portugal
//we can define a negative argument. and it will start extracting from the end.

console.log(airline.slice(1, -1)); // AP Air Portuga

//...........................

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  if (seat.includes('E') || seat.includes('B')) {
    console.log(`Seat ${seat} is a middle seat`);
  } else {
    console.log(`Seat ${seat} is not a middle seat`);
  }
};

checkMiddleSeat('23B'); //Seat 23B is a middle seat
checkMiddleSeat('22A'); //Seat 22A is not a middle seat

const checkMiddleSeat2 = function (seat) {
  //B and E are middle seats
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    //taking the last letter of the word
    console.log(`Seat ${seat} is a middle seat`);
  } else {
    console.log(`Seat ${seat} is not a middle seat`);
  }
};

checkMiddleSeat2('2B'); //Seat 2B is a middle seat
checkMiddleSeat('23A'); //Seat 23A is not a middle seat
checkMiddleSeat('33E'); //Seat 33E is a middle seat

//.........................

let newStr = new String('Dalila');
console.log(newStr); //[String: 'Dalila']
console.log(typeof newStr); //object

console.log(airline.toLowerCase()); //tap air portugal
console.log(airline.toUpperCase()); //TAP AIR PORTUGAL

//fix capitalization in a name

let passenger = 'dAlIlA';

let fixCapitalization =
  passenger.slice(0, 1).toUpperCase() +
  passenger.slice(1).toLocaleLowerCase();

console.log(fixCapitalization); //Dalila

//comparing emails

const email = 'dalila@honic.com';
const email2 = '     Dalila@Honic.COm   \n'; // "\n" is line break

let fixEmail = email2.toLowerCase().trim();

console.log(fixEmail); //dalila@honic.com

function checkEmail(firstEmail, secondEmail) {
  let fixedEmail = secondEmail.toLowerCase().trim();
  return firstEmail === fixedEmail;
}

console.log(checkEmail(email, email2)); //true

//.............

let nameOf = '     Dalila        ';
// trimes the space before the first word
console.log(nameOf.trimStart()); //Dalila
// trimes the space after a word
console.log(nameOf.trimEnd()); //     Dalila

//replacing

const priceGB = '254,99£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
console.log(priceUS); //254.99$
//replace only changes the first occurance of that word

let announcment =
  'All passangers should come to boading door. the door 23!';
console.log(announcment.replaceAll('door', 'gate')); //All passangers should come to boading gate. the gate 23!
// replace all changes all occurances

const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320')); //true
console.log(newPlane.startsWith('Air')); //true
console.log(newPlane.endsWith('neo')); //true

//...........

const checkBaggage = function (items) {
  let itemsLower = items.toLowerCase();
  if (
    itemsLower.includes('gun') ||
    itemsLower.includes('knife')
  ) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some food, and a Knife'); //You are not allowed on board
checkBaggage('Socks and a camera'); //Welcome aboard!
checkBaggage('Food, water and gun for protection'); //You are not allowed on board

//......................SPLIT AND JOIN..........

let str = 'this is a string';
console.log(str.split(' ')); //[ 'this', 'is', 'a', 'string' ]
//splites the sentence where the space is found

const [firstName, lastName] = 'Dalila Honic'.split(' ');
console.log(firstName, lastName); //Dalila Honic

const newName = [firstName, lastName].join(' ');
console.log(newName); //Dalila Honic
//joins the strings and adds space between them

function capitalizeName(name) {
  let names = name.split(' ');
  let namesUpper = [];

  for (let n of names) {
    namesUpper.push(
      n[0].toUpperCase() + n.slice(1).toLowerCase()
    );

    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
  }

  console.log(...namesUpper);
  // console.log(namesUpper.join(' '));
}

capitalizeName('isabella grace thompson parker'); //Isabella Grace Thompson Parker
capitalizeName('dalila honic'); //Dalila Honic

//padding

let string = 'go to the gate 23!';
let paddedString = string.padStart(30, '!');
console.log(paddedString, paddedString.length); //!!!!!!!!!!!!go to the gate 23! 30
//padStart() method is used to pad a string with a specific character or set of characters to achieve a desired length.

console.log(paddedString.padEnd('35', '?')); //!!!!!!!!!!!!go to the gate 23!?????

const maskCreditCard = function (number) {
  let str = number + '';
  //when one of the operants of the + is a string it will convert all operants to a string

  // let lastDigits = str.slice(-4);
  // let maskedNumber = lastDigits.padStart(str.length, '*');
  let maskedNumber = str
    .slice(-4)
    .padStart(str.length, '*');

  console.log(maskedNumber);
  // console.log(maskedNumber.length, str.length);
};

maskCreditCard(45567876763); //*******6763
maskCreditCard('5342349876543'); //*********6543

//...........................REPEAT

let message = 'Bad weather... all departures delayed... ';

console.log(message.repeat(4)); //Bad weather... all departures delayed... Bad weather... all departures delayed... Bad weather... all departures delayed... Bad weather... all departures delayed...

const planesInLine = function (n) {
  console.log(
    `There are ${n} planes waiting ${'✈️ '.repeat(n)}`
  );
};

planesInLine(3); //There are 3 planes waiting ✈️ ✈️ ✈️
planesInLine(7); //There are 7 planes waiting ✈️ ✈️ ✈️ ✈️ ✈️ ✈️ ✈️
