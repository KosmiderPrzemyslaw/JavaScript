document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("button");
    var clickCount = 0;
    button.addEventListener('click', function () {
        clickCount += 1;
        console.log("Click number: ", clickCount);
    })

    function clickCounter() {
        clickCount += 1;
        console.log('Click number', clickCount);
        if (clickCount >= 10) {
            this.removeEventListener('click', clickCounter)
        }
    }

    button.addEventListener('click', clickCounter)

    var randomWords = ['Some', 'Random', 'Words'];

    function randomWord() {
        var myWord = randomWords[Math.floor(Math.random() * randomWords.length)];
        console.log(myWord)
    }

    button.addEventListener('click', randomWord);
})
