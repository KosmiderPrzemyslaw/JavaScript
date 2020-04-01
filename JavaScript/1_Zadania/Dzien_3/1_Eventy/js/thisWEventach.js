document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll('.btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            this.style.backgroundColor = "red";
           
        })
    }


});