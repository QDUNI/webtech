document.addEventListener("DOMContentLoaded", () => {
    const backtotopButton = document.getElementById("backtotop__button");

    window.addEventListener("scroll", () => {
        backtotopButton.setAttribute("style", "opacity: " + (window.pageYOffset / 400));
    });
});