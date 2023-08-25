// Header
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// option
const selectElement = document.getElementById('optionsSelect');
const selectedOptionDisplay = document.getElementById('selectedOptionDisplay');

selectElement.addEventListener('change', function () {
    const selectedValue = selectElement.value;
    selectedOptionDisplay.textContent = selectedValue; // Update the displayed value
});