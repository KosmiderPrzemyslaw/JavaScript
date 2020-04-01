/*
#### Zadanie 1 - rozwiązywane z wykładowcą

Zajrzyj do pliku `zadanie01.js`.
Znajdziesz tam kod funkcji, która losuje liczbę z przedziału `1-100`.
Dopisz kod, który wyświetli następujące informacje w konsoli:
 1. Czy liczba jest parzysta czy nieparzysta.
 2. Wszystkie dzielniki liczby, np. dla `10` wyświetli `5`, `2`, `1`
 (liczby mają wyświetlić się w jednej linii).
 3. Wyświetli wynik potęgowania liczby, wykładnikiem potęgi ma być reszta z dzielenia tej liczby przez `5`.

```
**Przykład dla polecenia 3.**:
Wylosowana liczba: 8
8 % 5 = 3
8^3 = 512
```
 */

function mathInfo() {
    const randomNumber = Math.floor(Math.random() * 100);
    //poniżej napisz rozwiązanie zadania

    // 1
    if (randomNumber % 2 === 0) {
        console.log("Liczba parzysta: " + randomNumber)
    } else {
        console.log("Liczba nieparzysta: " + randomNumber)
    }


    // 2
    let dividers = "1, ";
    for (let i = 2; i <= randomNumber; i++) {
        if (randomNumber % i === 0) {
            dividers += i + ", "
        }
    }
    console.log(dividers)

    // 3
    const index = randomNumber % 5;
    console.log(Math.pow(randomNumber, index))

    const a = 3.213;
    const b = 4.21342;

    const result = a * b;
    console.log(result)

}

mathInfo();