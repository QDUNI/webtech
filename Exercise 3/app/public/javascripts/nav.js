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
        const profileButton = document.createElement("li");
        profileButton.setAttribute("id", "profile__btn");
        const profileButtonImg = document.createElement("img");
        profileButtonImg.setAttribute("src", "/images/user.svg");
        profileButton.appendChild(profileButtonImg);
        signinButton.replaceWith(profileButton);
    }
});