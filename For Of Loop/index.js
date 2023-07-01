const meals = [
    "Spaghetti Bolognese",
    "Chicken Stir-Fry",
    "Grilled Salmon with Lemon and Dill",
    "Beef Tacos",
    "Vegetable Curry",
    "Caesar Salad with Grilled Chicken",
    "Mushroom Risotto",
    "Hawaiian Pizza",
    "BBQ Ribs with Coleslaw",
    "Shrimp Scampi Pasta"
  ];

for(const meal of meals) console.log(meal);

for (const meal of meals.entries()) console.log(meal); //indexes and values

//first letters
for(const meal of meals) {
    console.log( `${meal[0]}`);
}

// the entries() method is used to retrieve an iterator object that contains key-value pairs for each element in an array-like object. The key-value pairs are represented as arrays, where the first element of the array is the key (index) and the second element is the value.
for(const meal of meals.entries()) {
    console.log(meal[0]); //indexes
    console.log( meal[1]); //values
}

for(const meal of meals.entries()) {
    console.log(`${meal[0] + 1}: ${meal[1]}`);
} 

//destructuring
for(const [i, j] of meals.entries()) {
    console.log(`${i + 1}: ${j}`);
} 