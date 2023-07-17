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

// ..................................

// calculate the sum of the individual digit values of a given number.

function sumOFAllDigits(n) {
  let splitDigit = n.toString().split('');

  let sum = 0;
  for (let i = 0; i < splitDigit.length; i++) {
    sum += Number(splitDigit[i]);
  }
  console.log(sum);
}

sumOFAllDigits(23);
sumOFAllDigits(16);

//SOLUTION #2

function sumOFAllDigits2(num) {
  let sum = num
    .toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);

  return sum;
}

console.log(sumOFAllDigits2(56));

// ..........................................

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
  return result < 10 ? result : digital_root2(result);
}

console.log(digital_root2(5555));

// SOLUTION #4

function digitalRoot2(num) {
  if (num < 10) return num;

  // return digitalRoot2(num.toString().split('').reduce(function(acc, d) { return acc + Number(d)}, 0));

  return digitalRoot2(
    num
      .toString()
      .split('')
      .reduce((acc, n) => acc + Number(n), 0)
  );
}

function digitalRoot2(num) {
  return num < 10
    ? num
    : digitalRoot2(
        num
          .toString()
          .split('')
          .reduce((acc, n) => acc + Number(n), 0)
      );
}

console.log(digitalRoot2(5555));

// SOLUTION #5

function digitalRoot3(n) {
  while (n > 9) {
    n = String(n)
      .split('')
      .reduce((acc, digit) => acc + Number(digit), 0);
  }

  return n;
}
console.log(digitalRoot3(456));

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
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram2('Dermatoglyphics'));
console.log(isIsogram2('moose'));

// SOLUTION #3

function isIsogram3(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i]))
      return false;
  }
  return true;
}

console.log(isIsogram3('Dermatoglyphics'));
console.log(isIsogram3('moose'));

// SOLUTION #4

function isIsogram4(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    for (let x = i + 1; x < str.length; x++) {
      if (str[i] === str[x]) return false;
    }
  }
  return true;
}

// SOLUTION #5

function isIsogram5(str) {
  str = str.toLowerCase().split('');

  uniques = str.filter((num, i, arr) => {
    return arr.indexOf(num) === i;
  });

  return uniques.length === str.length ? true : false;
}

// ...............................................................

// make a function that returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// function stringEnd(str, ending) {
//   return str.endsWith(ending);
// }

const stringEnd = (str, ending) => str.endsWith(ending);
console.log(stringEnd('abc', 'c'));

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

// SOLUTION #2

function filterArr2(arr) {
  return arr.filter((el) => typeof el === 'number');
}

// function filterArr3(arr) {
//   return arr.filter((el) => Number.isInteger(el))
// }

console.log(filterArr2([1, 2, 'a', 'b']));

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

// SOLUTION #2

function shortestWord2(str) {
  str = str.split(' ').map((s) => s.length);

  return Math.min(...str);
}

// SOLUTION #3

function shortestWord3(str) {
  return str
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop().length;
}

//...................................................................

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// function sumOfNumsInBetween(a, b) {
//   if (a === b) return a;
//   let sum = 0;
//   if (a > b) {
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//   }

//   return sum
// }

function sumOfNumsInBetween2(a, b) {
  if (a === b) return a;

  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumOfNumsInBetween2(2, 4));

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

// SOLUTION #3

function greatestDistance2(arr) {
  return arr.reduce(
    (acc, el, i) => Math.max(arr.lastIndexOf(el) - i, acc),
    0
  );
}

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
      strArr[i] = '';
      for (let j = word.length - 1; j >= 0; j--) {
        strArr[i] += word[j];
      }
    }
  }

  let string = strArr.join(' ');
  return string;
}

console.log(spinWords('This is another test'));

// ...............................................................

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  str = str
    .split(' ')
    .map((s) => {
      word = '';
      for (let i = 0; i < s.length; i++) {
        if (i === 0) word += s[i].toUpperCase();
        else word += s[i];
      }
      return word;
    })
    .join('');

  if (str !== '') str = '#' + str;

  if (str.length > 140) return false;

  return str || false;
}

console.log(generateHashtag('this is a sentance'));
console.log(generateHashtag(''));

// SOLUTION #2

function generateHashtag2(str) {
  //if(!str || str.length < 1) return false;
  str =
    '#' +
    str
      .split(' ')
      .map((s) => s.at(0).toUpperCase() + s.slice(1))
      .join('');

  if (str.length > 140 || str === '#') return false;

  //return r.length > 140?false:r;
  return str;
}

console.log(generateHashtag2('this is some'));

// SOLUTION #3

function generateHashtag3(str) {
  if (str === '') return false;
  str = str
    .split(' ')
    .reduce(
      (acc, word) =>
        acc + word[0].toUpperCase() + word.slice(1),
      '#'
    );
  return str > 140 ? false : str;
}

console.log(generateHashtag3('this is again'));
console.log(generateHashtag3(''));

// const generateHashtag = str => (s = '#'+str.trim().split(' ').map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join('')).length > 1 && s.length <= 140 ? s : false
//..............................................

//Create a function that returns the sum of the two lowest positive numbers given an arr of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an arr is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumOfTwoLowest(arr) {
  let mins = [];
  while (mins.length <= 1) {
    let smallestNum = Math.min(...arr);
    mins.push(smallestNum);
    arr.splice(arr.indexOf(smallestNum), 1);
  }
  return mins.reduce((acc, num) => acc + num);
}

console.log(sumOfTwoLowest([1, 2, 3, 4, 5]));

// SOLUTION #2

function sumOfTwoLowest2(arr) {
  arr.sort((a, b) => a - b);
  //.slice(0, 2).reduce((a, b) => a + b);
  return arr[0] + arr[1];

  // let [ a, b ] = numbers.sort((a, b) => a - b)
  // return a + b
}

// function sumTwoSmallestNumbers(numbers) {
//   let min = Number.MAX_SAFE_INTEGER;
//   let secondMin = Number.MAX_SAFE_INTEGER;

//   let n;
//   for (i = 0; i < numbers.length; i++) {
//     n = numbers[i];
//   	if(n < min) {
//     	secondMin = min;
//       min = n;
//     } else if( n < secondMin ) {
//     	secondMin = n;
//     }
//   }

//   return min + secondMin;
// }

// function sumTwoSmallestNumbers(numbers) {
//   let lowest = numbers.sort(function(a, b){return b-a}).slice(-2);
//   return lowest.pop() + lowest.pop();
// };

//............................................................
//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//[2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(arr) {
  let odds = [];
  let even = [];

  arr.forEach((a) => {
    a % 2 === 0 ? even.push(a) : odds.push(a);
  });

  return odds.length > 1 ? even[0] : odds[0];
}

console.log(findOutlier([12, 43, 32, 78, 4, 2]));

// SOLUTION #2

function findOutlier2(arr) {
  let even = arr.filter((a) => a % 2 == 0);
  let odd = arr.filter((a) => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}

//......................................................

//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
/*
  strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
  
  Concatenate the consecutive strings of strarr by 2, we get:
  
  treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
  folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
  trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
  blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
  abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]
  
  Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
  The first that came is "folingtrashy" so
  longest_consec(strarr, 2) should return "folingtrashy".
  */

function longestConsec(starr, k) {
  if (k <= 0 || k > starr.length) {
    return '';
  }

  let strings = [];
  for (let i = 0; i < starr.length; i++) {
    let indexOfCurrentElement = starr.indexOf(starr[i]);
    let str = '';
    for (
      let i = indexOfCurrentElement;
      i < indexOfCurrentElement + k;
      i++
    ) {
      str += starr[i];
    }
    if (str.includes('undefined')) continue;
    strings.push(str);
  }

  // let longest = strings[0];
  // for (let str of strings)
  //   if (str.length > longest.length) longest = str;

  // return longest;

  return strings.reduce((acc, str) => {
    if (str > acc) return str;
    else return acc;
  }, strings[0]);
}

console.log(
  longestConsec(
    [
      'tree',
      'foling',
      'trashy',
      'blue',
      'abcdef',
      'uvwxyz',
    ],
    2
  )
);
console.log(
  longestConsec(
    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
    2
  )
);

//........................................

//write a function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
//expected 'the_pippi_wasPippi' to equal 'thePippiWasPippi'

function toCamelCase(str) {
  if (str === '') return '';
  return (str = str
    .replaceAll('-', '_')
    .split('_')
    .map((s, i) => {
      if (i !== 0) {
        return (
          s[0].toUpperCase() + s.slice(1).toLowerCase()
        );
      } else return s[0] + s.slice(1);
    })
    .join(''));
}

// function toCamelCase(str){
//   if (str === '') return '';
//  str = str.replaceAll('-', '_').split('_')
//    return str.map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
// }

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('a_pippi_wasKawaii'));
console.log(toCamelCase('ACat_was_Pippi'));
console.log(toCamelCase('the_pippi_wasPippi'));

//.........................................

// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      str = str.replace(str[i], '');
      i--;
    }
  }

  return str;
}

console.log(
  disemvowel(
    `No offense but, Your writing is among the worst I've ever read`
  )
);

//.............................................................

// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n < signature.length) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(signature[i]);
    }
    return arr;
  }

  let sum = 0;
  for (
    let i = signature.length - 1;
    i >= signature.length - 3;
    i--
  ) {
    sum += signature[i];
  }
  signature.push(sum);

  return signature.length === n
    ? signature
    : tribonacci(signature, n);
}

console.log(tribonacci([1, 1, 2], 10));
console.log(tribonacci([1, 1, 1], 1));

//..................................................

// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  s = s.split('');
  allLower = s.map((letter) => letter.toLowerCase());

  for (let i = 0; i < allLower.length; i++) {
    if (
      allLower.indexOf(allLower[i]) ===
      allLower.lastIndexOf(allLower[i])
    )
      return s[i];
  }

  return '';
}

console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('sTreSS'));

// function firstNonRepeatingLetter(s) {
//   let str = s.toLowerCase();
//   for(let i = 0; i < str.length; i++) {
//     if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return s[i];
//     }
//   }
//   return "";
// }


//..........................
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// function incrementString(str) {
//   lastCharacter = str.slice(-1);
//   indexOfLastCharacter = str.lastIndexOf(lastCharacter);

//   let num = Number(lastCharacter);

//   if (isNaN(num) === false) {
  //     num++;
//     str = str.slice(0, str.length - 1) + num;
//   } else {
//     str = str.slice(0, str.length - 1) + 1;
//   }

//   return str;
// }

// console.log(incrementString('fsds1'));
// console.log(incrementString('fsds'));

// let thisd = 's';
// thisd =Number(thisd),
// console.log( isNaN(thisd));
// ...............................
// create all permutations of a non-empty input string and remove duplicates, if present.
// Create as many "shufflings" as you can!
// Examples:
// With input 'a':
// Your function should return: ['a']
// With input 'ab':
// Your function should return ['ab', 'ba']
// With input 'abc':z
// Your function should return ['abc','acb','bac','bca','cab','cba']

// function permutations(str) {
//   str = str.split('');
//   let permutationsArr = [];

//   for (let i = 0; i < str.length; i++) {
  //     let permutation = '';
//     permutation += str[i];

//     for (let x = 0; x < str.length; x++) {
//       if (i !== x) {
//         permutation += str[x];
//       }
//     }
//     permutationsArr.push(permutation);
//   }

//   return permutationsArr;
// }

// console.log(permutations('abcd'));

// ...........................................

//The directions given to the man are, for example, the following
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
//You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
//Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// function dirReduce(arr) {
  //   console.log(arr);
// }

// console.log(dirReduce([1, 2, 3]));

//...........................................................
// Write a program that performs a search for solutions to a word game. The goal of the game is to find sets of five words that share a vowel alternation. E.g., one solution to the game might be the words:
// ['last', 'lest', 'list', 'lost', 'lust']
// This list above is a valid solution instance since the vowels 'a', 'e', 'i', 'o', and 'u' occur in the same positions between the consonant clusters 'l' and 'st'.
// Your program should return a list of all solutions (like the list above) given a list of words to search through.
// Note that order matters. If you prefer to use sets for book-keeping purposes, that is fine, but you will need to sort your list of solutions, and each solution set itself.

//............................................

//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.


// function scramble(str1, str2) {
//   return [...str2].evsery((letter) => str1.includes(letter));
// }

// console.log(scramble('rkqodlw', 'world'));