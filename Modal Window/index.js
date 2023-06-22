let buttons = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});
// we could also have used style.display.block but if the class has multiple styles then we would have to change each one of them

const closeTheModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeButton.addEventListener('click', closeTheModal);

// For keypress, we use document.addEventListener because it doesn't occur on a specific element.

//the infro about which key was pressed will be stored in the event that is going to occur as soon as the key is pressed. as soon as we hit any key a keydown event is genereted. any time an event like this occurs js generates an object and that objects contains all the info about the event itself and we can then access that object in the event handler function

document.addEventListener('keydown', (event) => {
//   console.log(event);
//   console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeTheModal();
  }
});