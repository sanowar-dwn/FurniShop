$(function(){
    //Brand slider js here//
    $('.brand-slider').slick({
        infinite:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    //Banner slider js here
      $('.banner-slider').slick({
        vertical:true,
        arrows:true,
        prevArrow: '.banner-up-arrow',
        nextArrow: '.banner-down-arrow',
        verticalSwiping:true,
      });
      
      //review slider      
      $('.review-slider').slick({
        arrows:true,
        prevArrow: '.review-left-arrow',
        nextArrow: '.review-right-arrow',
      });
       
      //Top to bottom js here
      $('.btm').click(function(){
        $('html, body').animate({scrollTop:10000}, 500);
        });

      //Bottom to top js here
      $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 500);
        });
        $(window).scroll(function(){
          var scrolling = $(this).scrollTop();
          if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
          }
          else {
            $('.back-to-top').fadeOut(500);
          }
        
          if(scrolling > 200){
            $('.navbar').addClass('bg');
          }
          else {
            $('.navbar').removeClass('bg');
          }
        });
        
      
});



