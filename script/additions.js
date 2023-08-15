//Navigating links within the website
//Title 
const title = document.querySelector('#branding');
title.addEventListener('click', onHeaderClick);
function onHeaderClick(e){
    e.preventDefault();
    window.location.href='index.html';
} 

//Opening and closing mondals
//Side buttons 
const openButton1 = document.getElementById('side-button1');
const openButton2 = document.getElementById('side-button2');
const openButton3 = document.getElementById('side-button3');
const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close-button');
const close2 = document.getElementById('close-button2');

openButton1.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});

close.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});

openButton2.addEventListener('click', () => {
    modal2.classList.add('active');
    overlay.classList.add('active');
});

close2.addEventListener('click', () => {
    modal2.classList.remove('active');
    overlay.classList.remove('active');
});

openButton3.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});