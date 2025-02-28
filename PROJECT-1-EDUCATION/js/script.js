$(document).ready(function(){
    $('.test-person').owlCarousel({
        // items:4,
        margin:20,
        loop:true,
        dots:true,
        lazyLoad: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            992: {
              items: 3
            }
        }
    });
})