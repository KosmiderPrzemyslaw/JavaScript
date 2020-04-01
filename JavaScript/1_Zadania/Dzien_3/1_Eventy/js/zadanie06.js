/*
#### Zadanie 6

Na stronie znajdują się trzy elementy **div**.
1. Napisz wspólny event zmieniający kolor tła **tylko** w klikniętym **divie**.
   Użyj do tego słowa kluczowego ```this```.

Pamiętaj, żeby wszystko pisać w evencie ```DOMContentLoaded```.

**Hint**:
Żeby uzyskać losowy kolor użyj poniższego kodu:
```JavaScript
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
 */

document.addEventListener('DOMContentLoaded', function () {
    // function randomColor() {
    //     return "#" + Math.floor(Math.random() * 16777215).toString(16);
    // }
    //
    // const divs = document.querySelectorAll(".box")
    // let i;
    //  for(i = 0; i < divs.length; i++) {
    //      divs[i].addEventListener('click', function (e) {
    //          this.style.backgroundColor = randomColor();
    //      });
    //  }

    const divs = document.querySelectorAll(".box")

    const that = this
    // teraz w zmiennej that będziemy trzymać referencje do dokumentu
    // który w tym momencie jest jako this bo DOMContentLoaded został wywołany na document
    for (let div of divs) {
        div.addEventListener("click",  function () {
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
            this.style.backgroundColor = randomColor

            // uważać!
            console.log(that)
            console.log(this)
        })
    }
});