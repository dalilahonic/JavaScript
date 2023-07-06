/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

THIS TEST DATA 
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT
underscoreCase      
firstName           
someVariable        
calculateAge        
delayedDeparture    
*/

// function convertToCamelCase(...items) {
//   //   console.log(items); //[ 'underscore_case', 'dalila_honic' ]

//   let newArr = [];
//   for (let i = 0; i < items.length; i++) {
//     let arr = items[i].split('_');
//     newArr.push(arr);
//   }

//   //   console.log(newArr); //[ [ 'underscore', 'case' ], [ 'dalila', 'honic' ] ]

//   for (let i = 0; i < newArr.length; i++) {
//     for (let j = 1; j < newArr[i].length; j++) {
//       let upperCase = newArr[i][j][0];
//       let upperCaseWord = newArr[i][j].replace(
//         upperCase,
//         upperCase.toUpperCase()
//       );

//       newArr[i][j] = upperCaseWord;
//     }
//   }

// //   console.log(newArr); //[ [ 'underscore', 'Case' ], [ 'dalila', 'Honic' ] ]
// //   console.log(...newArr); //[ 'underscore', 'Case' ] [ 'dalila', 'Honic' ]

//   let str = newArr[0][0] + newArr[0][1] + ' ';
//   str += newArr[1][0] + newArr[1][1];

//   console.log(str);
// }

function convertToCamelCase(...items) {
  let convertedItems = [];
  for (let i = 0; i < items.length; i++) {
    const words = items[i].split('_'); //array
    let converted = words[0]; //string
    for (let j = 1; j < words.length; j++) {
      converted += words[j][0].toUpperCase() + words[j].slice(1);
    }
    convertedItems.push(converted);
  }

  const result = convertedItems.join(' ');

  return result;
}

console.log(convertToCamelCase('underscore_case', 'dalila_honic'));

console.log(
  convertToCamelCase(
    'underscore_case',
    'first_name',
    'Some_Variable',
    'calculate_AGE',
    'delayed_departure'
  )
);

function convertToCamelCase2(...strings) {
  for (let string of strings) {
    let [first, second] = string.toLowerCase().trim().split('_');

    let output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
}

console.log(
  convertToCamelCase2(
    'underscore_case',
    'first_name',
    'Some_Variable',
    'calculate_AGE',
    'delayed_departure'
  )
);

//.........................................................

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// let flightsArr = flights.split('+');

// // console.log(flightsArr);

// for (let i = 0; i < flightsArr.length; i++) {
//   for (let j = 0; j < flightsArr[i].length; j++) {
//     if (flightsArr[i][j] === '_' || flightsArr[i][j] === ';') {
//       flightsArr[i] = flightsArr[i].replace(flightsArr[i][j], ' ');
//     }
//   }
//   flightsArr[i] = flightsArr[i].trim();
// }

// console.log(flightsArr);

const getCode = (str) => str.slice(0, 3).toUpperCase();

let length = 0;
for (let flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('Delayed') ? '⚠️  ' : ''}${type
    .replaceAll('_', ' ')
    .trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(42);
    
  console.log(output);
}
