/*
### Zadanie 9

Na stronie znajdują się dwa elementy pokazujące wielkość okna.
1. Dopisz event do okna (element ```window```), który spowoduje,
   że elementy te będą pokazywały poprawne wartości nawet po przeskalowaniu okna.
 */
document.addEventListener("DOMContentLoaded", function () {
    const windowWidth = document.getElementById("windowWidth")
    const windowHeight = document.getElementById("windowHeight")

    function setWindowSize () {
        const width = document.documentElement.clientWidth;
        const heigh = document.documentElement.clientHeight;
        windowHeight.innerText = heigh
        windowWidth.innerText = width
    }

    window.addEventListener("resize", setWindowSize)
});