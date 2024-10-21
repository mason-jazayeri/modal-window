'use strict';

const showModalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalContainerEl = document.querySelector('.modal-container');
const overlayEl = document.querySelector('.overlay');

// element.classList.add('my-class');
// element.classList.remove('my-class');
// element.classList.toggle('my-class');
// element.classList.contains('my-class');

// document.querySelectorAll('.my-class') → returns an array containing all the elements with that class. Then we can access all of them with a loop

const closeModal = () => {
  modalContainerEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

const openModal = () => {
  modalContainerEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);

// Note the keydown event
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalContainerEl.classList.contains('hidden'))
    closeModal();
});

// BUG: When I click above and bellow the modal window, it'll be not removed.
