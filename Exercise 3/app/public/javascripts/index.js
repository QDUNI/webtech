document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search__btn");
    const searchInput = document.getElementById("search");
    const navWrapper = document.getElementsByClassName("nav__wrapper");

    searchButton.onclick = () => {
        window.location.href = "/search?value=" + searchInput.value;
    };

    window.addEventListener("scroll", () => {
        navWrapper[0].setAttribute("style", "background-color: hsla(0, 0%, 0%, " + (window.pageYOffset / 400) + ");");
    });
});