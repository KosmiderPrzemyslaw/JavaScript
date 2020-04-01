/*
#### Zadanie 8

Na stronie znajdują się zagnieżdżone elementy. Do każdego dopisane są eventy.
1. Użyj metod ```stopPropagation``` i ```stopImmediatePropagation``` w taki sposób, aby:
   * Wywoływały się eventy dla elementu pierwszego i drugiego, a nie wywoływał się event dla
    elementu trzeciego.
   * Wywoływały się wszystkie eventy dla elementu czwartego i pierwszy event dla elementu piątego.
2. Dla ułatwienia, każdy event powoduje zmianę koloru elementu na którym został wywołany.
 */


document.addEventListener("DOMContentLoaded", function () {
    var info = document.getElementById('info');

    var element1 = document.getElementById("element1");
    var element2 = document.getElementById("element2");
    var element3 = document.getElementById("element3");
    var element4 = document.getElementById("element4");
    var element5 = document.getElementById("element5");

    element1.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 1");
        console.log(event.currentTarget);


    });

    element2.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 2");
        console.log(event.target);
        console.log(event.timeStamp);

        event.stopPropagation();
    });

    element3.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 3");

    });

    element4.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 4");
    });

    element5.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Click in element 5");
        event.stopImmediatePropagation();
    });

    element5.addEventListener("click", function (event) {
        makeColor(this);
        console.log("Second click in element 5");
    });
});

function makeColor(clicked) {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    clicked.style.backgroundColor = randomColor;
}
