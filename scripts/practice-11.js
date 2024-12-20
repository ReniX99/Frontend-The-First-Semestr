let title = document.querySelector("h1")
title.textContent = "Добро пожаловать на наш сайт!"

let subTitles = document.querySelectorAll("h2")
for (let subTitle of subTitles) {
    subTitle.style.color = "red"
}

let main = document.body.querySelector("main")
let firstParagraph = main.querySelector("p")
firstParagraph.textContent = "Это новый текст параграфа."

let video = document.querySelector("iframe")
video.style.display = "none"