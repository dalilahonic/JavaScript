'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer =
  document.querySelector('.countries');

// AJAX calls

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}`
  );
  let data = request.send();

  request.addEventListener('load', () => {
    //   console.log(request.responseText);

    const [data] = JSON.parse(request.responseText);
    //   const data = JSON.parse(request.responseText)[0];
    console.log(data);

    const html = `
<article class="country">
          <img class="country__img" src="${
            data.flags.png
          }" />
          <div class="country__data">
            <h3 class="country__name">${
              data.name.common
            }</h3>
            <h4 class="country__region">${data.region}</h4>
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

    countriesContainer.insertAdjacentHTML(
      'beforeend',
      html
    );

    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('deutschland');
getCountryData('croatia');
getCountryData('france');

// let objeakat = {
//   sd: 'dssd',
//   dsfsdf: 'fdsffffffff',
// };

// console.log(Object.values(objeakat));
