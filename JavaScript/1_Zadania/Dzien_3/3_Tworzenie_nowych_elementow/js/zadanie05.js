/*
### Zadanie 5

Na stronie znajduje się tabela podobna do tej z zadania 1.
Tym razem przy każdym zamówieniu znajduje się dodatkowo guzik, który służy do usuwania tego zamówienia.

1. Dopisz do niego odpowiedni event, który spowoduje, że dane zamówienie zniknie z tabeli.
2. Spróbuj zrobić to w taki sposób, żeby wszystkie guziki korzystały z tego samego eventu (użyj ```this```).
 */


document.addEventListener("DOMContentLoaded", function () {
    let table = document.querySelector('#orders');
    var delBtns = document.querySelectorAll('.deleteBtn');
    var child = document.querySelectorAll('tr');
    console.log(child);
    console.log(table);
    console.log(delBtns);


    for (let button of delBtns) {
        button.addEventListener("click", function () {
            console.log(this.parentElement)
            var tr = button.parentElement;
            var td = tr.parentElement;
            td.parentElement.removeChild(td);
        })
    }


});