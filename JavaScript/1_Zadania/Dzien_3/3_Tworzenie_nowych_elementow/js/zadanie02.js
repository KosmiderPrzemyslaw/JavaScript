/*

#### Zadanie 2 - rozwiązywane z wykładowcą

Na stronie przypisanej do zadania znajduje się lista i guzik.
1. Dopisz odpowiednie eventy do nich w taki sposób, żeby po kliknięciu w guzik dodał się nowy element do listy.
2. Element powinien mieć w sobie informacje na temat tego, ile elementów jest w liście w chwili jego dodania.
   Przykładowy element znajduje się w komentarzu w kodzie html
 */

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu")
    const button = document.querySelector(".button")
    var counter = 0;
    button.addEventListener("click", () => {
        const li = document.createElement("li")
        counter++;
        li.innerText = "to " + counter + " element W chiwli dodania było:  " + menu.children.length;
        menu.appendChild(li)

    })
    ;
});