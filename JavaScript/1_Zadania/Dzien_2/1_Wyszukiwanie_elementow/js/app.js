// //Co oznaca poniższy kod dowiecie się w dalszej części modułu
// #### Zadanie 1 - rozwiązywane z wykładowcą
//
// 1. Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej **tag** ```article``` o **klasie** ```first```.

// 2. W kolejnym etapie:
//     * wypisz w konsoli, ile elementów **h1** znajduje się w tym **tagu**.
// * wyszukaj w nim wszystkie elementy o **klasie** ```offers```, przeiteruj je i wypisz je w konsoli,
// * wyszukaj w nim wszystkie elementy **div**, przeiteruj je i wypisz je w konsoli.
//
//     Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Używaj funkcji, które wyszukują wiele elementów.
//     Za każdym razem wypisz w konsoli, ile jest znalezionych przez Ciebie elementów.
document.addEventListener("DOMContentLoaded", function () {

    //tag article o klasie first.
    // <article class="first" />
    const articleFirst = document.querySelector("article.first");
    console.log(articleFirst);


    // wypisz w konsoli, ile elementów h1 znajduje się w tym tagu.
    const headersInArticle = document.querySelectorAll("article h1");
    console.log(headersInArticle.length);

    ////////////////////
    // wyszukiwanie h2
    ////////////////////

    // wyszukanie po wszystkich odrazu
    const headers2InArticle = document.querySelectorAll("article h2");
    console.log(headers2InArticle.length);

    // wyszukanie tylko dla pierwszego

    const article = document.querySelector("article.first");
    const h2 = article.querySelectorAll("h2");
    console.log(h2.length);

// wyszukanie wszystkich krok po kroku
    const articles = document.querySelectorAll("article");
    let h2inArticles = 0;
    for (let art of articles) {
        h2inArticles += art.querySelectorAll("h2").length
    }
    console.log(h2inArticles);

    // wyszukaj w nim wszystkie elementy o klasie offers, przeiteruj je i wypisz je w konsoli,
    // <article ... >
    //      <p class="offers" />
    // </article>

    const artOffers = article.querySelectorAll(".offers");
    console.log(`article offers: ` + artOffers.length);
    for (let art of artOffers) {
        console.log(art)
    }

    const articleOffers = document.querySelectorAll("article div");
    console.log(articleOffers.length);
    articleOffers.forEach(offer => {
        console.log(offer)
    });

    // wyszukaj w nim wszystkie elementy div, przeiteruj je i wypisz je w konsoli.
    // <article ... >
    //     <div ...>
    // </article>
    console.log("Wersja z zajęć(wyświetla wszystkie divy) -źle -dobre do zad 4: ")
    const articleDivs = document.querySelectorAll("article div");
    articleDivs.forEach(div => {
        console.log(div)
    });

    console.log(`moja wersja: (wyświetla divy z firstArticle`);

    const divsArtFirst = article.querySelectorAll("div");
    divsArtFirst.forEach(div => {
        console.log(div)
    });

    // 2
    //
    console.log("gdybyśmy mogli użyć wyszukiwania po id...")

    let exercise2 = document.getElementById("exercise2");
    console.log(exercise2);

    exercise2 = document.querySelector("#exercise2");
    console.log(exercise2);

    exercise2 = document.querySelector("nav > ul > li:nth-child(5) > a");
    console.log(exercise2);

    let homeId = document.querySelector("#home");
    console.log(homeId);

    homeId = document.getElementById("home");
    console.log(homeId);

    let liElement = document.querySelector("li:not([data-direction])");
    console.log(liElement);

    let blockElement = document.querySelector(".block");
    console.log(blockElement);

    let liNav = document.querySelectorAll("nav > ul > li");
    console.log("wszystkie li w tagu nav: " + liNav.length);

    let liNav1 = document.querySelectorAll("nav li").length;
    console.log(liNav);

    let paragraf = document.querySelectorAll("div > p");
    console.log(paragraf);
    console.log(document.querySelectorAll("div p").length);

    let divs = document.querySelectorAll("article div");
    console.log(divs);
    console.log(document.querySelectorAll("article div").length)

    const navLi = document.querySelectorAll("nav li");

    liNav.forEach(item => {
        if(!item.dataset.direction) {
            console.log("Setting direction top for: ");
            console.log(item);
            item.dataset.direction = 'top';
        }
        console.log(item);
    })
});