document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.reviews__slider', {
        loop: true,
        autoplay: {
            delay: 2000, // 2 second
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.reviews__slider-arrow--next',
            prevEl: '.reviews__slider-arrow--prev',
        },
    });

    let swipeCount = 0;
    let forward = true;

    swiper.on('slideChange', function() {
        swipeCount++;

        // Check if it's time to reverse the direction
        if (swipeCount >= 6) {
            forward = !forward;
            swipeCount = 0; // Reset swipe count after reversing
            swiper.autoplay.stop(); // Stop autoplay temporarily

            // Change direction and restart autoplay
            swiper.params.autoplay.reverseDirection = !swiper.params.autoplay.reverseDirection;
            swiper.autoplay.start();
        }
    });
});
