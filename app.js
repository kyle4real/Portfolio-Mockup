$(document).on("scroll", () => {
    if ($(document).scrollTop() > 30) {
        $("#navbar").addClass("py-3 nav-lighter");
    } else {
        $("#navbar").removeClass("py-3 nav-lighter");
    }
});
$(document).ready(() => {
    console.log("yes");
});

const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
