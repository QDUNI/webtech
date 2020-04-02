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

    const dataElement = document.getElementById("data");
    const data = JSON.parse(dataElement.textContent);

    if (data.loggedin)
    {
        const signinButton = document.getElementById("signin_btn");
        const signinButtonMob = document.getElementById("signin_btn--mob");
        const profileButton = document.createElement("div");
        profileButton.setAttribute("id", "profile__btn");
        const profileButtonImg = document.createElement("img");
        profileButtonImg.setAttribute("id", "profile__img");
        profileButtonImg.setAttribute("src", "/images/user.svg");
        profileButton.appendChild(profileButtonImg);
        document.getElementsByClassName("nav__wrapper")[0].appendChild(profileButton);
        signinButton.replaceWith(document.createElement("li"));

        signinButtonMob.remove();
    }
});