/*
#### Zadanie 3

Na stronie znajduje się guzik.
1. Podepnij do niego event, który na kliknięcie spowoduje, że w konsoli wyświetli się napis:
   `Hura! Działa!`

Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.
 */


document.addEventListener("DOMContentLoaded", function () {
    function printText() {
        console.log("Hura działa!");
    }

    const button = document.querySelector('#mainBtn')
    button.addEventListener('click', printText)
});