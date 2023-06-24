const restaurant = {
  nameOf: 'the name of the restaurant',
  location: 'Novi Pazar',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprse Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    mon: {
      open: 12,
      close: 22,
    },
    tue: {
      open: 11,
      close: 23,
    },
    wed: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // [ 2, 3, 4 ]

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary); //Vegetarian Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); //Italian Vegetarian

console.log(restaurant.order(3, 2)); //[ 'Caprse Salad', 'Risotto' ]

let [starterCourse, mainCourse] = restaurant.order(3, 2);
console.log(starterCourse, mainCourse); //Caprse Salad Risotto

const nested = [23, 48, [3, 4]];
console.log(nested);

let [i, , j] = nested;
console.log(i, j); //23 [ 3, 4 ]

let [t, , [u, o]] = nested;
console.log(t, u, o); //23 3 4

const [f = 1, s = 1, d = 1] = [8, 9];
console.log(f, s, d); //8 9 1

//..............................objects
console.log('..............objects................');

const { nameOf, openingHours, categories } = restaurant;
console.log(nameOf, openingHours, categories);
// the name of the restaurant {
//   mon: { open: 12, close: 22 },
//   tue: { open: 11, close: 23 },
//   wed: { open: 0, close: 24 }
// } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

const {
  nameOf: nameOfTheRestaurant,
  openingHours: hoursOpened,
  categories: tags,
} = restaurant;
console.log(nameOfTheRestaurant, hoursOpened, tags);

const {
  menu = [],
  starterMenu: starters = [],
  mainMenu: mains = [0],
} = restaurant;
console.log(menu, starters, mains);

let g = 1636;
let h = 999;
let newObject = { g: 23, h: 7, c: 14 };
({ g, h } = newObject);
console.log(g, h); //23 7

const { mon } = openingHours;
console.log(mon); // {open: 12, close: 22 }
const {
  mon: { open, close },
} = openingHours;
console.log(open, close); //12 22

const {
  tue: { open: openedHours, close: closedHours },
} = openingHours;
console.log(openedHours, closedHours); //11 23

restaurant.orderDelivery({
  time: '22: 30',
  address: 'Novi Pazar',
  mainIndex: 2,
  starterIndex: 2,
});
//Order recived! Garlic Bread and Risotto will be delivered to Novi Pazar at 22: 30

restaurant.orderDelivery({
  starterIndex: 2,
  adress: 'Pazar',
  time: '21:00',
});
//Order recived! Garlic Bread and Pizza will be delivered to undefined at 21:00
