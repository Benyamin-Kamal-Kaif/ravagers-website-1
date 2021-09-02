//banner slider
$('#banner-part').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
 autoplay: true,
  
  prevArrow: '<i class="fa fa-arrow-circle-left prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-arrow-circle-right next" aria-hidden="true"></i>'
});

//portfolio slider
$('.venobox').venobox(); 

//service-slider
$('.service-slider').slick({
  vertical: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '<i class="fa fa-angle-down prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-up next" aria-hidden="true"></i>',
})

$('#testi-part .right').slick({
  vertical: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  centerMode: true,
  centerPadding: 0,
    asNavFor: '#testi-part .left',
  prevArrow: '<i class="fa fa-angle-down prev" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-angle-up next" aria-hidden="true"></i>',
})

$('.sponsor-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  centerPadding: 0,
})

$('#testi-part .left').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  fade: true,
  asNavFor: '#testi-part .right',
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

//team venobox
$('.veno').venobox(); 

// fixed menu
$(window).scroll(function(){
  $scrollamount = $(window).scrollTop();
  
  if($scrollamount>500){
    $(".menu").addClass("fixed");
  }else{
    $(".menu").removeClass("fixed");
  }
  
  if($scrollamount>1000){
    $(".btop").css("visibility","visible");
  }else{
    $(".btop").css("visibility","hidden");
  }

})

$(".btop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },100)
})




