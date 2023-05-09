$(function() {
  
  var swiper = new Swiper(".cardLanding", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
  });
  // swiper.on('slideChange', function () {
  //   $('.count-slider').rCounter({
  //       duration: 30
  //   });
  // });

  $('.r-count').rCounter({
    duration: 30
  });
  
    
  
    
    
    
  
//   var a = 0;
//   // $(window).scroll(function () {
//       var oTop = $(".counter-box").offset().top - window.innerHeight;
//       if (a == 0 && $(window).scrollTop() > oTop) {
//           $(".counter").each(function () {
//               var $this = $(this),
//                   countTo = $this.attr("data-number");
//               $({
//                   countNum: $this.text()
//               }).animate(
//                   {
//                       countNum: countTo
//                   },
  
//                   {
//                       duration: 3000,
//                       easing: "swing",
//                       step: function () {
//                           //$this.text(Math.ceil(this.countNum));
//                           $this.text(
//                               Math.ceil(this.countNum).toLocaleString("en")
//                           );
//                       },
//                       complete: function () {
//                           $this.text(
//                               Math.ceil(this.countNum).toLocaleString("en")
//                           );
//                           //alert('finished');
//                       }
//                   }
//               );
//           });
//           a = 1;
//       }
  // });


  
//   $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
//   });

});

AOS.init({
// disable: 'mobile',
    once: true,
    startEvent: 'DOMContentLoaded',
});
AOS.refresh();  
