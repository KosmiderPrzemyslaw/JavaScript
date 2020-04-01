document.addEventListener("DOMContentLoaded", function() {
    const orderForm = document.querySelector("form");

    const inputs = orderForm.elements
    console.log(inputs)
    const last = inputs.length - 2;

    const markAll = inputs[0]
    const clearAll = inputs[last]

    function addToSum(element) {
        const sum = Number.parseFloat(document.querySelector("#price").innerText);
        const price = Number.parseFloat(element.dataset.price);

        document.querySelector("#price").innerText = (sum + price).toFixed(2)
    }

    function subscractFromSum(element) {
        const sum = Number.parseFloat(document.querySelector("#price").innerText);
        const price = Number.parseFloat(element.dataset.price);

        document.querySelector("#price").innerText = (sum - price).toFixed(2)
    }

    markAll.addEventListener("change", function () {
        if (this.checked) {
            document.querySelector("#price").innerText = 0
            for (let i = 1; i < last; i++) {
                inputs[i].checked = true
                inputs[i].dispatchEvent(new Event('change'));
            }

        } else {
            for (let i = 1; i < last; i++) {
                inputs[i].checked = false
                inputs[i].dispatchEvent(new Event('change'));
            }

            document.querySelector("#price").innerText = 0
        }
    })

    for (let i = 0; i < last; i++) {
        inputs[i].addEventListener("change", function (event) {
            if (inputs[i].checked) {
                addToSum(inputs[i])
            } else {
                subscractFromSum(inputs[i])
            }
        })
    }

    clearAll.addEventListener("change", function () {
        if (this.checked) {
            for (let i = 0; i < last; i++) {
                inputs[i].checked = false
                inputs[i].dispatchEvent(new Event('change'));
            }
            markAll.value = false
        }
        this.checked = false
        document.querySelector("#price").innerText = 0
    })

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault()
        let sum = 0
        for (let i = 1; i < last; i++) {
            let element = inputs[i]
            console.log(element)
            if (element.checked) {
                sum += Number.parseFloat(element.dataset.price)
            }
        }
        alert("Pizza kosztuje: " + sum.toFixed(2))
    })
})