/*
#### Zadanie 2 - rozwiązywane z wykładowcą

Na stronie znajdują się trzy guziki.
1. Napisz jeden event dla wszystkich guzików, który ma być podpięty do elementu rodzica
 o **id** ```bubblingButtons```,
   który spowoduje, że po kliknięciu licznik znajdujący się w atrybucie
    ```data-counter``` zwiększy wartość o jeden.

Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.
 */
document.addEventListener("DOMContentLoaded", function () {
// wspólna funkcja
// function incrementButtonCounter(event) {
//     const target = event.target //– zwraca obiekt elementu, który spowodował wywołanie eventu,
//     const counter = target.dataset.counter
//     target.dataset.counter = Number.parseInt(counter) + 1
// }

// Na każdy przycisk
const buttons = document.querySelectorAll("#bubblingButtons button")

console.log(buttons)
buttons.forEach(button => {
    button.addEventListener("click", event => {
        const target = event.target
        const counter = target.dataset.counter
        target.dataset.counter = Number.parseInt(counter) + 1
        console.log(target.dataset.counter)
    })
    // button.addEventListener("click", incrementButtonCounter)
})});

// Na cały div (event propagation bubbling z przycisku na div)
// const bubblingButtons = document.querySelector("#bubblingButtons")
//
//  bubblingButtons.addEventListener("click", incrementButtonCounter)
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var div = document.querySelector('#bubblingButtons');
//
//     div.addEventListener('click', function (event) {
//         if (event.target !== event.currentTarget) {
//             var button = event.target;
//             var counter = parseInt(button.dataset.counter) + 1;
//             button.dataset.counter = counter;
//             console.log(button.dataset.counter);
//         }
//
//     });
// });