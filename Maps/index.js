const restaurant = new Map();

restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Italy');
restaurant.set(2, 'Frane');

console.log(restaurant); //Map(3) { 'name' => 'Classico Italiano', 1 => 'Italy', 2 => 'Frane' }

restaurant
  .set('categories', ['Italian', 'Mexican', 'Chinese', 'Indian', 'Seafood'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are open');

console.log(restaurant.get('categories')); //[ 'Italian', 'Mexican', 'Chinese', 'Indian', 'Seafood' ]
console.log(restaurant.get(true)); //We are open

let time = 21;

console.log(
  restaurant.get(
    time > restaurant.get('open') && time < restaurant.get('closed')
  )
);  //We are open
//It checks if the current time is both greater than the opening time and less than the closing time of the restaurant. If both conditions are true, the whole expression evaluates to true. and then it says restaurant.get(true) and the result is 'we are open'.

console.log(restaurant.has('categories')); //true
//similar to includes

restaurant.delete(2);
console.log(restaurant);
//deleting the element at the index of 2

console.log(restaurant.size); //7
//similar to length

// restaurant.clear();
//deleting all elements from the map

let nums = [1, 2, 3, 4];
restaurant.set(nums, 'array');
console.log(restaurant);
//Map(8) {
  // 'name' => 'Classico Italiano',
  // 1 => 'Italy',
  // 'categories' => [ 'Italian', 'Mexican', 'Chinese', 'Indian', 'Seafood' ],
  // 'open' => 11,
  // 'closed' => 23,
  // true => 'We are open',
//   false => 'We are open',
//   [ 1, 2, 3, 4 ] => 'array'
// }
// array
console.log(restaurant.get(nums)); //array

// let body = document.querySelector('body');
// console.log(restaurant.set(body, 'Body Element'));
// console.log(restaurant);

//..........................

const question = new Map([
  ['question', 'What is the best programming language? '],
  [1, 'Python'],
  [2, 'C'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(question);
//the same array structure that is returned from calling Object.entries.

openingHours = {
  mon: {
    open: 10,
    close: 22,
  },
  tue: {
    open: 6,
    close: 23,
  },
  wed: {
    open: 7,
    close: 21,
  },
};

//converting objects to Maps
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
//Map(3) {
//   'mon' => { open: 10, close: 22 },
//   'tue' => { open: 6, close: 23 },
//   'wed' => { open: 7, close: 21 }
// }

for (let [key, value] of question) {
  console.log(key, value);
}

for(let [key, value] of question) {
    if(typeof key === 'number') console.log(key, value);
}

console.log(question.get('question'));
for (let [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//What is the best programming language?
// Answer 1: Python
// Answer 2: C
// Answer 3: JavaScript

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer))

//convert map to array
console.log([...question]);

console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

//objects
//more traditional key/value store ("abused" objects)
//easier to write and access values with . and []
//use when you need to include functions (methods)
//use when working with JSON

//maps
//better performance
//keys can have any data type
//easier to iterate
//easy to compute size
//use when simply need to map keys to values
// use when you need keys that are not strings