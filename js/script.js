
const button = document.querySelector('div.buttons a.btn');

let distance = document.getElementById('input#km');

let age = document.getElementById('input#age');



button.addEventListener('click', function (){

    let price;
    price = parseFloat(distance.value * 0.2762);

    if ( age.value < 18) {
        price = parseFloat( price - 0.17);
    } else if ( age.value > 65) {
        price = parseFloat(price - 0.33);
    } else {
    document.getElementById('output') .innerHTML = 'Il costo del biglietto è' + ' ' + price.toFixed(2) + '&euro;'
    }

});

