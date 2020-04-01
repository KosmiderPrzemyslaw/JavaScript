// #### Zadanie 1 - rozwiązywane z wykładowcą
//
// 1. W pliku `zadanie01.js` stwórz funkcję, która zwraca (przez ```return```) sumę trzech liczb.
// 2. Liczby powinny być przekazane do funkcji jako argumenty.

    var sumOfThreeNumbers = function (a, b, c) {
        return a + b + c;
    }

    var sum = sumOfThreeNumbers(1, 4, 7);
    console.log(sum);

    var sumOfNumbers = function (e, f, g) {
         return e + f + g;

    };
    
    function test() {
        console.log(arguments);
    }

    test(2,4,5,2,3)

    var sum1 = console.log(sumOfNumbers(4,5,6));