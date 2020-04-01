document.addEventListener("DOMContentLoaded", function () {
   var foo = document.querySelector('#foo');
   foo.addEventListener('click', function (evt) {
       console.log('Event wywołany, element #foo')
       console.log('CurrentTarget: ', evt.currentTarget.id);
       console.log('Target: ', evt.target.id);
   })

    // var bar = document.querySelector('#bar')
    // bar.addEventListener('click', function () {
    //     console.log('Event wywołany, element #bar')
    // })
});