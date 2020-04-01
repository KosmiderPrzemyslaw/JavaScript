/*
#### Zadanie 3

Na stronie znajduje się guzik.
1. Dopisz do niego event w taki sposób, żeby po kliknięciu w niego guzik został usunięty ze strony.
 */

document.addEventListener("DOMContentLoaded", function () {
    var remove = document.querySelector("#remove");
    console.log(remove)

    remove.addEventListener('click', elem => {
        remove.parentElement.removeChild(remove);
        //this to przycisk
        //this.body.removeChild(remove)
    })
});