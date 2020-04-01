/*
1. W pliku `zadanie03.js` stwórz funkcję ```create2DArray```
przyjmującą dwie liczby całkowite (```rows``` i ```columns```).
2. Zadaniem funkcji jest zwrócenie tablicy dwuwymiarowej o podanej liczbie rzędów i kolumn.
3. Każda komórka ma być wypełniona kolejną liczbą całkowitą.
4. Następnie użyj rozwiązania z zadania 2 do wypisania tej tablicy w konsoli.

    Hint: Użyj pętli zagnieżdżonych.
*/

function create2DArray(rows, columns) {
    var result = [];
    var counter = 0;

    for(let i = 0; i < rows; i++) {
        result[i] = [];
        for (var j = 0; j < columns; j++) {
            result[i][j] = counter++;
        }
    }
    return result;
}


function print2DArray(array) {
    var row = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            row += array[i][j] + " ";
        }
        console.log("[" + [i] + "] = [" + row + "]");
        row = "";
    }
}

print2DArray(create2DArray(5, 5));
