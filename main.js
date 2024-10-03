
$(document).ready(function(){
    $('.releases-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: true,
        appendArrows: $('.slider-buttons'),
        centerMode: true,
        variableWidth: true,
        nextArrow: '<button type="button" class="slider-button"><img src="Assets/Icons/Basic Icons/Arrows Button Right.svg" alt=""><div class="wipe-fill"><div></div></div></button>',
        prevArrow: '<button type="button" class="slider-button"><img src="Assets/Icons/Basic Icons/Arrows Button Left.svg" alt=""><div class="wipe-fill"><div></div></div</button>',
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

$('select').on('change', () => {
    $('select#reason').removeClass('invalid-option');
})

function toggleNav() {
    $('.nav-items').toggleClass('reponsive-nav-shown');
}
