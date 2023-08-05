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
            <p class="country__row"><span>${
              data.currencies.EUR.name
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

const getCountryAndNeighbour = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      // ,(err) => alert(err)
      console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found 🍟🍟🍟`);
      }
      // the effect of creating and throwing an error is that the promise will immediatly reject.
      // this will automaticlly return a rejected promise
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      return fetch(
        `https://restcountries.com/v3.1/alpha/${neighbour}`
      );
    })
    .then(
      (response) => response.json()
      // ,(err) => alert(err)
    )
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch((err) => {
      console.log(`this is an error ${err} 🍟`);
      renderError(
        `Something went wrong ${err.message} 🍟🍟🍟`
      );
      // err is an object. and every err object that was created like this contains message property.

      // we can handle all the errors no matter where they appear in the chain at the end of the chain by using catch method
    })
    .finally(() => {
      console.log('🍟🍟🍟');
    });
  // the callback function that we define in the finally method will always be called no matter what happens with the promise
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

    console.log(data.quotes); // this will not execute
  })
  .catch((err) => console.log(err));
