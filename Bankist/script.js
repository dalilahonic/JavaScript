'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector(
  '.btn--close-modal'
);
const btnsOpenModal = document.querySelectorAll(
  '.btn--show-modal'
);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) =>
  btn.addEventListener('click', openModal)
);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (
    e.key === 'Escape' &&
    !modal.classList.contains('hidden')
  ) {
    closeModal();
  }
});

//......................................................................

// console.log(document.documentElement);
// selecting the entier document of the web page

// console.log(document.head);
// console.log(document.body);
// selecting head and body

// getElementsByTagName and getElementsByClassName returns html collection

// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analyticts'
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it! </button>';

const header = document.querySelector('.header');

// header.prepend(message);
// prepend adds the message element as the first child of header element

header.append(message);
// append adds the message element as the last child of the header element

// we can also use prepend and appennd not only to insert elements but to move them

// header.append(message.cloneNode(true));
// true means that all the child elements will be copied too

// header.before(message);
// insert message before the header element
// header.after(message);
// insert message after header element

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => {
    message.remove();
    // message.parentElement.removeChild(message)
  });
// when we click on the button the div with class 'nessage' gets deleted

//.................................

// Styles

message.style.backgroundColor = '#37384d';
message.style.width = '120%';
// these styles are set as inline styles

// console.log(getComputedStyle(message)); // CSSStyleDeclaration

console.log(getComputedStyle(message).color); //rgb(187, 187, 187)
// we get the real style as it appears on the page even if we don't declare it in our CSS.
console.log(getComputedStyle(message).height); //49px
// height we didn't define ourselves but the browser needed to calculate the height to display it

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) +
  40 +
  'px';

document.documentElement.style.setProperty(
  '--color-primary',
  'orangered'
);

// Atttributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// logo.alt = 'This is a logo';

console.log(logo.src); // http://127.0.0.1:5500/Bankist/img/logo.png
console.log(logo.getAttribute('src')); // img/logo.png

// console.log(logo.setAttribute('src', 'www.google.com'));

// Data attributes
// attributes that start with a word data
console.log(logo.dataset.versionNumber); // 3.0
// we use camel Case where we have the dash in the attribute

// Classes

// logo.classList.add('')
// logo.classList.remove('')
// logo.classList.toggle('')
// // toggle: if the class is set remove it, otherwise add it
// logo.classList.contains('')
// contains: if the specified class exist returns true, otherwise returns false

//......................................................

const btnScrollTo = document.querySelector(
  '.btn--scroll-to'
);
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //   console.log(window.pageXOffset, window.pageYOffset);
  //   //window.pageXOffset: This property represents the number of pixels the document has been scrolled horizontally. A positive value means the content has been scrolled to the right, and a negative value means it has been scrolled to the left.

  //   //window.pageYOffset: This property represents the number of pixels the document has been scrolled vertically. A positive value means the content has been scrolled down, and a negative value means it has been scrolled up.

  //   console.log(document.documentElement.clientHeight);
  //   console.log(document.documentElement.clientWidth);

  //   // The client height is the height of the content area of the browser window. height of the viewport

  // window.scrollTo(s1coords.left, s1coords.top)
  // scrollTo() is the global function that is avilable on the window object
  //  s1coords.top is relative to the viewport not the document

  //   //scrollTo(x-coord, y-coord)
  //   //x-coord is the pixel along the horizontal axis of the element that you want displayed in the upper left.
  // // y-coord is the pixel along the vertical axis of the element that you want displayed in the upper left.

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
  // section1 is the element that we want to scroll to and on that we call scrollIntoView and then we pass in the object and specify behaviour
});

//.......................................

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', () => {
//   console.log('this is mouseenter event');
// })

// h1.onmouseenter = function (e) {
//   console.log('this is a mouseenter event');
// }

// only listen to the event once

const alertH1 = function (e) {
  alert('This is alert');

  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

//................................

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(
//     0,
//     255
//   )}, ${randomInt(0, 255)})`;

// console.log(randomColor());

// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (e) {
//     // in an event handler 'this' keyword points to the element on which that event handler is attached

//     this.style.backgroundColor = randomColor();
//     console.log('lINK', e.target);
//     // console.log(e.currentTarget);
//     // e.currentTarget === this

//     // e.stopPropagation();
//     // parent elements did not change their background colors
//   });

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('nav container', e.target);
//   });

// document
//   .querySelector('.nav')
//   .addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('parent contianer', e.target);
//   });

// all the 3 elements got a random background color but the target element is the same in all 3 handelers and that is the element where the click first happend

//  bubbling travels from the target to the root, and capturing travels from the root to the target.

//.........................
// Page navigation

// document
//   .querySelectorAll('.nav__link')
//   .forEach(function (el) {
//     el.addEventListener('click', function (e) {
//       e.preventDefault();
//       const id = this.getAttribute('href');
//       console.log(id);
//       document
//         .querySelector(id)
//         .scrollIntoView({ behavior: 'smooth' });
//     });
//   });

// Add event listener to common parent element
// Determine what element originated the event

document
  .querySelector('.nav__links')
  .addEventListener('click', function (e) {
    // console.log(e.target);
    // we want to work with the clicks that happend on link elements but the click that happens here on this 'nav__links' element is not relevant

    e.preventDefault();

    // Matching strategy

    if (e.target.classList.contains('nav__link')) {
      // console.log('link ');
      const id = e.target.getAttribute('href');
      console.log(id);
      document
        .querySelector(id)
        .scrollIntoView({ behavior: 'smooth' });
    }
  });
