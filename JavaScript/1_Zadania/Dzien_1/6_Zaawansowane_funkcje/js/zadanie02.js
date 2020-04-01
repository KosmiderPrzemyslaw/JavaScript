//Twój komentarz ... definicja funkcji jeden()
function jeden() {

    //Twój komentarz ... ustawienie zmiennej lokalnej dla funkcji jeden()
    var zmienna1 = 1;
    console.log(zmienna1); //w konsoli funkcja jeden() wypisze zmienna1 ponieważ jest to dla niej
    // zmienna lokalna, do której ma dostęp

    //Twój komentarz ... definicja funkcji dwa()
    function dwa() {

        //Twój komentarz ... ustawienie zmiennej lokalnej dla funkcji dwa()
        var zmienna2 = 3;
        //Twój komentarz ... pobranie zmiennej1, która dla funkcji dwa() jest zmienną globalną
        //oraz zmiennej2, która dla funkcji dwa() jest zmienną lokalną
        console.log(zmienna1);
        console.log(zmienna2);
        return zmienna2; //zwrócenie zmiennej 2
    }

    //Twój komentarz ... funkcja jeden() wywołuje funkcję dwa(), a więc na konsoli wyświetli się wartość zmiennej1
    console.log("funkcja jeden() wywołuje funkcję dwa() (funkcja dwa zwraca zmienna2): " + dwa());

    //Twój komentarz ... funkcja jeden() nie może wyświetlić zmiennej lokalnej ustawionej
    // dla funkcji dwa(),
    // więc na konsoli wyskoczy błąd zmienna2 is not defined program zostanie przerwany

    console.log(zmienna2);

}


//Twój komentarz ... na konsoli wyświetli się wynik funkcji dwa() oraz zmienna1?
jeden();

//funkcja trzy się nie wywoła ponieważ program napotkał błąd i został przerwany
function trzy(number) {
    let zmienna3 = 5;
    zmienna3 += number;
    return console.log(zmienna3);
}

trzy(2);