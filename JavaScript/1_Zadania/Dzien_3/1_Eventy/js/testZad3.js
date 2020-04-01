document.addEventListener("DOMContentLoaded", function () {
    let mainBtn = document.querySelector('#mainBtn');
    let btn = document.getElementById('mainBtn')

    console.log(mainBtn)
    console.log(btn)

    let buttons = document.querySelectorAll("#buttons .btn");
    let buutoNS = document.getElementsByClassName("btn");

    console.log(buttons)
    console.log(buutoNS)

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            console.log("Hura Działa")
        })
    })
    buutoNS.forEach(button=>{
        button.addEventListener('click', function () {
            button.style.backgroundColor = "blue";
        })
    })
})