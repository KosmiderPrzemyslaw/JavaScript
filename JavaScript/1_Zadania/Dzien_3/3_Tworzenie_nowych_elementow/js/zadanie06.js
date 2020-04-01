/*
#### Zadanie 6

Na stronie znajdują się dwie listy. Obok każdego wpisu (w obu listach) znajdują się przyciski.
1. Napisz taki kod JavaScript, żeby po przyciśnięciu guzika element listy był przenoszony do drugiej listy.
2. Pamiętaj, że element może być przenoszony wiele razy (np. z listy `1` do listy `2`, a potem z powrotem do listy `1`).
 */

document.addEventListener("DOMContentLoaded", function () {


    var list1 = document.querySelector('#list1');
    var list2 = document.querySelector('#list2');
    var moveBtn = document.querySelectorAll(".moveBtn");
    var listContainer = document.querySelectorAll(".listContainer");

    moveBtn.forEach(button => {

        {
            button.addEventListener('click', function (e) {
                // console.log(button.outerHTML, button.parentElement)
                //console.log(e.target)
                var liElementToMove = button.parentElement;
                var ulElement = liElementToMove.parentElement;
                var listContainer = ulElement.parentElement;


                if (ulElement.getAttribute("id") === "list1") {

                    var clone = liElementToMove.cloneNode(true);
                    list2.appendChild(clone);
                    ulElement.removeChild(liElementToMove)
                    moveBtn = document.querySelectorAll(".moveBtn")
                    return moveBtn;

                } else if (ulElement.getAttribute("id") === "list2") {

                    var clone = liElementToMove.cloneNode(true);
                    list1.appendChild(clone)
                    ulElement.removeChild(liElementToMove);
                    moveBtn = document.querySelectorAll(".moveBtn")
                    return moveBtn;
                }
            })

        }
    })

});