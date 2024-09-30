

  $(document).ready(function(){
    console.log("js run");
    $('.releases-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
  });