document.addEventListener("DOMContentLoaded", () => {
    const backtotopButton = document.getElementById("backtotop__button");


    // Change opacity based on scrollHeight
    window.addEventListener("scroll", () => {
        backtotopButton.setAttribute("style", "opacity: " + (window.pageYOffset / 400));
    });
});