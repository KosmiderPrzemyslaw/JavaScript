/*
### Zadanie 4

Na stronie znajduje się `select` i 3 obrazki.
Każdy z obrazków jest przypisany do jednego z wyborów w polu `select`.
1. Napisz kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.
 */
document.addEventListener("DOMContentLoaded", function() {
    const select = document.querySelector(".form-control")
    const images = document.querySelectorAll(".page-header img")

    const macOsIdx = 0
    const ubuntuIdx = 1
    const windowsIdx = 2

    select.addEventListener("change", function () {
        console.log(this.value)

        if (this.value === "Os X") {
            images[macOsIdx].className = 'visible'
            images[ubuntuIdx].className= 'hidden'
            images[windowsIdx].className= 'hidden'
            return
        }

        if (this.value === "Windows") {
            images[macOsIdx].className= 'hidden'
            images[ubuntuIdx].className= 'hidden'
            images[windowsIdx].className= 'visible'
            return
        }

        if (this.value === "Ubuntu") {
            images[macOsIdx].className= 'hidden'
            images[ubuntuIdx].className= 'visible'
            images[windowsIdx].className= 'hidden'
            return
        }
    })
})