//merging two or more arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9]

//copying an array
let arr5 = arr1.concat();
console.log(arr5); //[ 1, 2, 3 ]

//The concat method creates a new array. It does not alter the original array.

//copying an array and adding a new element
let arr6 = arr1.concat(4);
console.log(arr6); //[ 1, 2, 3, 4 ]

let arr7 = arr1.concat(arr2, 56, 45, 32);
console.log(arr7); //[1,  2,  3,  4, 5, 6, 56, 45, 32]

//...............copyWithin

// copyWitin returns the modified array. it doesn't return a new array.
//parametars are : target(required):The index at which to start copying elements to. start (optional): The index at which to start copying elements from. If not provided, it defaults to 0. end (optional): The index at which to stop copying elements from (excluding the end index). If not provided, it defaults to the length of the array.

arr1 = [1, 2, 3, 4, 5, , 6, 7, 8];
arr1.copyWithin(5, 0, 2);
//copy the elements from index 0 to 2 (it doesn't include number at index 2) and copy that starting from index 5
console.log(arr1); //[ 1, 2, 3, 4, 5,1, 2, 7, 8]

//...............entries

arr1 = [1, 2, 3];

for (const a of arr1.entries()) {
  console.log(a);
}
//[ 0, 1 ]
//[ 1, 2 ]
//[ 2, 3 ]

for (const [index, element] of arr1.entries()) {
  console.log(index, element);
}

//..................every()

//returns a boolean value
arr1 = [1, 0, 3, 4];

const greaterThanOne = (number) => {
  return number > 0;
};

console.log(arr1.every(greaterThanOne)); //false
//true if callbackFn returns a truthy value for every array element. Otherwise, false.

//paramatars for every() method. a function to execute for each element in an array.

//The every() method is an iterative array method. It executes a given callback function for each element in the array until the callback function returns a falsy value. If a falsy value is returned by the callback function for any element, every() immediately returns false and stops iterating through the array. However, if the callback function returns a truthy value for all elements in the array, every() returns true. function is only invoked for elements that have values. it is not invoked for empty slots.
// for an empty array it always returns true

//.....................fill

arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.fill(0, 2, 4)); //[ 1, 2, 0, 0, 5, 6 ]
//fill an array with 0 from index 2 until 4. The filling starts from the provided start index (2) and extends up to, but not including, the provided end index (4).
// If the end index is not defined, the filling operation modifies the array until the end.
//fill returns a modified array.

//....................filter

arr1 = [1, 2, 3, , 4, 5, 6];
let filteredArray = arr1.filter((number) => number > 2);
console.log(filteredArray); //[ 3, 4, 5, 6 ]
//filter creates a new array with all the elements that pass a certain condition defined by the callback functioon.  It iterates through each element of the array and invokes the callback function for each element. If the callback function returns true for a particular element, that element is included in the new array. Otherwise, it is excluded.

let evenNumbers = arr1.filter((num) => num % 2 === 0);
console.log(evenNumbers); //[ 2, 4, 6 ]

//........................find

//The find() method is used to search for the first element in an array that satisfies a specific condition defined by a testing function. It returns the found element or undefined if no element satisfies the condition.

let arr = [1, 2, 3, 4, 5, , 6, 7, 8];
let greaterThanFive = arr.find((num) => num > 5);
console.log(greaterThanFive); //

//........................... FIND LAST

//The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function.

arr1 = [5, 10, 15, 20, 25, 30];

const last = arr1.findLast((num) => num > 15);
console.log(last); //30

//..........................map

//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

arr1 = [1, 2, 3, 4, 5, 6];
let map1 = arr1.map((num) => num + 2);
console.log(map1); //[ 3, 4, 5, 6, 7, 8 ]

//...................reduce

arr1 = [1, 2, 3, 4, 5];

const sum = arr1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
//In this example, the callback function takes the accumulator and currentValue as arguments and returns their sum. The initial value is set to 0, so the first iteration starts with accumulator = 0 and currentValue = 1. The callback function adds 1 to the accumulator, resulting in 1. On the next iteration, accumulator = 1 and currentValue = 2, and the process continues until all elements are processed, yielding a final sum of 15.

console.log(sum); //15

//reduce(callbackFn)
// reduce(callbackFn, initialValue)
//callbackFn - A function to execute for each element in the array. . Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn.

arr1 = [10, 12, 14, 16, 18];

const sum1 = arr1.reduce(
  (accumulator, currentValue, currentIndex, arr) => {
    console.log('accumilatir', accumulator);
    console.log('Currenr Value', currentValue);
    // console.log('Currenr Index', currentIndex);
    // console.log('arr', arr);
  }
);

//currentValue represents each element in an array

[15, 16, 17, 18, 19].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  10
);

/* 
accumilator:
first call: 10
2nd: 25
3rd: 41
4th: 58
5th: 76
*/

//............................sort

// To sort the elements in an array without mutating the original array, use toSorted().

let letters = ['s', 'g', 'a', 'f', 'r', 'b'];
console.log(letters.sort()); //[ 'a', 'b', 'f', 'g', 'r', 's' ]

arr1 = [1, 45, 1000, 4245, 543, 33];
console.log(arr1.sort()); //[ 1, 1000, 33, 4245, 45, 543 ]

arr1.sort((a, b) => a - b);
console.log(arr1);
//The arrow function (a, b) => a - b subtracts b from a. If the result is negative, it means a should be placed before b, and if the result is positive, it means b should be placed before a.

//................REVERSE

arr1 = [1, 2, 3, 4];
console.log(arr1.reverse()); //[ 4, 3, 2, 1 ]
//The reverse() method reverses an array in place and returns the same array

//........................ FIND INDEX & FIND LAST INDEX

arr1 = [1, 2, 3, 4, 5, 6];
const isLarger = (el) => el > 3;
console.log(arr1.findIndex(isLarger)); //3
console.log(arr1.findLastIndex(isLarger)); //5

//.........................FLAT

// The flat() method creates a new array

arr1 = [1, 2, 3, 4, [5, 6, [1, 2], 20, 30], 123];

console.log(arr1.flat()); //[ 1, 2, 3, 4, 5, 6, [ 1, 2 ], 20, 30, 123 ]

console.log(arr1.flat(2)); //[1, 2, 3,  4,  5,6, 1, 2, 20, 30, 123]
//default is 1

console.log(arr1.flat(100));

//...........................FLAT MAP

// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1

arr1 = [1, 2, 3, 4, 5, 6];

arr1 = arr1.flatMap((num) =>
  num > 3 ? [num, num + 1] : num
);

console.log(arr1); // [1, 2, 3, 4, 5, 5, 6, 6, 7]

//......................................FOR EACH

arr1 = [1, 2, 3, 4];

arr1.forEach((value, index, array) => {
  array[index] = value + 1;
});

console.log(arr1); //[ 2, 3, 4, 5 ]

//.................................FROM

//The Array.from() method creates a new array from an iterable or array-like object

let str = 'dalila';

console.log(Array.from(str)); //[ 'd', 'a', 'l', 'i', 'l', 'a' ]

//.................................INCLUDES

arr1 = [1, 2, 3];
console.log(arr1.includes(1)); //true

console.log([1, 2, 3, , 4, 5, 6].includes(3, 4)); //false

//first parametar is the element to search for and the second is the index from which to start searching.

//...........................INDEX OF

console.log([1, 2, 3, 4, 5].indexOf(1)); //0
console.log([1, 1, 1, 1].indexOf(1, 2)); //2

//indexOf returns the first index of the given element. first parametar is the element to search for and the second one is the index from which to start searching.

//........................LAST INDEX OF

console.log([1, 2, 3, 1, 2].lastIndexOf(1)); //3
console.log([1, 1, 2, 1, 1].lastIndexOf(1, 2)); //1
//second parametara is the index at which to start searching backwards

//........................Array.isArray

console.log(Array.isArray([1, 2])); //true
console.log(Array.isArray([])); //true

//......................JOIN

//creates and returens a new string

arr1 = [1, 2, 3];
console.log(arr1.join()); //1,2,3
console.log(arr1.join('')); //123
console.log(arr1.join(' ')); //1 2 3

arr1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(arr1.join(';')); //1,2;3,4;5,6

//.........................KEYS

//retrns a new array iterator object

arr1 = [1, 2, 3, 4];
let iterator = arr1.keys();

for (let key of iterator) console.log(key);
//0
//1
//2
//3

for (let key of arr1.keys()) console.log(key);

//.......................................OF

console.log(Array.of(1, 2, 3, 4)); //[ 1, 2, 3, 4 ]

let string = 'dalila';
arr1 = Array.of(string);
console.log(arr1); //[ 'dalila' ]

//..................................POP

arr1 = [1, 2, 3, 4];
console.log(arr1.pop()); //4
console.log(arr1); //[ 1, 2, 3 ]

//.............................PUSH

arr1 = [10, 20, 30];
console.log(arr1.push(40)); //4
console.log(arr1); //[ 10, 20, 30, 40 ]

arr1.push(50, 501, 432, 54);
console.log(arr1); //[10,  20,  30, 40, 50, 501, 432, 54]

//...............................SHIFT

//emoves the first element from an array

arr1 = [10, 20, 30, 40];
console.log(arr1.shift()); //10
console.log(arr1); //[ 20, 30, 40 ]

//........................SLICE

//returns a copy of a portion of an array
//from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.slice(2, 4)); //[ 3, 4 ]
console.log(arr1.slice(-2)); //[ 6, 7 ]
console.log(arr1.slice(2, -1)); //[ 3, 4, 5, 6 ]
console.log(arr1.slice()); //[1, 2, 3, 4, 5, 6, 7]

//......................SOME

//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.

arr1 = [1, 2, 3, 4, 5, 6];

const even = (el) => el % 2 === 0;

console.log(arr1.some(even)); //true

//...........................SPLICE

// changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1.splice(1, 2)); //[ 2, 3 ]
//start at index 1 and get 2 elements

console.log(arr1); //[ 1, 4, 5, 6 ]

arr1 = [1, 3, 4, 5, 6];
arr1.splice(1, 1, 2);
//third parametar is the element that should be insertedd
console.log(arr1); //[ 1, 2, 4, 5, 6 ]

arr1 = [1, 3, 4, 5, 6];
arr1.splice(1, 0, 2);
console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]

//splice(start, deleteCount, item0, item1)

arr1 = [1, 4, 5, 6];
arr1.splice(1, 0, 2, 3);
console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]

arr1.splice(arr1.length, 0, 2);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7 ]

//.......................TO STRING

arr1 = [1, 2, 3, 4];
console.log(arr1.toString()); //1,2,3,4

//.......................UNSHIFT

arr1 = [1, 2, 3];
console.log(arr1.unshift(10, 20)); //5
console.log(arr1); //[ 10, 20, 1, 2, 3 ]

// ...............................VALUES

arr1 = [1, 2, 3, 4];

for (let a of arr1.values()) console.log(a);
//1
//2
//3
//4

//........................

arr1 = [1, 2, 3, 4];
console.log(Object.keys(arr1)); // [ '0', '1', '2', '3' ]
console.log(Object.values(arr1)); // [ 1, 2, 3, 4 ]
console.log(Object.entries(arr1)); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ], [ '3', 4 ] ];

// arr1.length = 10;
// console.log(arr1); // [ 1, 2, 3, 4, <6 empty items> ]

arr1.length = 2;
console.log(arr1); // [ 1, 2 ]
// decreasing the length of an array deltes elements

//........................

arr1 = [1, 2, 3, 4, 5];
arr1.copyWithin(0, 1, 3);
console.log(arr1); // [ 2, 3, 3, 4, 5 ]
// mutates the original array

// create a copy of the original array using spread operator or slice() method to chage a mutating method into non-mutating

arr1 = [1, 2, 3, 4, 5];
// arr2 = arr1.slice().copyWithin(0, 1, 3);
arr2 = [...arr1].copyWithin(0, 1, 3);
console.log(arr1); // [ 1, 2, 3, 4, 5 ]

//..........................................

let arrayLike = {
  0: '1',
  1: '2',
  length: 2,
};

console.log(Array.prototype.join.call(arrayLike, ',')); // 1,2

// some array methods can be used on objects that are "array-like," meaning they have numeric properties like indexes and a length property
// many DOM objects are also array-like objects like NodeList or HTMLCollection
// Since array methods are designed to work on arrays, you need to use the .call() or .apply() method to explicitly set the this value within the array method to the object you want to operate on.

console.log(Array.prototype.slice.call(arrayLike)); // [ '1', '2' ]
console.log(Array.prototype.slice.call(arrayLike, 1)); // [ '2' ]

//................................

function f() {
  console.log(Array.prototype.join.call(arguments, '+'));
  console.log(arguments); // [Arguments] { '0': 'a', '1': 'b' }
  console.log(arguments[0]); // a
}

f('a', 'b'); // 'a+b'

function sumNum() {
  return Object.values(arguments).reduce(
    (acc, curr) => acc + curr
  );
}

console.log(sumNum(8, 3)); // 11
console.log(sumNum(8, 2, 2, 4)); // 16

// argument is also array-like object accessible inside functions and contains values of arguments that are passed in
// arguments object is not avaivable in arrow functions

//.....................................

console.log(new Array(1, 2, 3)); // [ 1, 2, 3 ]
console.log(Array(1, 2, 3)); // [ 1, 2, 3 ]
