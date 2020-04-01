document.addEventListener("DOMContentLoaded", function() {
    const firstList = document.querySelector("#list1")
    const secondList = document.querySelector("#list2")

    function switchToNext() {
        const element = this.parentElement

        if (element.parentElement === firstList) {
            firstList.removeAttribute(element)
            secondList.appendChild(element)
            return
        }

        secondList.removeChild(element)
        firstList.appendChild(element)
    }

    function implementMovement(source, dest) {
        source.querySelectorAll(".moveBtn").forEach(button => {
            button.addEventListener("click", switchToNext)
        })
    }

    implementMovement(firstList, secondList)
    implementMovement(secondList, firstList)
})