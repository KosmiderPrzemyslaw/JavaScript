/*
#### Zadanie 3

Na stronie znajduje się formularz do zamówienia pizzy.
W formularzu znajduje się pole z checkboxami, w którym użytkownik może wybrać sobie dodatki.
Cena każdego z dodatków jest trzymana w atrybucie ```data-price```.

1. Napisz takie eventy, żeby po zaznaczeniu checkboxa wyświetlała się poprawna
 kwota zamówienia oraz po wysłaniu formularza wyświetlił się alert z wyliczoną kwotą.
2. Zwróć uwagę na dwa specjalne checkboxy:
   * `Wyczyść` powinien odznaczyć wszystkie opcje,
   * `Wszystkie dodatki` powinien zaznaczyć wszystkie opcje (poza `Wyczyść`).

 */

document.addEventListener("DOMContentLoaded", function () {
    const price = document.querySelector("#price");
    const allInputs = document.querySelectorAll("input");
    const checkBoxes = document.querySelectorAll(".checkbox")
    const button = document.querySelector('.btn');

    console.log(allInputs)

    const allToppingsCheckbox = allInputs[0];
    console.log(allToppingsCheckbox)
    const clearToopings = allInputs[allInputs.length - 1];
    console.log(clearToopings)

    let labelAllToppings = allToppingsCheckbox.parentElement;
    let div = labelAllToppings.parentElement;
    console.log(allToppingsCheckbox.parentElement.parentElement)
    console.log(labelAllToppings)


    console.log(allToppingsCheckbox.checked)
    allToppingsCheckbox.addEventListener('click', setAllToppings)
    var sum = 0;

    function setAllToppings() {

        if (allToppingsCheckbox.checked === true) {
            for (let i = 1; i < allInputs.length - 1; i++) {
                allInputs[i].checked = true;
                var cena = parseFloat(allInputs[i].getAttribute('data-price'))

                sum += cena;
            }
            price.innerText = sum.toFixed(2) + "zł";
        }
    }

    button.addEventListener('click', function () {

        return alert("Pizza kosztuje: " + sum.toFixed(2) + "zł")
    })

    button.addEventListener('click', selectToppings);

    function selectToppings() {
        let sum = 0;
        for (let i = 0; i < allInputs.length - 1; i++) {
            if (allInputs[i].checked === true) {
            }
            var cena = parseFloat(allInputs[i].getAttribute('data-price'))
            sum += cena;
        }
        price.innerText = sum.toFixed(2) + "zł";
        return sum;
    }

});

