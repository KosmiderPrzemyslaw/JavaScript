/*
#### Zadanie 4

Na stronie znajdują się trzy guziki i trzy liczniki (elementy ```span``` o klasie ```counter```).
1. Do każdego guzika dopisz event, który spowoduje, że przypisany do niego licznik zwiększy
 swoją wartość o `1` po kliknięciu w guzik.

Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.
 */

document.addEventListener("DOMContentLoaded", function () {
    function handleClick(event) {
        const span = this.nextElementSibling.querySelector('span')

        console.log(span)

        // zwraca następny
        // element mający tego samego rodzica
        // (pojedynczy el.)

        var counter;

        if (!span.dataset.counter) {
            span.dataset.counter = 1;
            counter = 1;
        } else {
            counter = parseInt(span.dataset.counter) + 1;
            span.dataset.counter = counter;
        }
        span.innerText = counter;
    }

    var buttons = document.querySelectorAll('button');
    var i;

    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleClick)
    }
});