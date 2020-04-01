/*
#### Zadanie 2 - rozwiązywane z wykładowcą

W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki).
Po kliknięciu w którykolwiek z nich, element, który znajduje się bezpośrednio po nim,
powinien zniknąć (jeżeli był widoczny) lub się pojawić (jeżeli był niewidoczny).
Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie przyciski musi być założony ten sam event.
2. Następny element ma być wyszukiwany zależnie od położenia ```this```.
3. Kod musi działać poprawnie i nie generować błędów (pamiętaj o sprawdzeniu,
czy następny element nie równa się ```null```).
 */

document.addEventListener('DOMContentLoaded', function (evt) {
    let buttons = document.querySelectorAll('a.button');
    console.log(buttons)
    let i;

    for(i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (evt1) {

            evt1.preventDefault();

            if(this.nextElementSibling) {
                this.nextElementSibling.classList.toggle('hidden');
            }
        });
    }
});