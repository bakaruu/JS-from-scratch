'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal') // only select one of them, to select all, use querySelectorAll


const openModal = function () {
    console.log('Button clicked');
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

//to Open every modal msg selected
for (let index = 0; index < btnsOpenModal.length; index++)
    btnsOpenModal[index].addEventListener('click', openModal);



//To close modal msg
btnCloseModal.addEventListener('click', closeModal)
//To close modal outside the box
overlay.addEventListener('click', closeModal)



