// const promise = new Promise((resolve, reject) => {
//   resolve('resolved promise');
// });

// console.log(promise); // Promise { 'resolved promise' }

// promise.then((response) => console.log(response)); // resolved promise

// const promise2 = new Promise((resolve, reject) => {
//   reject('rejected promise');
// });

// promise2
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err)); // rejected promise

// const promise3 = new Promise((resolve, reject) => {
//   resolve('new resolved promise');
//   reject('new rejected promise');
// });

// promise3
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));
// // new resolved promise

// const promise4 = new Promise((resolve, reject) => {
//   reject('new rejected');
// });

// promise4.then((response) => console.log(response)); // Uncaught (in promise) new rejected
// promise4.catch((err) => console.log(err)); //new rejected

// promise4
//   .then(() => console.log(`this won't log to the console`))
//   .catch(() => console.log('this will')); // this will

// const promise5 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('string'), 2000);
// });

// promise5.then((response) => console.log(response)); // string

//.............................

// fetch('https://dummyjson.com/users')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));

// fetch('https://jsonplaceholfdsdfsder.typicode.com/u')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message))
//   .finally(() =>
//     console.log(
//       'this will be logged regardless of whether the promise is resolved or rejected'
//     )
//   );

//.........................................

// const response = fetch(
//   'https://jsonplaceholder.typicode.com/users'
// ).then((res) => res);

// async function getData() {
//   const data = await response;
//   console.log(1);
//   console.log(data);
//   console.log(2);
// }

// getData(); // 1 response 2

// async function getData2() {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/users'
//   );

//   const data = await response.json();
//   console.log(data);

//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// getData2();

// async function getData3() {
//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/users'
//     );

//     if (!response) {
//       throw new Error(
//         'something went wrong, please try again'
//       );
//     }

//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }

// // getData3();

// const newPromise = getData3();

// newPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//.........................................

