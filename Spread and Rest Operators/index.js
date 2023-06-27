let arr = [2, 5, 7];
let badNewArr = [12, 43, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[ 12, 43, 2, 5, 7 ]

let goodNewArr = [12, 43, ...arr];
console.log(goodNewArr); //[ 12, 43, 2, 5, 7 ]
//The spread operator ...arr is used to expand the elements of the arr array into individual elements.
//The spread operator is versatile and can be used not only when creating arrays but also when passing arguments to functions or merging arrays.

console.log(...arr); //2 5 7

const restaurant = {
  menu: ['pizza', 'pasta', 'risotto'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprse Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  orderingPasta: function (ing1, ing2, ing3) {
    console.log(
      `This is a pasta with ${restaurant.orderingPasta.length} ingridiants: ${ing1}, ${ing2}, ${ing3}`
    );
  },
  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    sat: {
      open: 11,
      close: 23,
    },
    sun: {
      open: 0,
      close: 24,
    },
  },

  orderPizza: function (mainIng, ...optionalIngs) {
    console.log(mainIng);
    console.log(optionalIngs);
    console.log(
      `glavni sastojak je ${mainIng} a ostali sastojci su ${optionalIngs}`
    );
  },
};

console.log(restaurant.menu); //[ 'pizza', 'pasta', 'risotto' ]

const newMenu = [...restaurant.menu, 'another meal'];
//making a new array with restaurant.menu array and adding a new element to new array
console.log(newMenu); //[ 'pizza', 'pasta', 'risotto', 'another meal' ]

const new_menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; 
//merging 2 arrays
console.log(new_menu); //['Focaccia','Bruschetta','Garlic Bread','Caprse Salad', 'Pizza','Pasta','Risotto']

let str = 'this is a sentence';
let letters = [...str, ' ', 'd', 'a'];
//spread operator can also be used on strings. here we use the spread operator to get every letter of str variable and we are adding two new letters
console.log(letters);
console.log(...str); //t h i s   i s   a   s e n t e n c e

console.log(restaurant.orderingPasta.length); //3

const ingredients = [
  // prompt('1'),
  // prompt('2'),
  // prompt('3'),
];

console.log(ingredients);

restaurant.orderingPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderingPasta(...ingredients);

const newRestaurant = {
  foundedIn: 2005,
  ...restaurant,
  founder: 'Dalila Honic',
};
console.log(newRestaurant);

// spread operator enables the expansion of iterables like arrays or strings in situations where zero or more arguments are required for function calls, or where elements are expected for array literals.

//........................................REST OPERATOR..........

//SPREAD because on the right side of =
const newArr = [1, 2, ...[3, 4]];

//REST, because on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];

//Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

console.log(newArr); //[ 1, 2, 3, 4 ]
console.log(a, b, others); //1 2 [ 3, 4, 5 ]

const [pizza, , , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); //Pizza Focaccia [ 'Bruschetta', 'Garlic Bread', 'Caprse Salad' ]

const { mon, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //{ sat: { open: 11, close: 23 }, sun: { open: 0, close: 24 } }

//..................

function add(...numbers) {
  let addingUp = 0;
  // console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    addingUp += numbers[i];
  }
  console.log(addingUp);
}

add(3, 43, 432, 43, 5); //526

const x = [2, 4, 5]; 
add(...x); //11

//this function can take arrays and single values

restaurant.orderPizza('1', '2', '3', '5');

//.................................

// function sum(...numbers) {
// console.log(numbers);
// }

// sum(2, 3, 4, 5, 'sum function'); // [ 2, 3, 4, 5, 'sum function' ]

function sum(...numbers) {
  let sumNum = 0; // we have to initialize sumNum to 0. we cannot write let sumNum; only
  for (let i = 0; i < numbers.length; i++) {
    sumNum += numbers[i];
  }
  console.log(sumNum);
}

sum(2, 3, 4, 5); //14
