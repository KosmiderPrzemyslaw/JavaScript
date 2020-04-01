// #### Zadanie 8 - dodatkowe

// 1. W pliku `zadanie08.js` stwórz tablicę zawierającą w w każdej komórce rok urodzenia.
// 2. Następnie napisz funkcję, która przyjmie tę tablicę jako argument i wyświetli:
//    * rok urodzenia najstarszej osoby i jej wiek,
//    * rok urodzenia najmłodszej osoby i jej wiek.
//    Użyj pętli do iteracji tablicy, ale postaraj się pobierać elementy metodą ```pop``` lub ```shift```.

const currentYear = 2020;
const calc = function (array) {
    let minYear;
    let maxYear;
    while (true) {
        year = array.pop();
        if (year === undefined) {
            break;
        }
        if(minYear === undefined) {
            minYear = year;
        }
        if(maxYear === undefined) {
            maxYear = year;
        }
        if(year < minYear) {
            minYear = year;
        }
        if(year > maxYear) {
            maxYear = year;
        }
    }
    console.log(`Oldest: ${minYear}, ${currentYear - minYear}`)
    console.log(`Youngest: ${maxYear}, ${currentYear - maxYear}`)
}

const arr = [1982, 1988, 1985];
calc(arr)