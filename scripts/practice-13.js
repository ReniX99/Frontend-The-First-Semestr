const title = document.querySelector('h1')
title.addEventListener("click", () => alert('Вы кликнули на заголовок - так держать!'))

const imageContainer = document.querySelector('.image-container')
const image = imageContainer.querySelector('.img-fluid')

imageContainer.addEventListener("mouseover", () => {
    image.style.width = '440px'
})

imageContainer.addEventListener("mouseout", () => {
    image.style.width = '400px'
})

image.addEventListener("click", (event) => {
    event.target.src = "images/other-capibara.jpg"
})

image.addEventListener("dblclick", () => alert("Не налегай, у меня не так много других капибар"))