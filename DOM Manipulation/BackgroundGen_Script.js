
//grab refs to elements we need
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

//console.log(body);

function setGradient() {
    body.style.background =
    'linear-gradient(to right, '
    + color1.value
    + ', '
    + color2.value
    + ')';

    css.textContent = body.style.background + ';';
}

//Add Event listener for the user's selected colour from the colour picker
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);