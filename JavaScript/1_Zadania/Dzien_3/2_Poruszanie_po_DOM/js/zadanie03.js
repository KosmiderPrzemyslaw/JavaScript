/*
#### Zadanie 3

W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki).
Po kliknięciu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Rodzic ma być wyszukiwany zależnie od położenia ```this```.
3. Kolor tła musi być losowy.

Hint:
Żeby uzyskać losowy kolor, użyj poniższego kodu:
```JavaScript
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
 */

document.addEventListener('DOMContentLoaded', function (evt) {
    let buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            button.parentElement.style.backgroundColor = randomColor();
        })
    });

    function randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

});

