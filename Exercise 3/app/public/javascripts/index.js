document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search__btn");
    const searchInput = document.getElementById("search");

    searchButton.onclick = () => {
        window.location.href = "/search/" + searchInput.value;
    };
});