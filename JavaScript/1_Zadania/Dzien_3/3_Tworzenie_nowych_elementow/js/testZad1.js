document.addEventListener("DOMContentLoaded", function() {
   var orderId = document.querySelector("#orderId");
   var item = document.querySelector("#item");
   var quantity = document.querySelector("#quantity");
   var tableOreders = document.querySelector("#orders");
   var addBtn = document.querySelector("#addBtn");

   addBtn.addEventListener('click', function () {
       const number = document.createElement("td");
       number.innerText = orderId.value;

       const it = document.createElement("td");
       it.innerText = item.value;

       const  quant = document.createElement("td");
       quant.innerText = quantity.value;


       tableOreders.appendChild(number);
       tableOreders.appendChild(it);
       tableOreders.appendChild(quant);

       var row = document.createElement("tr");
       row.appendChild(number);
       row.appendChild(it);
       row.appendChild(quant);

       tableOreders.appendChild(row);
   })


    

});