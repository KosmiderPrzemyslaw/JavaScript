// 1. W pliku `zadanie07.js` stwórz funkcję ```getMissingElement```,
// która ma przyjmować tylko jeden argument - tablicę zawierającą rosnące liczby całkowite.
// 2. Funkcja ta ma zwracać brakującą liczbę (czyli miejsca, w którym tablica skacze o dwa zamiast o jeden).
// 3. Jeżeli w tablicy nie ma brakujących liczb, to funkcja ma zwracać ```null```.
// ```JavaScript
// getMissingElement([1,2,3,4,5,6,7]);// => null
// getMissingElement([6,7,8,10,11,12,13,14,15]);// => 9
// getMissingElement([-4,-3,-2,0,1,2,3,4]);// => -1

function getMissingElement(array) {
    var missingElement = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] > 1) {
            missingElement = array[i] + 1;
        }
    }
    return missingElement;
}

console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));// => null
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15]));// => 9
console.log(getMissingElement([-4, -3, -2, 0, 1, 2, 3, 4]));// => -1