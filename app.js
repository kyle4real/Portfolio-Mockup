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

// const projectsHover = () => {
//     const projectsNum = 3;
//     for (let i = 0; i < projectsNum; i++) {
//         const current = $(`#proj-${i + 1}`)[0];
//         const currentBody = $(current).find("div")[0];
//         $(current).hover(
//             () => {
//                 console.log(currentBody);
//                 // $(currentBody).addClass("d-none");
//                 $(currentBody).removeClass("d-none");
//             },
//             () => {
//                 $(currentBody).addClass("d-none");
//             }
//         );
//     }
// };
// projectsHover();

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
