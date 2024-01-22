let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .flex .navbar');

function rr(){
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('i');
}


var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
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

var swiper = new Swiper(".teachers-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
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

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 20,
  grabCursor:true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
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
})

window.onscroll = () =>{
  menuBtn.classList.remove('fa-times');
  navbar.classList.remove('i');
}
