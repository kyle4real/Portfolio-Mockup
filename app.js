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
