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
    if (
      arr[i] > smallestNumber(biggest) &&
      !biggest.includes(arr[i])
    ) {
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
  for (i = 0, x = String(n); i < x.length; i++)
    sum += Number(x[i]);

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
  for (let i = 0; i < n.length; i++) {
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
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]))
      return false;
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
  for (s of str)
    if (s.length < shortestWord.length) shortestWord = s;

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
        let distanceNum =
          arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]);
        distances.push(distanceNum);
      }
    }
  }

  let biggestDistance = distances[0];
  if (biggestDistance === undefined) return 0;
  for (let i = 0; i < distances.length; i++) {
    if (distances[i] > biggestDistance)
      biggestDistance = distances[i];
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
  return x.split('').reverse().join('').toLowerCase() ===
    x.toLowerCase()
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

  while (a < b) {
    if (x[a] !== x[b]) return false;
    a++;
    b--;
  }
  return true;
}

console.log(isPalindrome3('noon'));
console.log(isPalindrome3('sentence'));

//.................................................................

//create a function that will break up camel casing, using a space between words.

function breakCamelCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += ' ' + str[i];
    } else {
      result += str[i];
    }
  }

  return result;
}

console.log(breakCamelCase('dalilaHonic'));

// SOLUTION #2

function breakCamelCase2(str) {
  // str = str.split('');
  str = [...str];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      str[i] = ' ' + str[i];
    }
  }
  str = str.join('');
  return str;
}

console.log(breakCamelCase2('dalilaHonic'));

//.....................................................

//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
  const combinedSet = new Set(s1 + s2);
  const combinedArray = Array.from(combinedSet);
  const sortedArray = combinedArray.sort();
  const result = sortedArray.join('');
  return result;
}

console.log(
  longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq')
);

// SOLUTION #2

const longest2 = (s1, s2) =>
  [...new Set(s1 + s2)].sort().join('');

// function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2)).sort().join('');
// }

//..............................................

//Write a function which calculates the average of the numbers in a given list.

function calculateAvrage(arr) {
  let sum = 0;
  for (let a of arr) sum += a;
  sum = sum / arr.length;
  return sum || 0;
}

console.log(calculateAvrage([1, 2, 3, 4, 5, 6]));

//....................................................

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list like so: (index1, index2).
//twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let newArr = [];
    for (let x = 0; x < numbers.length; x++) {
      if (numbers[i] + numbers[x] === target && x !== i) {
        newArr.push(numbers.indexOf(numbers[i]));
        numbers[i] === numbers[x]
          ? newArr.push(numbers.lastIndexOf(numbers[x]))
          : newArr.push(numbers.indexOf(numbers[x]));

        return newArr;
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([2, 2, 3], 4));

//................................................

// Compose a program that, for an input array of integers of length n, finds the position of the desired element or prints a message indicating that the desired element does not exist in the array.

function positionOfElement(arr, num) {
  let indexOf;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      indexOf = arr.indexOf(arr[i]);
      return 'index is ' + indexOf;
    } else if (!arr.includes(num)) {
      return `desired element does not exist in the array`;
    }
  }
}

console.log(positionOfElement([1, 2, 3, 4, 5, 6], 10));

//............................................................................

//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// function comp(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     if (b.includes(a[i] * a[i])) continue;
//     return false;
//   }
//   return true;
// }

function comp(a, b) {
  if (a === null || b === null || a.length !== b.length) {
    return false;
  }

  const frequencyCounterA = {};
  const frequencyCounterB = {};

  for (let num of a) {
    frequencyCounterA[num] =
      (frequencyCounterA[num] || 0) + 1;
  }

  for (let num of b) {
    frequencyCounterB[num] =
      (frequencyCounterB[num] || 0) + 1;
  }

  const keysA = Object.keys(frequencyCounterA);
  const keysB = Object.keys(frequencyCounterB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    const keyA = keysA[i];
    const keyB = keysA[i] ** 2;

    if (
      !(keyB in frequencyCounterB) ||
      frequencyCounterB[keyB] !== frequencyCounterA[keyA]
    ) {
      return false;
    }
  }

  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ]
  )
);

// SOLUTION #2

function comp2(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1
    .map((v) => v * v)
    .every((v, i) => v === array2[i]);
}

//........checking the multiplicity of elements in an array.

function countElements(arr) {
  let counts = {};
  for (let a of arr) {
    counts[a] = counts[a] ? counts[a] + 1 : 1;
  }
  return counts;
}

console.log(
  countElements([1, 2, 3, 1, 1, 1, 2, 3, 4, 5, 6])
);

// SOLUTION #2

function countElements2(array) {
  return array.reduce(function (counts, element) {
    counts[element] = (counts[element] || 0) + 1;
    return counts;
  }, {});
}

// SOLUTION #3

function countElements(array) {
  let counts = new Map();
  array.forEach(function (element) {
    counts.set(element, (counts.get(element) || 0) + 1);
  });
  return counts;
}

//..............................................

//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    str =
      str.slice(0, i).toLowerCase() +
      str.slice(i, i + 1).toUpperCase() +
      str.slice(i + 1).toLowerCase();
    arr.push(str);
  }

  return arr;
}

console.log(wave('dalila'));
console.log(wave('Two words'));

// SOLUTION #2

function wave2(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let letters = str.split('');

    if (letters[i] !== ' ') {
      letters[i] = letters[i].toUpperCase();
      arr.push(letters.join(''));
    }
  }

  return arr;
}

console.log(wave2('two words'));

//.............................................

//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
  let strArr = str.split(' ');

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      let word = strArr[i];
      strArr[i] = ''
      for (let j = word.length - 1; j >= 0; j--) {
        strArr[i] += word[j]
        
      }
    }
  }

  let string = strArr.join(' ');
  return string;
}

console.log(spinWords('This is another test'));