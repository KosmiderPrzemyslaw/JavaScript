/*\
### Zadanie 1 - rozwiązywane z wykładowcą

W pliku znajdują się trzy listy (każda osadzona w elemencie **div**).
Po najechaniu myszką na element **div** zmienić się mają kolory tła elementów jego listy.
Odpowiednio:
1. Pierwszy element w liście ma mieć kolor czerwony.
2. Ostatni element w liście ma mieć kolor niebieski.
3. Wszystkie inne elementy mają mieć kolor zielony.
4. Po najechaniu myszką na element **div** dodaj mu klasę ```hovered```, ale tylko jemu.

Rozwiązanie musi spełniać następujące założenia:
1. Na wszystkie **divy** musi być założony ten sam event.
2. Elementy listy mają być wyszukane w zależności od ```this```.

 */

document.addEventListener("DOMContentLoaded", function() {
    const listContainers = document.querySelectorAll(".listContainer")

    listContainers.forEach(container =>  {
        container.addEventListener("mouseover", function () {
            this.classList.toggle("hovered")

            const list = container.children[0]
            const elements = list.children

            // Pierwszy element w liście ma mieć kolor czerwony.
            list.firstElementChild.style.backgroundColor = "red"
            // Ostatni element w liście ma mieć kolor niebieski.
            list.lastElementChild.style.backgroundColor = "blue"

            // Wszystkie inne elementy mają mieć kolor zielony.
            for (let i = 1; i < elements.length - 1; i++) {
                elements[i].style.backgroundColor = "green"
            }
        })
    })
})