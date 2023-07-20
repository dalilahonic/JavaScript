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

//...............................

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
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie"> Got it! </button>'

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

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
  // message.parentElement.removeChild(message)
})
// when we click on the button the div with class 'nessage' gets deleted

//.................................

// Styles 

message.style.backgroundColor = '#37384d';
message.style.width = '120%';
 
// these styles are set as inline styles


