function printData(name, email, phone, date, comment) {
    console.log(`Имя: ${name}`)
    console.log(`E-mail: ${email}`)
    console.log(`Телефон: ${phone}`)
    console.log(`Дата: ${date}`)
    console.log(`Комментарий: ${comment}`)
}

let form = document.querySelector("form")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    name = form.elements["name"].value
    email = form.elements["email"].value
    phone = form.elements["phone"].value
    date = form.elements["date"].value
    comment = form.elements["comments"].value

    if (name == "") {
        console.log("Поле 'ФИО' - пустое!")
        return false
    }
    if (email == "") {
        console.log("Поле 'Почта' - пустое!")
        return false
    }
    if (comment == "") {
        console.log("Поле 'Комментарий' - пустое!")
        return false
    }

    const emailRegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email.match(emailRegularExpression)) {
        console.log("Неправильный формат Почты")
        return false
    }

    const phoneRegularExpression = /^\+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/

    if (!phone.match(phoneRegularExpression)) {
        console.log("Неправильный формат Телефона")
        return false
    }

    printData(name, email, phone, date, comment)
})

