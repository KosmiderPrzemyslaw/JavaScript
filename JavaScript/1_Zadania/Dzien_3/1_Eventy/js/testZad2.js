document.addEventListener("DOMContentLoaded", function () {
    // let buttons = document.querySelectorAll("#bubblingButtons button")
    //
    // buttons.forEach(button => {
    //     button.addEventListener('click', evt => {
    //         const target = evt.target;
    //         const counter = target.dataset.counter;
    //         target.dataset.counter = Number.parseInt(counter) + 1;
    //         console.log(target.dataset.counter);
    //     })
    // })
    //
    // let myButtons = document.querySelectorAll('#myButtons button')
    // myButtons.forEach(button => {
    //     button.addEventListener('click', evt => {
    //         const target = evt.target;
    //         const counter = target.dataset.counter;
    //         target.classList.add("klikniety", "jes", "hower")
    //         target.dataset.counter = Number.parseInt(counter) + 1;
    //         target.style.backgroundColor = "yellow";
    //         target.style.textDecoration = "overline wavy blue";
    //         console.log(target.dataset.counter);
    //         console.log(target.classList)
    //
    //     })
    // })
    //
    // myButtons.forEach(button => {
    //     button.addEventListener('dblclick', evt => {
    //         const target = evt.target;
    //         target.style.textDecoration = 'underline black'
    //     })
    // })

    var buttons = document.querySelectorAll('#bubblingButtons button');

    buttons.forEach(elem => {
        elem.addEventListener('click', evt => {
            const target = evt.target; //przypisuje do zmiennej obiekt elementu który spowodował wywołanie eventu
            const counter = target.dataset.counter;
            target.dataset.counter = Number.parseInt(counter) + 1;
            console.log(target.dataset.counter)
        })
    })
});