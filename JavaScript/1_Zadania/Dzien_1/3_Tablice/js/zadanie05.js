// #### Zadanie 5

// 1. W pliku `zadanie05.js` stwórz funkcję ```printTable(array)```,
// która przyjmuje tylko jeden parametr - tablicę.
// 2. Przy pomocy pętli `for` przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.

var array = ["banan", "jabłko", "gruszka", "pomarańcza"];

var printTable = function (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
};

printTable(array);

var transportArray = ["rower", "hulajnoga", "samolot", "pociąg"];

const theFastest = function (transportArray) {
    const id = 3;
    switch (transportArray) {
        case transportArray[id] === 'rower' :
            console.log("nie");
            break;
        case transportArray[id] === 'pociąg' :
            console.log("tak");
            break;
        default :
            console.log("nie wiem");
    }
};

theFastest(transportArray[1]);

for (let i = 0 ; i < transportArray.length; i++) {
    console.log(transportArray[i])
}
