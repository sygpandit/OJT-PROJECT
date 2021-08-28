//Window loading image slider
window.onload = slideImage
//Carousel items function
let readmore = document.getElementById('readmore')
let leftbtn = document.getElementById('gotoleft')
let rightbtn = document.getElementById('gotoright')
let header = document.getElementById('car-head')
let dec = document.getElementById('car-body')

//Changing Text
let i = 0
let images = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg"
]
let links = [
    "about.html",
    "players.html",
    "gallery.html",
    "contact.html"
]
let text = [
    "About Us",
    "Players",
    "Gallery",
    "Contact"
]
let bodier = [
    "We provide different trainings and education to many people inside Nepal",
    "See the list of players in our association",
    "Watch our photos and videos",
    "Contact Us for joining academy"
]
//Sliding Function
document.slider.src = images[i]
rightbtn.addEventListener('click', function () {
    if (i < images.length - 1) {
        i++
    }
    else {
        i = 0
    }
    setImage()
})
//Left Button Working
leftbtn.addEventListener('click', function () {
    if (i > 0) {
        i--
    }
    else {
        i = images.length - 1
    }
    setImage()
})
//Changing Image
function setImage() {
    document.slider.src = images[i]
    readmore.href = links[i]
    header.innerText = text[i]
    dec.innerText = bodier[i]
}
//Sliding Image Automatically
function slideImage() {
    setTimeout('slideImage()', 3000)
    if (i < images.length - 1) {
        i++
    }
    else {
        i = 0
    }
    setImage()
}