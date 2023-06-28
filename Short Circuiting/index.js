console.log(3 || 'Dalila'); //3 is true
console.log('' || 'Dalila'); // '' is a falsy value
console.log(true || 0);
console.log(undefined || null); // undefined is a falsy value
console.log(undefined || 0 || '' || 'Hello' || null); // 'Hello' is a first truthy value

console.log(0 || undefined || null); // null
//all values are falsy so the last one will be written

//empty string, 0, undefined, null, NaN, false: are falsy falues and they return false

let newArr = ['', 'smth', 'yes', '', 0, undefined];

for (let i = 0; i < newArr.length; i++) {
  if (newArr[i]) {
    console.log(newArr[i]);
  }
} 
//smth
// yes

const restaurant = {
  menu: ['pizza', 'pasta', 'risotto'],
}

restaurant.numGuest = 23;

const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1); //23
//if restaurant.numGuest is 0, '', or undefined that the guest1 is 10

const guest2 = restaurant.numGuest || 10;
console.log(guest2); //23
//if restaurant.numGuest is falsy 10 will be written

// ...........................AND...................

console.log(0 && 'Jonas'); //0
//the fist value that is falsy will be written in the console
console.log(7 && 'Dalila'); //Dalila
//both are truthy which means that the last value will be written

console.log('Hello' && 23 && null && 'jonas'); //null