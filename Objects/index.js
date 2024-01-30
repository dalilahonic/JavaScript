// let user = new Object(); // "object constructor" syntax
// let user1 = {}; // "object literal" syntax

// let user2 = {
//   firstName: 'Dalila',
//   lastName: 'Honic',
//   'middle Name': 'xx',
//   // multiword property name must be quoted
// };

// console.log(user2['middle Name']);
// accessing multiword properties. this is called square bracket notation. there is also dot notation

// delete user2.lastName;
// deletes lastName property

// computed properties

// let firstName = prompt('Enter your name');

// let obj = {
//   [firstName]: 12,
// };

// We can use more complex expressions inside square brackets:

// let obj = {
//   [firstName + ' age']: 5,
// };

// square brackets allow any property names and values

// console.log('firstName' in user2); // true
// checking if the property exists

// For in loop

// for (let key in user2) {
//   console.log(key);
//   // firstName
//   // middle Name

//   console.log(user2[key]);
//   // Dalila
//   // xx
// }

// Object.assign

// let user = { firstName: 'Dalila' };
// let lastName = { lastName: 'Honic' };
// let age = { age: 19 };

// Object.assign(user, lastName, age);
// if the copied propery name already exists, it gets overwritten

// structuredClone

let user = {
  firsName: 'Dalila',
  obj: {
    age: 19,
  },
};

let user2 = Object.assign({}, user);
console.log(user.obj === user2.obj); // true, beacuse they share the same reference

let clone = structuredClone(user);
console.log(user.obj === clone.obj); // false, they are different objects
// user and clone are not releted now
// structuredClone method can clone most data types such as objects, arrays, primitives, values

// case where structuredClone fails. for example when an object has a function property

// let obj = structuredClone({
//   f: function () {},
// });

// Constructor function

// named with capital letter first
// can be executed only with 'new' operator

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let userX = new User('Dalila');
// let userY = new User('Jack');

// wehn a function is executed with 'new' a new empty object is created and assigned to this. then the function body executes and then the value of this is returned.
// any arrow function (except for arrow functions) can be used as a constructor. It can be run with 'new'.

// new.target

// function User() {
//   console.log(new.target);
//   // if it was called with 'new', new.target will return that function and if it is a regular call it will return undefined
// }

// User(); // undefined
// new User(); // [Function: User]

// function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }

//   this.name = name;
// }
// this approach is sometimes used in libraries to make the syntax more flexible.

// return from constructors

// constructors usually do not have a return statement. if there ia a return statement: if the return is called with an object then that object is returned instead of this; if return is called with a primitive it is ignored

// Optional chaining with functions and square bracket notation

// ?.() is used to call a function that might not exist.

// let userAdmin = {
//   admin() {
//     console.log('I am admin');
//   },
// };

// userAdmin.admin?.(); // I am admin
// userAdmin.newFn?.(); // not called

// let prop = 'firstName';

// let userXX = {
//   firstName: 'Dalila',
// };

// let userXY = null;

// console.log(userXX?.[prop]); // Dalila
// // console.log(userXY[prop]); // this gives an error
// console.log(userXY?.[prop]); // undefined

// we can use ?. for reading and deleting but not writing
// let userX = {
//   firsName: 'John'
// };
// userX?.firsName = 'Dalila'; // SyntaxError: Invalid left-hand side in assignment
