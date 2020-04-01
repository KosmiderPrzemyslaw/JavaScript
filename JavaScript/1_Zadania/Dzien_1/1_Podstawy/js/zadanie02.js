document.addEventListener("DOMContentLoaded", function () {
    function myEval(a, b, operation) {//definicja funkcji myEval przyjmującej 3 argumenty: a, b, operation
        //Ciało funkcji
        var result = 0;
        switch (operation) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '/':
                result = a / b;
                break;
            case '*':
                result = a * b;
                break;
            case '%':
                result = a % b;
                break;
            case '^':
                result = Math.pow(a, b);//użycie wbudowanego obiektu obliczającego potęgę b z a
                break;
        }
        return result;//zwrócenie wyniku z funkcji
        //Koniec ciała funkcji

        function exchange(kurs, kwota, zamiana) {
            let wynik = 0;
            switch (zamiana) {
                case 'kupno':
                    wynik = kwota * kurs;
                    break;
                case 'sprzedaż' :
                    wynik = kwota / kurs;
                    break
            }
        }

//w każdej linijce wywoływwana jest funkcja z przekazaniem odpowiednich argumentów, 2 liczb i operacji matematycznej
        console.log(" 2 + 4 = " + myEval(2, 4, "+"));
        console.log(" 5 - 2 = " + myEval(5, 2, "-"));
        console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
        console.log("10 / 2 = " + myEval(10, 2, "/"));
        console.log("10 * 2 = " + myEval(10, 2, "*"));
        console.log("10 % 2 = " + myEval(10, 2, "%"));
        console.log(exchange(4.15, 10, 'kupno'));
        console.log(exchange(4.15, 10, 'sprzedaż'));
//poniżej dopisz pozostałe przypadki działań jakie ma obsługiwać funkcja
    }
});
