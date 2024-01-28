// Comparisons

let result = 5 > 3;
console.log(result); //true

// Compareson of different types

console.log('2' > 1); // true
console.log('0' == 0); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log('' == false); // true

console.log('2' > '12'); // true
// dictionary comparison, first char "2" is greater than the first char "1"

console.log('0' === 0); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

// Null vs 0

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

// Comparisons convert null to a number, treating it as 0. Equality check for undefined and null is defined such that they equal each other and don't equal anything else.

// Incomparable undefined

console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false

// Comparisons convert undefined to a number (NaN). The equality check returns false beacuse undefined only equals null;

// Logical operators

// there are 4 logical operators in JavaScript: OR, AND , NOT, Nullish Coalescing

// OR returns first truty value or if all values are falsy it returns the last one
// AND returns first falsy value or if all values are truthy it returns the last one
// NOT converts the operand to boolean type and returns the inverse value

console.log(!!'string'); // true
// double NOT is sometimes used for converting a value to a boolean type

// alert( alert(1) || 2 || alert(3) );
// shows the alert window with 1 and then with 2. this is beacuse alert(1) does not return any value or it returns undefined.

// Nullish coalescing orperator ??

// ?? returns the first argument that is not null or undefined, otherwise the second one.

let a = null;
let b = undefined;
console.log(a ?? a ?? b); // undefined
console.log(a ?? 5); // 5
console.log(4 ?? 3); // 4

let c = a ?? 5;
console.log(c); // 5

// JavaScript forbids using ?? together with && and || operators
// let x = 1 && 2 ?? 3; // Syntax error

let x = (1 && 2) ?? 3;
console.log(x); // 2
// we can use parentheses to work around this
