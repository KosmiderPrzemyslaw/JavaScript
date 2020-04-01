// ### Zadanie 4

// W pliku `zadanie04.js` stwórz tablicę z listą swoich ulubionych owoców.  
// Następnie:
// 1. Wypisz pierwszy owoc w konsoli.
// 2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
// 3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).

var array = ["banan", "jabłko", "gruszka", "pomarańcza"];
console.log(array[0]);
console.log(array[array.length - 1])
for (var i = 0; i < array.length; i++) {
    console.log(array[i])
}
