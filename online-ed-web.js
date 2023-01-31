let menubtn = document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .content-flex .navbar');

menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

