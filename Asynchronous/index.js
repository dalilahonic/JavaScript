'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer =
  document.querySelector('.countries');

// AJAX calls

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open(
//     'GET',
//     `https://restcountries.com/v3.1/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', () => {
//     //   console.log(request.responseText);

//     const [data] = JSON.parse(request.responseText);
//     //   const data = JSON.parse(request.responseText)[0];
//     console.log(data);

//     const html = `
// <article class="country">
//           <img class="country__img" src="${
//             data.flags.png
//           }" />
//           <div class="country__data">
//             <h3 class="country__name">${
//               data.name.common
//             }</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1_000_000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span> ${
//               Object.values(data.languages)[0]
//             }</span> LANG</p>
//             <p class="country__row"><span>${
//               data.currencies.EUR.name
//             }</span> CUR</p>
//             </div>
//             </article>
//         `;
//     //   console.log(html);

//     countriesContainer.insertAdjacentHTML(
//       'beforeend',
//       html
//     );

//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('deutschland');
// getCountryData('croatia');
// getCountryData('france');

// let objeakat = {
//   sd: 'dssd',
//   dsfsdf: 'fdsffffffff',
// };

// console.log(Object.values(objeakat));

const renderCountry = function (data, className = '') {
  const currency = Object.keys(data.currencies)[0];

  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
            <h3 class="country__name">${
              data.name.common
            }</h3>
              <h4 class="country__region">${
                data.region
              }</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1_000_000
              ).toFixed(1)} people</p>
                <p class="country__row"><span> ${
                  Object.values(data.languages)[0]
                }</span> LANG</p>
            <p class="country__row"><span>$${
              data.currencies[currency].name
            }</span> CUR</p>
            </div>
            </article>
            `;
  //   console.log(html);

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();

//   request.open(
//     'GET',
//     `https://restcountries.com/v3.1/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', () => {
//     const [data] = JSON.parse(request.responseText);
//     //   console.log(data);

//     renderCountry(data);

//     // Get neighbour country

//     const neighbour = data.borders?.[0];
//     // const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX CALL 2

//     const request2 = new XMLHttpRequest();

//     request2.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${neighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', () => {
//       //   const data2 = JSON.parse(request2.responseText)[0];
//       const [data2] = JSON.parse(request2.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('france');
// getCountryAndNeighbour('italy');

// callback hell: nested callback functions

//.........................................

// Promises and fetch

const request = fetch(
  'https://restcountries.com/v3.1/name/spain'
);
// console.log(request); // returns a promise

// on all promises we can call a then method. into the then method we need to pass in the callback function that we want to be excecuted as soon as the promise is fulfilled so as soon as the result is avaivable. and that that function will recive one argument once it is called and that argument is the resulting value of a fulfilled promise.

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//       // json is the method that is avaivable on all response objects that are coming from fetch function.
//       // response.json() returns a new promise
//     })
//     .then(function (data) {
//       // console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};

// getCountryData('spain');

// const getCountryAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       // AJAX CALL 2

//       return fetch(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`
//       );

//       // then method always returns a promise no matter if we actually return anything or not but if we do return a value that value will become the fullfilment value of the returned promise.

//       //   return 23;
//       // })
//       // .then((data) => console.log(data)); // 23

//       // by returning the promise above the returned value of the next then method will be the fulfilled value of this previous promise.
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0], 'neighbour'));
// };
// always return a promise and then handle it outside

// getCountryAndNeighbour('italy');

//...........................

// handling rejected promises

// a promise in which an error happend is rejected promise

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       // ,(err) => alert(err)
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found 🍟🍟🍟`);
//       }
//       // the effect of creating and throwing an error is that the promise will immediatly reject.
//       // this will automaticlly return a rejected promise
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;

//       return fetch(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`
//       );
//     })
//     .then(
//       (response) => response.json()
//       // ,(err) => alert(err)
//     )
//     .then((data) => renderCountry(data[0], 'neighbour'))
//     .catch((err) => {
//       console.log(`this is an error ${err} 🍟`);
//       renderError(
//         `Something went wrong ${err.message} 🍟🍟🍟`
//       );
//       // err is an object. and every err object that was created like this contains message property.

//       // we can handle all the errors no matter where they appear in the chain at the end of the chain by using catch method
//     })
//     .finally(() => {
//       console.log('🍟🍟🍟');
//     });
//   // the callback function that we define in the finally method will always be called no matter what happens with the promise
// };

// btn.addEventListener('click', () => {
//   getCountryAndNeighbour('greece');
//   getCountryAndNeighbour('das');
// });

const getJSON = function (
  url,
  errorMsg = 'something went wrong'
) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} `);
    }
    return response.json();
  });
};

const getCountryAndNeighbour = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country not found 🍟🍟🍟`
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) throw new Error('No neighbour found');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'country not found'
      ).then((data) => renderCountry(data[0], 'neighbour'));
    })
    .catch((err) => {
      console.log(`this is an error ${err} 🍟`);
      renderError(
        `Something went wrong ${err.message} 🍟🍟🍟`
      );
    })
    .finally(() => {
      console.log('🍟🍟🍟');
    });
};

btn.addEventListener('click', () => {
  getCountryAndNeighbour('greece');
  getCountryAndNeighbour('das');
});

fetch('https://dummyjson.com/quotes')
  .then((response) => response.json())
  .then((data) => {
    if (data.quotes.length > 20)
      throw new Error('too many quotes');

    console.log(data.quotes); // this will not be executed
  })
  .catch((err) => console.log(err));

//..........................................

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

*/

function whereAmI(latitude, longitude) {
  fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      if (!data.country) {
        throw new Error(
          `something went wrong, please reload the page`
        );
      } else {
        console.log(
          `you are in ${data.city}, ${data.country}`
        );
      }

      return fetch(
        `https://restcountries.com/v3.1/name/${data.country}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          renderCountry(data[0]);
        });
    })
    .catch((err) => console.log(err));
}

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
// whereAmI(43.463, 11.961);

// const objekat2 = {
//   currencies: {
//     usd: {
//       name: 'United States dollar',
//     },
//   },
// };

// const currency = Object.keys(objekat2.currencies)[0];
// console.log(currency);

// console.log(objekat2.currencies.currency.name);

//....................................

console.log('test');
setTimeout(() => console.log('0 sec'), 0);
Promise.resolve('resolved promise 1').then((res) =>
  console.log(res)
);

// Promise.resolve('Resolved promise 2').then((res) => {
// for (let i = 0; i < 1000000000; i++) {}
// console.log(res);
// if there is a task like this loop that will take a lot of time to execute the timer above will take longer than 0 sec to execute.
// });

console.log('test 2');

// first two messages that are going to be printed are 'test' and 'test 2' .code that is outside of any callback will run first.

// both the setTimeout function and promise will finish at the same time.
// timer is put on the callback queue. promise will be put on the microtask queue which has priority over the callback queue. so promise will be executed first.

//.................................................................

const lotteryPromise = new Promise(function (
  resolve,
  reject
) {
  console.log('lotter draw is happening');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Win');
    } else {
      // reject('you lost your money');
      reject(new Error('you lost your money'));
    }
  }, 2000);

  // into reject function we pass in an error message
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// resolved value of the promise is going to be the one that we passed in resolve function and the error will the message that we passed in reject function

function wait(secondes) {
  return new Promise(function (resolve) {
    setTimeout(resolve, secondes * 1000);
  });
}

wait(2)
  .then(() => {
    console.log('2 secs');

    return wait(1);
  })
  .then(() => console.log('1  sec'));

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject(new Error('Problem!')).catch((x) =>
  console.log(x)
);

//..................................................

