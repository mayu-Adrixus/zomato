// Header
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// option
const selectElement = document.getElementById('optionsSelect');

selectElement.addEventListener('change', function() {
    const selectedValue = selectElement.value;
    console.log('Selected option:', selectedValue);
});