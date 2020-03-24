document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu__icon");
    const navmobLinks = document.getElementsByClassName("navmob__links");

    menuButton.onclick = () => {
        if (navmobLinks[0].classList.contains("hidden"))
        {
            navmobLinks[0].classList.remove("hidden");
        } else
        {
            navmobLinks[0].classList.add("hidden");
        }
    };
});