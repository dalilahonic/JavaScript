'use strict';

//SLICE

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(arr.slice(2, 4)); //[ 'c', 'd' ]
//returns a new array
//first argument: index at which we will start extracting.

console.log(arr.slice(-1)); //[ 'f' ]
console.log(arr.slice(1, -2)); //[ 'b', 'c', 'd' ]

console.log(arr.slice()); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

//SPLICE

//mutates the original array

console.log(arr.splice(2)); //[ 'c', 'd', 'e', 'f' ]
console.log(arr); //[ 'a', 'b' ]

//removing the last element
arr.splice(-1);
console.log(arr); //[ 'a' ]

arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 3)); //[ 2, 3, 4 ]
//take 3 elements from index 1. 2nd parametar the number of elements we want to delete

//REVERSE

arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); //[ 5, 4, 3, 2, 1 ]
console.log(arr); //[ 5, 4, 3, 2, 1 ]
//mutates the original array

//CONCAT

let arr2 = ['a', 'b', 'c', 'd', 'i', 'f', 'g'];

const concat = arr.concat(arr2);
console.log(concat); //  [5, 4, 3, 2, 1, 'a', 'b', 'c', 'd', 'i','f', 'g']
//doesn't mutate the original array

console.log([...arr, ...arr2]);

//JOIN

console.log(arr.join(' - ')); //5 - 4 - 3 - 2 - 1

//.....................AT

let array = [23, 11, 65];
console.log(array[0]); //23
console.log(array.at(0)); //23

// getting last array element
console.log(array[array.length - 1]); //65
console.log(array.slice(-1)[0]); //65
console.log(array.at(-1)); //65

console.log('Dalila'.at(0), 'Dalila'.at(-1)); //D a

//.....................FOR EACH

const movements = [
  200, 450, -400, 3000, -650, -130, 70, 1300,
];

// for (movement of movements) {
//   movement > 0
//     ? console.log(`you deposited ${movement}`)
//     : console.log(`you withdrew ${Math.abs(movement)}`);
// }

movements.forEach(function (movement) {
  //movement is the current element
  movement > 0
    ? console.log(`you deposited ${movement}`)
    : console.log(`you withdrew ${Math.abs(movement)}`);
});

// for(const [i, movement] of movements.entries()) {
//   console.log(`movement ${i + 1}: ${movement}`);
// }

movements.forEach((movement, i, arr) => {
  // first parametar is the current element, second is the index and the third one is the array.
  console.log(`movement ${i + 1}: ${movement}`);
});

// FOR EACH ON MAPS AND SETS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenicesUnique = new Set([
  'USD',
  'EUR',
  'GBP',
  'USD',
  'EUR',
]);
console.log(currenicesUnique); //Set(3) { 'USD', 'EUR', 'GBP' }

currenicesUnique.forEach((value, key, set) => {
  console.log(`${key}: ${value}`);
  //the key is the same as the value
  // _ : throwaway variable
});
/*
USD: USD
EUR: EUR
GBP: GBP
*/

currenicesUnique.forEach((value, _, set) => {
  console.log(value);
});

//.................................

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

const checkDogs = (dogsJuliia, dogsKate) => {
  let newDogsJulia = dogsJuliia.slice(1, -2);
  let allDogs = newDogsJulia.concat(dogsKate);

  // let newDogsJulia = dogsJuliia.splice();
  // newDogsJulia.splice(0,1)
  // newDogsJulia.splice(-2)

  allDogs.forEach((dog, i) => {
    let puppyOrAdult =
      dog >= 3
        ? `an adult and is ${dog} years old`
        : 'still a puppy';

    console.log(`Dog number ${i + 1} is ${puppyOrAdult}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [[10, 5, 6, 1, 4]]);

//....................map

// map gives us a brand new array adn this new array will contain at each position the result of applying a callback function to the original array element

// const movements = [
//   200, 450, -400, 3000, -650, -130, 70, 1300,
// ];

const eurToUsd = 1.1;

// const movementsUsd = movements.map((move) => {
//   return move * eurToUsd;
// });

const movementsUsd = movements.map(
  (move) => move * eurToUsd
);
console.log(movementsUsd);

const movementsUsdFor = [];
for (const mov of movements)
  movementsUsdFor.push(mov * eurToUsd);
console.log(movementsUsdFor);

const movementsDescriptions = movements.map(
  (move, i, arr) => {
    // return move > 0
    //   ? `movement ${i + 1}: ${move}. You deposited: ${move}`
    //   : `Movement ${i + 1}: You withdrew ${Math.abs(move)}`

    return `Movement ${i + 1}: You ${
      move > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(move)}`;
  }
);

console.log(movementsDescriptions);

//.........filter

const deposits = movements.filter((move, index, arr) => {
  return move > 0;
});

console.log(deposits);

const depositsFor = [];
for (const mov of movements)
  if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const whithdrawls = movements.filter((mov) => mov < 0);
console.log(whithdrawls);

//..............reduce

// const balance = movements.reduce((accumilator, current, index, arr) => {
//   console.log(`Iterations number ${index}: ${accumilator}`);
//   return accumilator + current
// }, 0);
//0 is initial value of the accumilator in the first loop iteration

const balance = movements.reduce(
  (accumilator, current) => accumilator + current,
  0
);

console.log(balance); //3840

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2); //3840

// MAXIMUM VALUE

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
console.log(movements);
//.................................

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/

const calcAverageHumanAge = (ages) => {
  const humanAges = ages.map((age) =>
    age <= 2 ? 2 * age : 16 + age * 4
  );

  const adults = humanAges.filter((age) => age >= 18);

  if (adults.length === 0) {
    return 0;
  }

  const average =
    adults.reduce((acc, age) => acc + age, 0) /
    adults.length;

  // const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length)
  // (2 + 3) / 2 === 2/2 + 3/2

  return average;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//......................chaining methods

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// we can only a method after another one if the first one returns an array

//........................................find method

const firstWhithdrawal = movements.find((mov) => mov < 0);
//callback function that returns a boolean. find returns the first element in an array that satisfies the condition

console.log(firstWhithdrawal);

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [
    5000, 3400, -150, -790, -3210, -1000, 8500, -30,
  ],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);

const account = accounts.find(
  (acc) => acc.owner === 'Jessica Davis'
);
console.log(account);

for (let account of accounts) {
  if (account.owner === 'Jessica Davis')
    console.log(account);
}

//...........some and every

const anyDeposits = movements.some((mov) => mov > 0);
//if there is one element that satisfies the condition then it returns true
console.log(anyDeposits); // true

// EVERY
// every only returns true if all of the elements in the array satisfy the condition that we pass in

console.log(movements.every((mov) => mov > 0)); // false
console.log(account4.movements.every((mov) => mov > 0)); // true

// Seperate callback

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit)); //true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); //[ 200, 450, 3000, 70, 1300 ]

// .....flat and flat map

const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr1.flat()); //[1,2,3,4,5,6,7,8,9]

const arrDepp = [[[1], [2], [3]], 2, 3, 4];
console.log(arrDepp.flat(2)); //[ 1, 2, 3, 2, 3, 4 ]

// const accountMovements = accounts.map(
//   (acc) => acc.movements
// );
// // console.log(accountMovements);

// const allMovements = accountMovements.flat();
// // console.log(allMovements);

// const overalBalance = allMovements.reduce(
//   (acc, mov) => acc + mov, 0
// );
// // console.log(overalBalance); //17840

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance); //17840

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance2); //17840

// ..................sorting arrays

const owners = ['Dalila', 'Jonas', 'Zach', 'Adam'];
console.log(owners.sort()); //[ 'Adam', 'Dalila', 'Jonas', 'Zach' ]
//mutates the orginal array

console.log(movements);
// console.log(movements.sort());

// return < 0, A, B
// return > 0, B, A

// movements.sort((a,b) => {
//   if(a > b) return 1
//   if(a < b) return -1
// })
console.log(movements.sort((a, b) => a - b));

console.log(movements);

// movements.sort((a,b) => {
//   if(a < b) return 1
//   if(a > b) return -1
// })

console.log(movements.sort((a, b) => b - a));

console.log(movements);

//..............arrays methods practice

const bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum); // 25180

// 2.
const numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov >= 1000).length;
console.log(numDeposits1000); //6

const numDeposits1000_2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => {
    return mov >= 1000 ? ++acc : acc;
  }, 0);

console.log(numDeposits1000_2); // 6

// ++ operator
let num = 10;
console.log(num++); // 10
console.log(num); // 11

// 3.

// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (acc, el) => {
//       el > 0
//         ? (acc.deposits += el)
//         : (acc.whithdrawls += el);
//       return acc;
//     },
//     { deposits: 0, whithdrawls: 0 }
//   );

// console.log(sums); // { deposits: 25180, whithdrawls: -7340 }

// console.log(deposits, withdrawals);

const { deposits_, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, el) => {
      sums[el > 0 ? 'deposits' : 'withdrawals'] += el;
      return sums;
    },
    { deposits_: 0, withdrawals: 0 }
  );

console.log(deposits_, withdrawals);

// 4.
// this is a nice title = This Is a Nice Title

function convertTitleCase(title) {
  const expections = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'in',
    'with',
  ];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) =>
      expections.includes(word)
        ? word
        : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
}

console.log(convertTitleCase('this is a nice title'));

//...........................................

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.

dogs.map(
  (dog) =>
    (dog.recommendedFood = Math.trunc(
      dog.weight ** 0.75 * 28
    ))
);
console.log(dogs);

// 2.

// dogs.forEach((dog) => {
//   if (dog.owners.includes('Sarah')) {
//     dog.curFood > dog.recommendedFood
//       ? console.log('dog is eating more than recommended')
//       : console.log('dog is eating less than recommended');
//   }
// });

const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'))
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  } `
);

// 3.

// let ownersEatTooLittle = [];
// let ownersEatTooMuch = [];

// dogs.forEach((dog) => {
  //   if(dog.curFood > dog.recommendedFood) ownersEatTooMuch.push(dog.owners);
  //   else if(dog.curFood < dog.recommendedFood) ownersEatTooLittle.push(dog.owners)
  // })
  
  // console.log(ownersEatTooLittle);
  // console.log(ownersEatTooMuch);
  
  let ownersEatTooLittle = dogs.filter((dog) => dog.curFood < dog.recommendedFood).flatMap((dog) => dog.owners);
let ownersEatTooMuch = dogs.filter((dog) => dog.curFood > dog.recommendedFood).flatMap((dog) => dog.owners)
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// 4.

// function logToTheConsole(arr) {
//   let str = '';
//   ownersEatTooLittle.flat().forEach((owner) => str += owner + ' ')
//   str = str.trimEnd().split(' ').join(' and ')

//   str += ' dogs eat too little'
//   console.log(str);
// }

// logToTheConsole()

// "Matilda and Alice and Bob's dogs eat too much!"
//  "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);

// 5.

// console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));
const result = dogs.some((dog) => dog.cur === dog.recommendedFood)
console.log(result); // false

// 6.
const okayAmount = dogs.some((dog) => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.11));
console.log(okayAmount);

// 7.

const okayAmountArray = dogs.filter((dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1)
console.log(okayAmountArray);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

const newDogsArr = [...dogs];
newDogsArr.sort((a,b) => a.recommendedFood - b.recommendedFood)
console.log(newDogsArr);