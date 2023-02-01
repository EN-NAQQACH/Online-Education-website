let menubtn = document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .content-flex .navbar');

menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/* --Courses Section-- */

var swiper = new Swiper(".course-slider", {
    spaceBetween:20,
    /*grabCursor:true,*/
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
 
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });

  /* --Teachers Section-- */

var swiper = new Swiper(".teachers-slide", {
    spaceBetween:20,
    /*grabCursor:true,*/
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
 
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });

    /* --Reviews Section-- */

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    /*grabCursor:true,*/
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
 
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });
