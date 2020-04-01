// #### Zadanie 3

// 1. W pliku `zadanie03.js` stwórz funkcję anonimową i przypisz ją do zmiennej.
// 2. Zadaniem funkcji jest wypisanie dziesięć razy: `Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych`.

// Zadanie rozwiąż w tym samym pliku.

var annonim = function () {
    for (var i = 0; i < 10; i++) {
        console.log("Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych")
    }
}   

annonim();

var anonim2 = function () {
    for(let j = 2; j < 10; j++) {
        console.log("jo tyż");
    }
};

anonim2()