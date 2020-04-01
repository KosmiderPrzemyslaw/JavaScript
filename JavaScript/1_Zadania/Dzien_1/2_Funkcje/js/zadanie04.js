// #### Zadanie 4

// 1. W pliku `zadanie04.js` stwórz funkcję ```calculateTip(amount, rating)```, która będzie przyjmować dwa argumenty:
//    * kwotę do zapłaty,
//    * opis słowny obsługi.
// 2. Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku,  
//    jeśli opis jest nieznany, funkcja powinna zwracać napis `Opis nieczytelny`.

// Opis może przyjmować następujące wartości:
// ```
// "Very good service" => 25% napiwku,
// "Good service" => 20% napiwku,
// "Neutral service" => 15% napiwku,
// "Bad service" => 0% napiwku.
// ```
// Przykład:
// ```
// input -> 100, "Very good service"
// output -> 25
// ```

// Zadanie rozwiąż w tym samym pliku.

var calculateTip = function calculateTip(amount, rating) {
    if (rating === "Very good service") {
        return amount * 0, 25;
    } else if (rating === "Good service") {
        return amount * 0, 20;
    } else if (rating === "Neutral service") {
        return amount * 0, 15;
    } else {
        return 0;
    }
}

console.log(calculateTip(100, "Very good service"))
console.log(calculateTip(100, "Good service"))
console.log(calculateTip(100, "Neutral service"))
console.log(calculateTip(100, "Bad service"))

const ratePlayer = function (rating) {

    switch (rating) {
        case 10:
            console.log("very good player");
            break;
        case 9:
            console.log("RL9");
            break;
        case 8:
            console.log("xavi");
            break;
        case 1:
            console.log("jurdud");
            break;
        default:
            console.log("żodyn")
    }
};

console.log(ratePlayer(10));
console.log(ratePlayer(9));
console.log(ratePlayer(8));
console.log(ratePlayer(1));
console.log(ratePlayer(0));

function exchange(amount, cash) {
    let result = 0;
    switch (cash) {
        case 'USD':
            result = amount * 4.13;
            break;
        case 'EUR':
            result = amount * 2.15;
            break
    }
    return result;
}

console.log(exchange(10, 'USD'));
console.log(exchange(10, 'EUR'));