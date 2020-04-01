/*
#### Zadanie 2

Na stronie znajduje się formularz do zamówienia.
Jest w nim sekcja odpowiedzialna za wystawienie faktury.
1. Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy,
   kiedy zaznaczony jest checkbox `Chcę otrzymać fakturę`.
 */

document.addEventListener("DOMContentLoaded", function () {

    const checkbox = document.querySelector('.checkbox #invoice');
    const invoiceData = document.querySelector('#invoiceData');
    console.log(invoiceData);
    console.log(checkbox.value);
    console.log(checkbox)

    function checkCheckbox() {

        if (checkbox.checked === false) {
            invoiceData.classList.add('invisible')
        } else if (checkbox.checked === true) {
            invoiceData.classList.remove('invisible')
        }
    }

    checkCheckbox(checkbox);
    checkbox.addEventListener('click', checkCheckbox)
});

