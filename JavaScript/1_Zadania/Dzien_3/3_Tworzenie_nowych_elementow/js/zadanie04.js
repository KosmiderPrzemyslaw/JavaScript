/*
#### Zadanie 4

Na stronie znajduje się lista z wpisami i guzik.
1. Napisz taki event, żeby po kliknięciu w guzik z listy zostały usunięte **wszystkie** jej dzieci.

 */

document.addEventListener("DOMContentLoaded", function () {
    var list = document.querySelector('.list');
    console.log(list)
    var child = document.querySelectorAll('li');
    console.log(child)
    var button = document.querySelector('#remove');

    button.addEventListener('click', function () {
     child.forEach(elem => {
         list.removeChild(elem);
     })
    })
});