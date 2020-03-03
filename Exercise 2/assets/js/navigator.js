{
    const navWrapper = document.createElement("nav");
    navWrapper.setAttribute("class", "nav__wrapper");
    const navLogo = document.createElement("nav");
    navLogo.setAttribute("class", "nav__logo");
    const navLogoImage = document.createElement("img");
    navLogoImage.setAttribute("class", "logo");
    navLogoImage.setAttribute("src", "assets/img/logo/logo.svg");
    navLogoImage.setAttribute("alt", "logo");
    const navLogoTitle = document.createElement("p");
    navLogoTitle.setAttribute("id", "title");
    const navLogoTitleText = document.createTextNode("Imperative Programming");
    navLogoTitle.appendChild(navLogoTitleText);
    navLogo.appendChild(navLogoImage);
    navLogo.appendChild(navLogoTitle);

    const navExpand = document.createElement("nav");
    navExpand.setAttribute("class", "nav__expand");
    const navLinks = document.createElement("ul");
    navLinks.setAttribute("class", "nav__links");
    const listItems = [["index.html", "Home"],
    ["Colleges.html", "Collegs"],
    ["Tests.html", "Tests"],
    ["FAQ.html", "FAQ"],
    ["Info.html", "Info"],
    ["Contact.html", "Contact"]];
    for (let i = 0; i < 6; i++)
    {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", listItems[i][0]);
        const aText = document.createTextNode(listItems[i][1]);
        a.appendChild(aText);
        li.appendChild(a);
        navLinks.appendChild(li);
    }
    navExpand.appendChild(navLinks);

    const navMob = document.createElement("nav");
    navMob.setAttribute("class", "navmob");
    const navMenuIcon = document.createElement("a");
    navMenuIcon.setAttribute("href", "javascript:void(0);");
    navMenuIcon.setAttribute("class", "icon");
    navMenuIcon.setAttribute("onclick", "MenuClick()");
    const navMenuIconImage = document.createElement("img");
    navMenuIconImage.setAttribute("alt", "menu icon");
    navMenuIconImage.setAttribute("src", "assets/img/menu/menu2.svg");
    navMenuIcon.appendChild(navMenuIconImage);
    navMob.appendChild(navMenuIcon);

    const navMobLinks = document.createElement("div");
    navMobLinks.setAttribute("id", "navmob__links");
    for (let i = 0; i < 6; i++)
    {
        const a = document.createElement("a");
        a.setAttribute("href", listItems[i][0]);
        const aText = document.createTextNode(listItems[i][1]);
        a.appendChild(aText);
        navMobLinks.appendChild(a);
    }

    navWrapper.appendChild(navLogo);
    navWrapper.appendChild(navExpand);
    navWrapper.appendChild(navMob);

    document.body.appendChild(navWrapper);
    document.body.appendChild(navMobLinks);
}
