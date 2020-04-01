
document.addEventListener('DOMContentLoaded', function () {
    function handleClick(event) {
        counter++;
        span.innerText = counter;
    }

    var buttons = document.querySelectorAll('button');
    var i;
    var counter = 0;
    var span = document.querySelector('span.counter');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleClick);
    }
});