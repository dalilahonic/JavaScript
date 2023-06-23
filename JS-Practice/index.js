function getVowels(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  counter = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (str.includes(vowels[i])) {
      counter++;
    }
  }
  console.log(counter);
}

getVowels('sky');
getVowels('Eunoia');

//......................................

let array = [
    [67, 12, 89, 45, 23, 56, 34, 78, 90, 10],
    [32, 56, 87, 98, 21, 43, 65, 76, 54, 31],
    [89, 32, 76, 54, 78, 90, 43, 12, 67, 21],
  ];
  
  for (let i = 0, j = 0; i < array.length; j++) {
    console.log(array[i][j], 'arr');
    // 🥰😍
    if (j === array[i].length - 1) {
      i++;
      j = -1;
    }
  }

  //...........

  // function howManyGoals(arr) {
  //   let playersWhoScored = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (!playersWhoScored.includes(arr[i])) {
  //       playersWhoScored.push(arr[i]);
  //     }
  //   }
  //   console.log(playersWhoScored);
  // }
  // console.log(howManyGoals([12,23,32,423,5,3,12]));

  //...............................................................

  
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const biggest = [0, 0, 0];

let indexOf = 0;

for (let i = 0; i < arr.length; i++) {
  for (let x = 0; x < biggest.length; x++) {
      if (arr[i] > smallestNumber(biggest) && !biggest.includes(arr[i])) {
          indexOf = biggest.indexOf(smallestNumber(biggest));
      biggest[indexOf] = arr[i];
    }
  }

  //   smallestNumber(biggest);
}

console.log(biggest);

// ................................................

// let array = [545, 43, 54, 123, 55, 2, 54,212];

function smallestNumber(arr) {
  let smallestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallestNum) {
          smallestNum = arr[i];
        }
    }
    
    // console.log(smallestNum, 'ovo je najamnji borj');
    return smallestNum;
}
// smallestNumber(array)

// let arare = [1, 2, 3, 4];

// let rezultat = 2;

// console.log(arr.indexOf(rezultat));

//................................................