/*
### Zadanie 5

Na stronie znajduje się formularz, który odsyła do strony ```http://api.coderslab.pl/showpost.php```.
Napisz walidację tego formularza w taki sposób, żeby wysyłany był tylko i wyłącznie wtedy, kiedy spełnione zostaną następujące warunki:

1. Email zawiera w sobie `@`.
2. Imię jest dłuższe niż `5` znaków.
3. Nazwisko jest dłuższe niż `5` znaków.
4. Hasło i hasło drugie są **identyczne**.
5. Checkbox **musi** być zaznaczony.
 */
document.addEventListener("DOMContentLoaded", function() {
    const email = document.querySelector("#email");
    const name = document.querySelector("#name");
    const surname = document.querySelector("#surname");
    const pass1 = document.querySelector("#pass1");
    const pass2 = document.querySelector("#pass2");
    const agree = document.querySelector("#agree");

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let invalid = false

        // Email zawiera w sobie @.
        if (!new RegExp(".@.").test(email.value)) {
            invalid = true
        } else if (name.value.length <= 5) {
            invalid = true
        } else if (surname.value.length <= 5) {
            invalid = true
        } else if (pass1.value !== pass2.value) {
            invalid = true
        } else if (!agree.checked) {
            invalid = true
        }

        if (invalid) {
            alert("Formularz niepoprawny!")
            event.preventDefault()
        }
    })

})