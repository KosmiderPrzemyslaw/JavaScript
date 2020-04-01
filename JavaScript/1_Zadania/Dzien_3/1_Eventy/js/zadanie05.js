
/*
#### Zadanie 5

Na stronie znajdują się trzy guziki i jeden licznik.

1. Napisz jeden wspólny event dla wszystkich guzików, który spowoduje, że po kliknięciu w
guzik licznik zwiększy wartość o `1`.

Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.

 */

document.addEventListener('DOMContentLoaded', function () {
    // function handleClick(event) {
    //     counter++;
    //     span.innerText = counter;
    // }
    //
    // var buttons = document.querySelectorAll('button');
    // var i;
    // var counter = 0;
    // var span = document.querySelector('span.counter');
    // for (i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', handleClick);
    // }

    const buttons = document.querySelectorAll('button');
    const counter = document.querySelector('.counter');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            counter.innerText++;
        })
    }

});