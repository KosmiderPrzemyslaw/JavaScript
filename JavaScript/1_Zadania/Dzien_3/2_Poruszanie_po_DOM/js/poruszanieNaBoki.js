document.addEventListener("DOMContentLoaded", function () {
    var bazElement =
        document.querySelector('#baz');
    var bar =
        bazElement.previousElementSibling;
    console.log(bar);
    var buz =
        bazElement.nextElementSibling;
    console.log(buz);

});