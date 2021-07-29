const navLink = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click',run);

function run(){
    hamburger.classList.toggle('toggle');
    navLink.classList.toggle('nav-active');
}


