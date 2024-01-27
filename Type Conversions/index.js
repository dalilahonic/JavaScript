// String conversion

let value = false;
value = String(value);
console.log(value, typeof value); // false string

// Numeric conversion

console.log('2' * '4'); // 8 number
let num = '123';
num = Number(num);
console.log(num, typeof num); // 123 number

let num1 = 'sting';
num1 = Number(num1);
console.log(num1, typeof num1); //NaN number

//Numeric conversion rules:
// undefined becomes	NaN
// null becomes	0
// true and false	become 1 and 0

let val = undefined;
val = Number(val);
console.log(val, typeof val); // NaN number

let val1 = null;
val1 = Number(val1);
console.log(val1, typeof val1); // 0 number

// Boolean conversion

// falsy values like 0, empty string, null, undefined, NaN become false. Other values become true.

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(' ')); // true
console.log(Boolean('')); // false

// String concatenation with binary +

console.log(3 + '3'); // 33 (string)
console.log(2 + 2 + '1'); // 41 (string)
console.log('1' + 2 + 2); // 122

// + is the only operator that can transform numbers into strings. other arithmetic operators always convert their operands to numbers

console.log(4 - '2'); // 2 (number)
