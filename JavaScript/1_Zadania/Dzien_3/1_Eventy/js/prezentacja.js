document.addEventListener("DOMContentLoaded", function () {

    function changeColor() {
        var buttons = document.querySelectorAll(".btn");

        for (var i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener("click", function () {
                    this.style.backgroundColor = "red";
                    console.log(event.currentTarget);
                    console.log(event.target);
                    console.log(event.timeStamp);
                    console.log(event.type);

                }
            )
        }
    }

    changeColor();

    function fooBarrfunction() {
        let foo = document.querySelector('#foo');
        foo.addEventListener('click', function () {
            console.log('Event wywołany, element foo');
        })

        let bar = document.querySelector('#bar');
        bar.addEventListener('click', function () {
            console.log('Event wywołany, element bar')
        })
    }

    fooBarrfunction();

    var parent = document.querySelector('#parent');
    var child = document.querySelector('#child');
    parent.addEventListener('click', function (e) {
        console.log('Target: ', e.target.id);
        console.log('CurrentTarget', e.currentTarget.id);
    })

    child.addEventListener('click', function () {
        console.log('click on child')

    })




});



