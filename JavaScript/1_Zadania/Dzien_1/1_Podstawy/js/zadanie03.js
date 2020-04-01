/*
#### Zadanie 3

1. W pliku `zadanie03.js` stwórz tyle zmiennych, ile różnych znasz typów.
2. Każdą odpowiednio nazwij i wstaw do nich odpowiednie dane.
3. Następnie dodaj do siebie różne zmienne i zobacz, jakiego typu jest wynik.
4. Napisz w komentarzu przy każdej zmiennej jej typ.
5. Wypisz każdą zmienną w konsoli.

Zwróć uwagę, jak zmieniają się typy danych w zależności od tego, jakie typy ze sobą dodajemy.
Jest to tzw. niejawna konwersja danych (silnik JavaScript bez naszego udziału zmienia typ danych).
 */

    var number = 2
    var someText = "someText";
    var boolean = true;
    var someNull = null;
    var undefined = undefined;
    var samochod =  {
        marka: "opel" , 
        model: "corsa"
    }
    var tab = [1,2,"cos"];
    var tab = [2,[3,4],44]

    function someFunction(){

    }


    console.log(typeof(number = number + someText))
    console.log(typeof(boolean + someNull))
    console.log(typeof(samochod + tab))
    console.log(typeof(undefined + null))
    console.log(typeof(true + true))
    console.log(typeof(true + true))
    console.log(typeof(someFunction))