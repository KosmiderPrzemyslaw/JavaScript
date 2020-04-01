/*
#### Zadanie 4

Znajdź i zapisz do zmiennych następujące elementy:
1. Element o **klasie** ```first``` -> jego pierwsze dziecko -> jego trzecie dziecko.
2. Element o **id** ```second``` -> jego rodzic -> jego czwarte dziecko.
3. Element o **atrybucie** ```data-ex``` nastawionym na wartość ```third``` -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w górę).
4. **Div** o **klasie** ```fourth``` -> jego rodzic -> jego pierwsze dziecko o tagu ```article``` -> jego drugie dziecko o tagu ```<p>```.

Wszystkie te elementy mają atrybut ```data-answer``` nastawiony na numer zadania, dla którego są odpowiedzią.
Sprawdź przez wyświetlenie w konsoli wartość tego atrybutu.
Dzięki temu będziesz wiedzieć, czy dane polecenie wykonane zostało prawidłowo.
 */

document.addEventListener("DOMContentLoaded", function () {
    var firstChild = document.querySelector('.first').children[0];
    var thirdChild = document.querySelector('.first').children[2];
    console.log(firstChild);
    console.log(thirdChild);

    var second = document.querySelector('#second')
    var secondParent = second.parentElement;
    var secondFourthChild = secondParent.children[3];
    console.log(second)
    console.log(secondParent)
    console.log(secondFourthChild)

    var dataEx = document.querySelector('h1[data-ex="third"]')
    console.log(dataEx)
    var grandpa = dataEx.parentElement.parentElement;
    console.log(grandpa)
    var lastGranpaChild = grandpa.lastElementChild;
    console.log(lastGranpaChild)
    var firstChilde = lastGranpaChild.firstElementChild;
    console.log(firstChilde)
    var middleChild = firstChild.children
    console.log(middleChild)
    middleChild = firstChild.children[Math.ceil(middleChild.length / 2)]
    console.log(middleChild)


    var fourth = document.querySelector('.fourth');
    console.log(fourth);
    var fourthParent = fourth.parentElement
    console.log(fourthParent);
    let firstArticle = fourthParent.querySelector('article');
    console.log(firstArticle);
    let secPChildren = firstArticle.querySelector('p[data-answer="4"]');
    console.log(secPChildren);
});