
function show() {
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');
    
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector('.navbar');

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}