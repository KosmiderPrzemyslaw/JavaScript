/*
#### Zadanie 1 - rozwiązywane z wykładowcą

Uruchom stronę przygotowaną dla zadania 1.
Sprawdź w konsoli, czy są jakieś błędy.
Następnie:
1. Przenieś tag ```<script>``` do sekcji ```<head>```. Zobacz, co się zmieniło
w działaniu skryptu. Spróbuj to wytłumaczyć.
2. Stwórz event ```DOMContentLoaded``` dla elementu ```document``` i przenieś kod do środka tego eventu.
   Czy poprawiło to sytuację?
3. Przenieś znowu tag ```<script>``` na koniec pliku, czy jest jakaś różnica?

 */
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    menu.classList.add("menu");
    menu.classList.add("nowaKlasa");
    console.log(menu.classList);

    console.log(menu.className.length);
    console.log(menu.innerText)
    console.log(menu.innerHTML)
    console.log(menu.dataset)
    console.log(menu.outerHTML)
    console.log(menu.id)
    console.log(menu.tagName)
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});