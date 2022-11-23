
const button = document.querySelector('div.buttons a.btn');

let distance = document.getElementById('km');

let age = document.getElementById('age');



button.addEventListener('click', function (){

    let price;
    price = parseInt(km.value * 0.2762);

    if ( age.value < 18) {
        price = ( price - 0.17);
    } else if ( age.value > 65) {
        price = (price - 0.33);
    }
    document.getElementById('output') .innerHTML = 'Il costo del biglietto è' + ' ' + price.toFixed(2) + '&euro;'
    
});

