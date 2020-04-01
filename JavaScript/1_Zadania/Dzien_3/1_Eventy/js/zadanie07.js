/*
#### Zadanie 7

Na stronie znajduje się jeden element **div**.
1. Napisz dla niego event, który będzie wypisywał położenie kursora myszy w chwili,
 gdy znajduje się nad tym elementem.
2. Wyszukaj zarówno położenie kursora globalne
(czyli odległość od górnego lewego rogu okna), jak i lokalne
 (czyli odległość od lewego górnego rogu elementu).

Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.
 */

document.addEventListener('DOMContentLoaded', function () {
    const globalX = document.querySelector('#globalX');
    const globalY = document.querySelector('#globalY');
    const localX = document.querySelector('#localX');
    const localY = document.querySelector('#localY');
    
    const box = document.querySelector('#box');
    
    box.addEventListener('mousemove', function (event) {
        globalX.innerText = event.screenX;
        globalY.innerText = event.screenY;
        localX.innerText = event.clientX;
        localY.innerText = event.clientY;
    });
});

