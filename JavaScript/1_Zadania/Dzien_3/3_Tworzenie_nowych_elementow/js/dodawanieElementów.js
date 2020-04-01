document.addEventListener("DOMContentLoaded", function () {
   var fooElement = document.querySelector('#foo');
   var nevDiv = document.createElement("div");
   fooElement.appendChild(nevDiv);
   var newH = document.createElement("h1");
   fooElement.insertBefore(newH, nevDiv);
   var newP = document.createElement("p");
   fooElement.replaceChild(newP, nevDiv);
   fooElement.removeChild(newH);
});