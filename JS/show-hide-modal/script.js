'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const SHOW = function () {
  modal.classList.remove('hidden'); // here is choose class, so no . required!!
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', SHOW);

/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    //console.log('btn clicked');
    /// === my answer === it's also worked, but if hidden class set too many properties, it would be a painful way
    // modal.style.display = 'block';
    //overlay.style.display = 'block';

    /// == from jonas ===
    modal.classList.remove('hidden'); // here is choose class, so no . required!!
    overlay.classList.remove('hidden');
  });
// if only one action need to exacute, no need to have curly braces.
 */
const HIDE = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', HIDE); // not HIDE() 因為這樣一run到這個line就會執行>>無效 我們是希望click 之後才HIDE!!
overlay.addEventListener('click', HIDE);

/* btnCloseModal.addEventListener('click', function () {
  /// === my answer ===
  //     modal.style.display = 'none';
  //   overlay.style.display = 'none';
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
 */

// document.addEventListener('keydown', HIDE);

document.addEventListener('keydown', function (e) {
  //console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    HIDE();
  }
});
