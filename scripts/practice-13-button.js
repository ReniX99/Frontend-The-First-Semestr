const button = document.querySelector('.opened-button')
button.addEventListener("click", () => {
    const table = document.querySelector(".second-table")

    if (table.classList.contains('d-none')) {
        table.classList.remove('d-none')
        table.classList.add('d-block')
    } else {
        table.classList.remove('d-block')
        table.classList.add('d-none')
    }

})