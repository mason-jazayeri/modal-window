'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');

// element.classList.add('my-class');
// element.classList.remove('my-class');
// element.classList.toggle('my-class');
// element.classList.contains('my-class');

// document.querySelectorAll('.my-class') → returns an array-like containing all the elements with that class. Then we can access all of them with a loop

const closeModal = () => {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

const openModal = () => {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

showModalBtns.forEach(item => {
  item.addEventListener('click', openModal);
});

closeModalBtn.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);

// Note the keydown event
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) closeModal();
});
