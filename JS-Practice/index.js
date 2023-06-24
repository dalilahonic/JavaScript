function getVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  counter = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i])) {
      counter++;
    }
  }
  console.log(counter);
}

getVowels('sky');
getVowels('Eunoia');

//......................................

//loop through this nested array without using two for loops.
let array = [
  [67, 12, 89, 45, 23, 56, 34, 78, 90, 10],
  [32, 56, 87, 98, 21, 43, 65, 76, 54, 31],
  [89, 32, 76, 54, 78, 90, 43, 12, 67, 21],
];

for (let i = 0, j = 0; i < array.length; j++) {
  console.log(array[i][j], 'arr');
  // 🥰😍
  if (j === array[i].length - 1) {
    i++;
    j = -1;
  }
}

//...............................................
//make a copy of the array without duplicates without using sets.

function noDuplicates(arr) {
  let copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!copyArr.includes(arr[i])) {
      copyArr.push(arr[i]);
    }
  }
  return copyArr;
}
console.log(noDuplicates([12, 23, 32, 423, 5, 3, 12]));

//...............................................................
//find 3 biggest values in an array without using sort method.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let array = [545, 43, 54, 123, 55, 2, 54,212];

function smallestNumber(arr) {
  let smallestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  return smallestNum;
}

const biggest = [0, 0, 0];

let indexOf = 0;

for (let i = 0; i < arr.length; i++) {
  for (let x = 0; x < biggest.length; x++) {
    if (arr[i] > smallestNumber(biggest) && !biggest.includes(arr[i])) {
      indexOf = biggest.indexOf(smallestNumber(biggest));
      biggest[indexOf] = arr[i];
    }
  }
}

console.log(biggest);

//.........................................................

// Separating only even number in a nested array

const nested = [
  [2, 5, 8, 12],
  [15, 21, 24, 30],
  [33, 42, 49, 56],
];

const even = [];
for (let i = 0; i < nested.length; i++) {
  const newArr = [];
  for (let j = 0; j < nested[i].length; j++) {
    if (nested[i][j] % 2 === 0) {
      newArr.push(nested[i][j]);
    }
  }
  even.push(newArr);
}
console.log(even);

//..................................

//calculate the sum of the individual digit values of a given number.

function sumOFAllDigits(n) {
  let splitDigit = n.toString().split('');

  let sum = Number(splitDigit[0]);
  for (let i = 1; i < splitDigit.length; i++) {
    sum += Number(splitDigit[i]);
  }
  console.log(sum);
}

sumOFAllDigits(23);
sumOFAllDigits(16);

//.........................

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digitalRoot(n) {
  let sum = 0;

  while (n > 0 || sum > 9) {
    if (n === 0) {
      n = sum;
      sum = 0;
    }

    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

console.log(digitalRoot(23));
console.log(digitalRoot(16));
console.log(digitalRoot(5555));

// SOLUTION #2

function digital_root(n) {
  if (n < 10) return n;

  let sum = 0;
  for (i = 0, x = String(n); i < x.length; i++) sum += Number(x[i]);

  return digital_root(sum);
}

console.log(digital_root(2345));

// SOLUTION #3

function digital_root2(n) {
  if (n < 10) {
    return n;
  }
  n = n.toString().split('');
  let result = 0;
  for (var i = 0; i < n.length; i++) {
    result += Number(n[i]);
  }
  return result < 10 ? result : digital_root(result);
}

console.log(digital_root2(5555));

//..............................................................

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j] && i !== j) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('moose'));

//SOLUTION #2

function isIsogram2(str) {
  return new Set(str.toUpperCase()).size === str.length;
}

console.log(isIsogram2('Dermatoglyphics'));
console.log(isIsogram2('moose'));

// SOLUTION #3

function isIsogram3(str) {
  str = str.toLowerCase().split('');

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  } 
  return true;
}

console.log(isIsogram3('Dermatoglyphics'));
console.log(isIsogram3('moose'));
//......................

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
