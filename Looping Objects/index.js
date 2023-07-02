openingHours = {
    mon: {
        open: 10,
        close:10
    },
    tue: {
        open: 6,
        close: 12
    },
    wed: {
        open: 7, 
        close: 11
    }
}

//GETTING PROPERTY KEYS
const properties = Object.keys(openingHours);
console.log(properties); //['mon', 'tue', 'wed']
let openStr = `We are open on ${properties.length} days: `
console.log(openStr); //We are open on 3 days: 

for(let day of Object.keys(openingHours)) {
    console.log(day);
    openStr += ` ${day}, `
}

console.log(openStr); //We are open on 3 days:  mon,  tue,  wed, 

//GETTING PROPERTY VALUES

const values = Object.values(openingHours);
console.log(values);
/* 
{ open: 10, close: 10 },
{ open: 6, close: 12 },
{ open: 7, close: 11 }
*/

//GETTING ENTRIES (PROPERTIES AND VALUES)

let entries = Object.entries(openingHours);
console.log(entries);
/*
  [ 'mon', { open: 10, close: 10 } ],
  [ 'tue', { open: 6, close: 12 } ],
  [ 'wed', { open: 7, close: 11 } ]
  */

for (const i of entries) {
    console.log(i); 
    // array with 2 elements. first one is the key (mon, tue, wed) and the second one is the value.
}

for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
    //destructuring each entry into the key and the inner object containing open and close properties.
}