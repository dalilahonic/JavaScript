const mealsSet = new Set([
  'Pizza',
  'Risotto',
  'Pizza',
  'Pasta',
  'Risotto',
  'Pizza',
]);
//to create a new set we need to write 'new Set' and pass in an iterable.

console.log(mealsSet); //Set(3) { 'Pizza', 'Risotto', 'Pasta' }

//sets are iterables. and the order of elements in a set is irrelevant.

console.log(new Set('Dalila')); //Set(4) { 'D', 'a', 'l', 'i' }

console.log(mealsSet.size); //3
console.log(mealsSet.has('Pasta')); //true
console.log(mealsSet.has('Eggs')); //false
mealsSet.add('Spaghetti Bolognese');
mealsSet.delete('Pizza');
console.log(mealsSet); //Set(3) { 'Risotto', 'Pasta', 'Spaghetti Bolognese' }

//there are no inedxes in sets and there is no way of getting values out of a set.

for(const meal of mealsSet) console.log(meal);
/*
Risotto
Pasta
Spaghetti Bolognese
*/

mealsSet.clear(); //deletes all elements of the set
console.log(mealsSet); //Set(0) {}

//REMOVING DUPLICATE VALUES FROM AN ARRAY

const arr = ['Sunny', 'Cloudy', 'Rainy', 'Sunny', 'Windy', 'Rainy'];

const setUnique = new Set(arr);
console.log(setUnique);  //Set(4) { 'Sunny', 'Cloudy', 'Rainy', 'Windy' }

const arrUnique = [...setUnique];
console.log(arrUnique); // [ 'Sunny', 'Cloudy', 'Rainy', 'Windy' ]
console.log(Array.isArray(arrUnique)); //true

// if we just needed a number of unique values
let arrNumOfUniqueElements = new Set(arr).size; 
console.log(arrNumOfUniqueElements); //4 

//counting how many different letters are in the string

console.log(new Set('dalilahonic')); //Set(8) { 'd', 'a', 'l', 'i', 'h', 'o', 'n', 'c' }

//use arrays when you need ordered list values (might contain duplicates).
//use when you need to manipulate data

//sets
//use when you need to work with unique values
//use when high-performance is really important
//use to remove duplicates from arrays