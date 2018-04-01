// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
let images=new Array(
  '/images/bike2.jpg',
  '/images/bike3.jpg',
  '/images/bike4.jpg',
  '/images/bike5.jpg');
let nextimage=0;
doSlideshow();

function doSlideshow(){
   if(nextimage>=images.length){nextimage=0;}
   $('.top-bar')
   .css('background-image','url("'+images[nextimage++]+'")')
   .fadeIn(8000,function(){
       setTimeout(doSlideshow,8000);
   });
}
