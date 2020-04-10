document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search__btn");
    const searchInput = document.getElementById("search");
    const navWrapper = document.getElementsByClassName("nav__wrapper");

    // Redirect to search page
    searchButton.onclick = () => {
        window.location.href = "/group18/search?value=" + searchInput.value;
    };

    // Change opacity based on scroll
    window.addEventListener("scroll", () => {
        navWrapper[0].setAttribute("style", "background-color: hsla(0, 0%, 0%, " + (window.pageYOffset / 400) + ");");
    });
});