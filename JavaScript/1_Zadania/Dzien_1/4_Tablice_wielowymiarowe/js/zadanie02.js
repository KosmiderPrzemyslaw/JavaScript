/*
#### Zadanie 2

1. W pliku `zadanie02.js` stwórz funkcję ```print2DArray```,
 która jako argument przyjmuje tablicę dwuwymiarową.
2. Następnie funkcja ta ma wypisać w konsoli zawartość tej tablicy.
3. Stwórz ręcznie dwuwymiarową tablicę i przetestuj działanie funkcji.
 */

function print2DArray(array) {
    var row = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            row += array[i][j] + " ";
        }
        console.log("[" + [i] +"] = [" + row + "]");
        row = "";
    }
}

var arr = [];
arr[0] = [3, 4, 56, 773, 1];
arr[1] = [7, 12, 0, 98, 34, 381];
arr[2] = [12, 66, 96, 54, 10];


var arr2 = [];
arr2[0] = [1, 0, 0 ,0]
arr2[1] = [0, 1, 0 ,0]
arr2[2] = [0, 0, 1 ,0]
arr2[3] = [0, 0, 0 ,1]

print2DArray(arr2)
print2DArray(arr);
