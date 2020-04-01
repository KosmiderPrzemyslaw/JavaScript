/*
#### Zadanie 1 - rozwiązywane z wykładowcą
1. W pliku `app.js` napisz funkcję ```boilEgg```, która jako argument przyjmie czas w sekundach,
 a jej wywołanie spowoduje, że po zadanym czasie na konsoli wyświetli się komunikat:
   `jajko ugotowane`
2. Dodatkowo co `5` sekund, podczas gotowania w konsoli wyświetl napis `jajko się gotuje`.
3. Przetestuj swoją funkcję dla `30` sekund (czas gotowania).
 */
function boilEgg(sec) {
    setInterval(
        () => {
            console.log("Jajko się gotuje...")
        },
        5000
    );
    setTimeout(
        () => {
            console.log("Jajko ugotowane")
        },
        sec * 1000
    );

}


boilEgg(30);



/*
#### Zadanie 4

1. W pliku `app.js` stwórz funkcję, która jako parametry przyjmuje liczby i wyświetla największą z nich.
   Skorzystaj ze zmiennej ```arguments```.

Przykład:
```
input -> 5, 29, 6, 4, 34, 56, 2, 3
output -> 56
```
 */

function maxNumber(...args) {
    let max = args[0];

    // pierwszy for each zwraca indeksy
    // for (let i in args) {
    //     if (args[i] > max) {
    //         max = args[i]
    //     }
    // }

    // drugi for each zwraca wartości
    // for (let i of args) {
    //     if (i > max) {
    //         max = i;
    //     }
    // }

    // trzeci for each na tablicy
    args.forEach(i => {
        if (i > max) {
            max = i;
        }
    })

    return max;
}

console.log(maxNumber(5, 29, 6, 4, 34, 56, 2, 3));
console.log(maxNumber(5, 29, 6, 4, 34, 2, 3));
console.log(maxNumber(5, 29, 2, 3));
console.log(maxNumber(5, 29, 2, 3));
console.log(maxNumber(5, 29, 99));



