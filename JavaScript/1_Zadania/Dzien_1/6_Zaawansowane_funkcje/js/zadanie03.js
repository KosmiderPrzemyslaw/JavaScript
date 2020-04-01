/**
 * Funkcje wyższego rzędu.
 * Prześledź krok po kroku każdą linijkę kodu. Każdą!
 * Spróbuj napisać komentarze dla każdej z linijek kodu
 */

//Twój komentarz ...stworzenie funkcji sortArray()
function sortArray() {

    //Twój komentarz ... stworzenie zmiennej  lokalnej w postaci tabeli
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Twój komentarz ... zanieżdżenie funkcji sortujacej w sort
    points.sort(function(a, b) {
        //Twój komentarz ...
        return a-b;
    });

    //Twój komentarz ...zwrócenie posortowanej tablicy
    return points;
}

//Twój komentarz ...
console.log(sortArray());
