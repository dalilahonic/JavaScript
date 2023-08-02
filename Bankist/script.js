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

// header.append(message);
// append adds the message element as the last child of the header element

// we can also use prepend and appennd not only to insert elements but to move them

// header.append(message.cloneNode(true));
// true means that all the child elements will be copied too

// header.before(message);
// insert message before the header element
// header.after(message);
// insert message after header element

// Delete elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', () => {
//     message.remove();
// message.parentElement.removeChild(message)
// });
// when we click on the button the div with class 'nessage' gets deleted

//.................................

// Styles

// message.style.backgroundColor = '#37384d';
// message.style.width = '120%';
// these styles are set as inline styles

// console.log(getComputedStyle(message)); // CSSStyleDeclaration

console.log(getComputedStyle(message).color); //rgb(187, 187, 187)
// we get the real style as it appears on the page even if we don't declare it in our CSS.
console.log(getComputedStyle(message).height); //49px
// height we didn't define ourselves but the browser needed to calculate the height to display it

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) +
//   40 +
//   'px';

// document.documentElement.style.setProperty(
//   '--color-primary',
//   'orangered'
// );

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

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', () => {
//   console.log('this is mouseenter event');
// })

// h1.onmouseenter = function (e) {
//   console.log('this is a mouseenter event');
// }

// only listen to the event once

// const alertH1 = function (e) {
//   alert('This is alert');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

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

//..................................................

// // Dom traversing

// const h1 = document.querySelector('h1');

// // Going downwards: child

// console.log(h1.querySelectorAll('.highlight')); // returns a nodelist
// // selects all elements with highlight class that are children of h1 element and that works no matter how deep these child elements would be inside the h1 element

// // console.log(h1.childNodes);
// console.log(h1.children); // returns html collection
// // elements that are isnide h1. only direct children

// h1.firstElementChild.style.color = 'white';
// // first child of h1 element gets the color white

// h1.lastElementChild.style.color = 'chocolate';
// // last child of h1 element

// // Going upwards: parents

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// // direct parent of h1 element

// h1.closest('.header').style.backgroundColor = 'beige';
// // selects the closest element with the class 'header'

// // querySelector finds children no matter how deep in the DOM tree while the closest methods finds parents no matter how far up in the DOM tree

// // Going sideways: siblings

// // in js we can only access direct siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// // all siblings

// // console.log([...h1.parentElement.children])

// [...h1.parentElement.children].forEach(function (el) {
//   if(el !== h1) el.style.transform = 'scale(0.5)'
// })

//.......................

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector(
  '.operations__tab-container'
);
const tabContent = document.querySelectorAll(
  '.operations__content'
);

// tabs.forEach((tab) => tab.addEventListener('click' ,() => {
//   console.log('tab');
// }))
// The problem with the provided code using forEach to add event listeners is that it creates a separate event listener for each tab element.  This approach can lead to potential performance issues and unnecessary event listeners.

// common parent for all of tabs is tabsContainer

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // if we click on the tabsContainer we get null.ant that is because null is the result of the closest method when there is no matching parent element.

  // Guard clause
  if (!clicked) return;
  //when we have null which is a falsy value then !false becomes true so the code after it will be executed
  // console.log(clicked);

  // remove active classes
  tabs.forEach((tab) =>
    tab.classList.remove('operations__tab--active')
  );
  tabContent.forEach((content) =>
    content.classList.remove('operations__content--active')
  );

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(
      `.operations__content--${clicked.dataset.tab}`
    )
    .classList.add('operations__content--active');
});

//.................................

// Menu fade animations

const handleHover = function (e) {
  // console.log(this);
  const link = e.target;
  // console.log(link);
  const siblings = link
    .closest('.nav')
    .querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');

  siblings.forEach((el) => {
    if (el !== link) el.style.opacity = this;
  });
  logo.style.opacity = this;
};

const nav = document.querySelector('.nav');

// mouseenter does not bubble
// nav.addEventListener('mouseover', handleHover(0.5));
// js expects here a function and not some other regular value which would be the reusult of calling the function like this handleHover(e, 0.5)

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation

// const initialCoords = section1.getBoundingClientRect().top

// console.log(initialCoords);

// window.addEventListener('scroll', function () {
// console.log(window.scrollY);

//   if(this.window.scrollY > initialCoords) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// });
// scroll event is not efficient and should be avoided
// scrollY is on the window object and not on the event

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// this callback will be called each time the observed element (Section1) is intersecting the root element at the threshold that we defined
// whenever section1 is intersecting the viewport at 10% the callback function will be called

// const obsOption = {
//   root: null,
//   // threshold: 0.1,
//   threshold: [0, 0.2]
// 0 will trigger each tim our target element moves completly out of the view and as soon as it entries the view
// that is beacuse a callback function will be called when the threshold is passed when moving into the view and moving out of the view
// };

// const observer = new IntersectionObserver(
//   obsCallback,
//   obsOption
// );
// callback and options

// observer.observe(section1);

// const header = document.querySelector('.header');

const stickyNav = function (enteries) {
  const entry = enteries[0];
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // when 0% of the header is visible

  rootMargin: `-${navHeight}px`,
  // a box of 90px that will be applied outside of our target element(header)
});

headerObserver.observe(header);

//....................reveling elements on scroll

// Reveal section

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const entry = entries[0];
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(
  revealSection,
  {
    root: null,
    threshold: 0.15,
    //when section is 15% percent visible
  }
);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Loading images

const imgTargets =
  document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const entry = entries[0];
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  // console.log(entry.target);

  entry.target.src = entry.target.dataset.src;
  // console.log(entry.target);

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '100px',
});

imgTargets.forEach((img) => imgObserver.observe(img));

//........................

// slider

const slides = document.querySelectorAll('.slide');

let btnLeft = document.querySelector('.slider__btn--left');
let btnRight = document.querySelector(
  '.slider__btn--right'
);

let curSlide = 0;
const maxSlides = slides.length;

const slider = document.querySelector('.slider');

const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach((dot) => {
    dot.classList.remove('dots__dot--active');
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

// activateDot(0);

// slides.forEach(
//   (slide, i) =>
//     (slide.style.transform = `translateX(${100 * i}%)`)
// );

function goToSlide(slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
}

goToSlide(0);

const dotContainer = document.querySelector('.dots');

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
function nextSlide() {
  if (curSlide === maxSlides - 1) curSlide = 0;
  else curSlide++;

  // slides.forEach((slide, i) => {
  //   slide.style.transform = `translateX(${
  //     100 * (i - curSlide)
  //   }%)`;
  // });

  goToSlide(curSlide);
  activateDot(curSlide);
}

function prevSlide() {
  if (curSlide === 0) curSlide = maxSlides - 1;
  else curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
}

function init() {
  goToSlide(0);
  createDots();
  activateDot(0);
}

init();

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

//.......................

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
});

dotContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

//.................................

// this event is fired as soon as the HTML is downloaded and converted to the DOM tree.
// DOMContentLoaded event waits for all scripts to execute, except for async scripts. this event fires after defer script is executed

// document.addEventListener(
//   'DOMContentLoaded',
//   function (e) {}
// );

// fired as soon as not only HTML is loaded but all the images and external resources like CSS.

// window.addEventListener('load', () => {});

// fired before a user is about to leave a page
// window.addEventListener('beforeunload', (e) => {
//   e.preventDefault();
//   e.returnValue = '';
//  // pop us that asks us if we want to leave the site
// });
