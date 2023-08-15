//Navigating links within the website
//Title 
const title = document.querySelector('#branding');
title.addEventListener('click', onHeaderClick);
function onHeaderClick(e){
    e.preventDefault();
    window.location.href='index.html';
}

//Contact us sumbit button event
//Declaring varabiables of the id's and classes from the contact us page 
const myForm = document.querySelector('#my-form');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');

myForm.addEventListener('submit', onSumbit);

function onSumbit(e) {
    e.preventDefault();
    //if nothing is entered for the input, we create an error message 
    if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || phoneInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        //we are creating a new element to put the inputs into a list 
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('${firstNameInput.value} ${lastNameInput.value} : ${emailInput.value}'))
        userList.appendChild(li);

        //we then clear the inputs
        firstNameInput.value = '';
        lastNameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
    }
}