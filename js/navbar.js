//Slide Image
//Hamburger Setup
let bar = document.getElementById('bar')
let menu = document.getElementById('menu')
let dev = document.getElementById('dev')
document.getElementById('year').innerText = new Date().getFullYear()
let body = document.body
//Menu Function
bar.addEventListener('click', function () {
    menu.classList.toggle('show')
    bar.classList.toggle('close')
})
let topbtn = document.getElementById('back-to-top')
window.onscroll = function () {
    if (pageYOffset >= 192) {
        topbtn.style.opacity = 1
        topbtn.style.visibility = "visible"
        topbtn.style.bottom = "1px"
    }
    else {
        topbtn.style.opacity = 0
        topbtn.style.visibility = "hidden"
        topbtn.style.bottom = "-10px"
    }
}

topbtn.addEventListener('click', function () {
    document.documentElement.scrollTop = 0
})

dev.addEventListener('click', (e) => {
    e.preventDefault()
    dev.innerText = "Suyog Pandit"
})
let email = document.getElementById('submit-email')

document.getElementById('submit-msg').addEventListener('submit', (e) => { alert("Thanks " + email.value + " for sending us the message\nWe will Conatct you soon") })