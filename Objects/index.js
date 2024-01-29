let user = new Object(); // "object constructor" syntax
let user1 = {}; // "object literal" syntax

let user2 = {
  firstName: 'Dalila',
  lastName: 'Honic',
  'middle Name': 'xx',
  // multiword property name must be quoted
};

console.log(user2['middle Name']);
// accessing multiword properties. this is called square bracket notation. there is also dot notation

delete user2.lastName;
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