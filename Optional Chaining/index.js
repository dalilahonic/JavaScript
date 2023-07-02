const restaurant = {
  openingHours: {
    tue: {
      open: 12,
      close: 22,
    },
    wed: {
      open: 11,
      close: 23,
    },
    sat: {
      daLi: true,
    },
  },
};

const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours && restaurant.openingHours.mon.open)
  // console.log(restaurant.openingHours.mon.open); this creates error
}

//with optional chaining
//only if the property that is before ? exists (not null or undefined) then this 'open' property is read
console.log(restaurant.openingHours.mon?.open , 'this tho'); //undefined
console.log(restaurant.openingHours?.mon?.open); //undefined

/*
this doesn't work:
console.log(restaurant.openingHours[wed]);
console.log(restaurant.openingHours[2]);
*/

console.log(restaurant.openingHours[daysOfTheWeek[2]]); //{ open: 11, close: 23 } 
console.log(restaurant.openingHours['wed']); //{ open: 11, close: 23 }

//It's important to note that the use of brackets ([]) instead of dot notation (.) allows you to dynamically access properties using a variable or an expression as the property key. In this case, the value obtained from daysOfTheWeek[2] is used as the property key.
//If you have a fixed property name like 'wed', using dot notation restaurant.openingHours.wed is the preferred and more readable way to access the property. The bracket notation is typically used when you need to access properties dynamically, such as when using a variable or an expression to determine the property name.

for (let day of daysOfTheWeek) {
  let open = restaurant.openingHours[day]?.open ?? '7: 00';
  // 7:00 is a default value. 
  console.log(`on a ${day} we open at ${open} and close at ${restaurant.openingHours[day]?.close ?? '22: 00'}`);
} 