//.................The nullish coalescing operator..................
const restaurant = {
  menu: ['pizza', 'pasta', 'risotto'],
}

restaurant.numberOfGuests = 0; 
let guest3 = restaurant.numberOfGuests ?? 10; //if numberOfGuests is null or undefined then guest3 wil be 10
console.log(guest3); //0
//Nullish values are null and undefined

//The ?? operator is used to provide a default value when the left-hand side of the operator evaluates to null or undefined. If the left-hand side is null or undefined, the expression evaluates to the right-hand side. Otherwise, if the left-hand side has any other value (including falsy values like 0), the expression evaluates to the left-hand side value.

const rest1 = {
  nameOf: 'Dalila',
  numOfGuests: 23,
}

const rest2 = {
  nameOf: 'Honic',
  foundedIn: 2011,
}

/*
rest1.numOfGuests = rest1.numOfGuests || 10;
rest2.numOfGuests = rest2.numOfGuests || 10;

rest1.numOfGuests ||=  10;
rest2.numOfGuests ||= 10;
*/

//??= (nullish coalescing assignment operator):
// The ??= operator combines the nullish coalescing operator (??) with the assignment operator (=). It assigns the right-hand side value to the left-hand side only if the left-hand side is null or undefined. If the left-hand side already has a value (including falsy values), the assignment does not occur.

console.log(rest1.numOfGuests, rest2.numOfGuests); //23 undefined
console.log(rest1.foundedIn, rest2.foundedIn); //undefined 2011

//nullish assignment operator. null or undefined.
rest1.numOfGuests ??=  10; //the result will be 23 because there is already a property numGuests in rest1 
rest2.numOfGuests ??= 10; // the result will be 10 beacuse there is no property numGuests in rest2. beacuse it returns undefined

//assinging a value to a variable that is already defied
// &&= operator is called the logical nullish assignment operator. It combines the logical AND operator (&&) with the assignment operator (=) to conditionally assign a value to a variable or object property when the existing value is nullish (null or undefined).

rest1.foundedIn &&= 2023; //there is no property foundedIn rest1 so this wont write anything
rest2.foundedIn &&= 2023; //there is foundedIn propery with a value of 2011 but the result will be 2023

console.log(rest1);
console.log(rest2);

//...................