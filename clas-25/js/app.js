$(function () {
   'use strict'

   // silicl silaider js start 
   $('.banner_slider').slick({
      dots:true,
      dotsClass:'banner_dots',
      prevArrow:'<i class=" banner_slider_icon fa-sharp fa-solid fa-arrow-left"></i>',
      nextArrow:'<i class=" banner_slider_icon fa-solid fa-arrow-right"></i>'
   });
   // silicl silaider js end 

   // counterup js start 
   $('.conterup').counterUp({
      delay: 1,
      time: 500,
   })
   // counterup js end 
})



document.addEventListener('aos:out', ({ detail }) => {
   console.log('animated out', detail);
 });

AOS.init();