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

//loop through this nested arr without using two for loops.
let arr = [
  [67, 12, 89, 45, 23, 56, 34, 78, 90, 10],
  [32, 56, 87, 98, 21, 43, 65, 76, 54, 31],
  [89, 32, 76, 54, 78, 90, 43, 12, 67, 21],
];

for (let i = 0, j = 0; i < arr.length; j++) {
  console.log(arr[i][j], 'arr');
  // 🥰😍
  if (j === arr[i].length - 1) {
    i++;
    j = -1;
  }
}

//...............................................
//make a copy of the arr without duplicates without using sets.

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
//find 3 biggest values in an arr without using sort method.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr = [545, 43, 54, 123, 55, 2, 54,212];

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

// Separating only even number in a nested arr

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

//Create a function that returns the sum of the two lowest positive numbers given an arr of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an arr is passed like [19, 5, 42, 2, 77], the output should be 7.

//...............................................................

// make a function that returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function stringEnd(str, ending) {
  return str.endsWith(ending);
}

console.log(stringEnd('abc', 'c'));

const stringEnd2 = (str, ending) => str.endsWith(ending);
console.log(stringEnd2('abc', 'c'));

//..........................

// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filterArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

console.log(filterArr([1, 2, 'a', 'b']));

//..............................................

//given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function shortestWord(str) {
  str = str.split(' ');
  let shortestWord = str[0];
  for (s of str) if (s.length < shortestWord.length) shortestWord = s;

  return shortestWord.length;
}

console.log(shortestWord('this is some sentence'));
//...................................................................

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function sumOfNumsInBetween(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumOfNumsInBetween(2, 4));

//..................................................................

//return the greatest distance of index positions between matching number values in an array or 0 if there are no matching values.

// Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is between the matching '1' values at index 2 and 5. Executing greatestDistance/greatest_distance/GreatestDistance with this array would return 3. (i.e. 5 - 2)

function distance(arr) {
  let distances = [];
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if (arr[i] === arr[x] && i !== x) {
        let distanceNum = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
        distances.push(distanceNum);
      }
    }
  }

  let biggestDistance = distances[0];
  if (biggestDistance === undefined) return 0;
  for (let i = 0; i < distances.length; i++) {
    if (distances[i] > biggestDistance) biggestDistance = distances[i];
  }
  return biggestDistance;
}

console.log(distance([0, 2, 1, 2, 4, 1]));
console.log(distance([1, 2, 3, 2, 3, 4, 5, 1, 4, 5]));
console.log(distance([1, 2, 3, 4]));

// SOLUTION #2

const greatestDistance = function (data) {
  let result = [];
  for (let num of data) {
    result.push(data.lastIndexOf(num) - data.indexOf(num));
  }

  return Math.max(...result);
};

console.log(greatestDistance([1, 2, 3, 4, 5, 1]));

//...........................................
//Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

const isPalindrome = (x) => {
  return x.split('').reverse().join('').toLowerCase() === x.toLowerCase()
    ? true
    : false;
};

console.log(isPalindrome2('noon'));

// SOLUTION #2

function isPalindrome2(str) {
  str = str.toLowerCase();
  let str2 = '';
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str === str2;
}

console.log(isPalindrome2('noon'));
console.log(isPalindrome2('moon'));
console.log(isPalindrome2('madam'));

// SOLUTION #3

function isPalindrome3(x) {
  x = x.toLowerCase();
  a = 0;
  b = x.length - 1;

  while(a < b) {
    if(x[a] !== x[b]) return false
    a++
    b--
  }
  return true
}

console.log(isPalindrome3('noon') );
console.log(isPalindrome3('sentence') );