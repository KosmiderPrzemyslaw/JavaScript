document.addEventListener("DOMContentLoaded", function () {
    var foo = document.querySelector('#foo'), bar = document.querySelector('#bar'),
        baz = document.querySelector('#baz');
    foo.addEventListener('click'
        , function (e) {
            console.log('click on #foo');
            //e.stopImmediatePropagation()
        });
    bar.addEventListener('click'
        , function (e) {
            console.log('click on #bar');
            e.stopImmediatePropagation()
        });
    bar.addEventListener('click', function (e) {
        console.log('click on #bar second')
    });
    baz.addEventListener('click'
        , function (e) {
            console.log('click on #baz');

        });
});