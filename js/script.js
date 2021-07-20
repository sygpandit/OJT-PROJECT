window.onload = slideImage;
window.onscroll = function(){
    scrollFunction();
}
let bar = document.getElementById('bar');
let menu = document.getElementById('menu');
let readmore = document.getElementById('readmore');
let leftbtn = document.getElementById('gotoleft');
let rightbtn = document.getElementById('gotoright');
let header = document.getElementById('car-head');
let dec = document.getElementById('car-body');

bar.addEventListener('click', function(){
    menu.classList.toggle('show');
    bar.classList.toggle('close');
});

let i=0;
let images = [
    "img/image1.jpg",
    "img/image2.jpg",
    "img/image3.jpg",
    "img/image4.jpg"
]
let links = [
    "about",
    "services",
    "gallery",
    "contact"
]
let text = [
    "About Us",
    "Services",
    "Gallery",
    "Contact"
]
let bodier = [
    "We provide different trainings and education to many people inside Nepal",
    "We provide many services",
    "Watch our photos and videos",
    "Contact Us for sponsership and promotions"
]

document.slider.src = images[i];
rightbtn.addEventListener('click', function(){
    if(i<images.length-1){
        i++;
    }
    else{
        i = 0;
    }
    setImage();
});
leftbtn.addEventListener('click', function(){
    if(i>0){
        i--;
    }
    else{
        i = images.length-1;
    }
    setImage();
});
function setImage(){
document.slider.src = images[i];
readmore.href = links[i];
header.innerText = text[i];
dec.innerText = bodier[i];
}
function slideImage(){
    setTimeout('slideImage()', 3000);
    if(i<images.length-1){
        i++;
    }
    else{
        i = 0;
    }
    setImage();   
}
let topbtn = document.getElementById('back-to-top');
function scrollFunction(){
    if (document.body.scrollTop > 545 || document.documentElement.scrollTop > 545 || document.documentElement.scrollTop < 1) {
        document.getElementById('header').style.position = "fixed";
        document.getElementById('header').style.top = "0";

    } else {
        document.getElementById('header').style.position = "absolute";
        document.getElementById('header').style.top = "-100px";
    }
}

topbtn.addEventListener('click', function(){
    window.location = "#";
});