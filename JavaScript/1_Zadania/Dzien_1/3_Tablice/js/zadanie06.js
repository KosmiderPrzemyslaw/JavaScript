// #### Zadanie 6

// 1. W pliku `zadanie06.js` stwórz funkcję ```factors```, która ma przyjmować tylko jeden argument
// - liczbę, która musi być większa od `0`.
// 2. Funkcja ta ma zwracać tablicę zawierającą wszystkie dzielniki podanej liczby (w kolejności malejącej).
// 3. Jeżeli liczba jest mniejsza lub równa `0`, to funkcja ma zwracać pustą tablicę.

// ```JavaScript
// factors(2);// => [2, 1]
// factors(54);// => [54, 27, 18, 9, 6, 3, 2, 1]
// factors(-4);// => []
// ```


function factors(number) {
    var dividers = [];
    if (number <= 0) {
        return dividers
    }

    for (var i = number; i >= 1; i--) {
        if (number % i === 0) {
            dividers.push(i);
        }
    }
    dividers.sort;
    return dividers;
}

console.log(factors(2));// => [2, 1]
console.log(factors(54));// => [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(-4));// => []

