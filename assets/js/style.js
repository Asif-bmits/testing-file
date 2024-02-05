$(document).ready(function(){
    $(".main-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,
        autoPlaySpeed: 800,
        autoPlayTimeout:800,
        autoPlayHoverPause:true,
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOut',
        // checkVisible: false,
        // slideSpeed: 10,
        // paginationSpeed: 10,
        // singleItem: true,
        responsive:{
            320:{
                items: 1
            },
            620:{
                items: 1
            },
            1024:{
                items: 1
            }
        }
    });
});

// sticky header
$(window).scroll(function(){
    if ($(this).scrollTop() > 1){
        $('.navbar').addClass('sticky');
    }
    else{
        $('.navbar').removeClass('sticky');
    }
})

AOS.init();


// lazy load
// $(function() {
//     $('.lazy').Lazy();
// });