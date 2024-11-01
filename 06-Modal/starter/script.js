'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal') // only select one of them, to select all, use querySelectorAll

console.log(btnsOpenModal);

for (let index = 0; index < btnsOpenModal.length; index++)
    console.log(btnsOpenModal[index].textContent);



