{
    const footer = document.createElement("footer");
    footer.setAttribute("class", "Split");
    const footerDiv = document.createElement("div");
    const footerDivP = document.createElement("p");
    const footerDivPText = document.createTextNode("Do you have questions about the course? Send us an email.");
    footerDivP.appendChild(footerDivPText);
    const footerDivUl = document.createElement("ul");
    const li_1 = document.createElement("li");
    li_1.appendChild(document.createTextNode("Tel: "));
    const a_1 = document.createElement("a");
    a_1.appendChild(document.createTextNode("0623257696"));
    a_1.setAttribute("href", "tel:imperatiefprogrammeren@uu.nl");
    const li_2 = document.createElement("li");
    li_2.appendChild(document.createTextNode("Email: "));
    const a_2 = document.createElement("a");
    a_2.appendChild(document.createTextNode("imperatiefprogrammeren@uu.nl"));
    a_2.setAttribute("href", "mailto:imperatiefprogrammeren@uu.nl");
    li_1.appendChild(a_1);
    li_2.appendChild(a_2);
    const listItems = [document.createTextNode("Domplein 29"), document.createTextNode("3512 JE Utrecht"), li_1, li_2];;
    for (let i = 0; i < 4; i++)
    {
        footerDivUl.appendChild(listItems[i]);
    }
    const footerContactButton = document.createElement("a");
    footerContactButton.appendChild(document.createTextNode("See contact"));
    footerContactButton.setAttribute("id", "Contact__btn");
    footerContactButton.setAttribute("href", "./Contact.html");
    footerDiv.appendChild(footerDivP);
    footerDiv.appendChild(footerDivUl);

    footerDiv.appendChild(footerContactButton);

    const footerDiv2 = document.createElement("div");
    const footerLogo = document.createElement("div");
    footerLogo.setAttribute("id", "footer__logo");
    const footerLogoImage = document.createElement("img");
    footerLogoImage.setAttribute("src", "assets/img/logo/logo.svg");
    const footerLogoSpan = document.createElement("span");
    footerLogoSpan.appendChild(document.createTextNode("Universiteit Utrecht"));
    footerLogo.appendChild(footerLogoImage);
    footerLogo.appendChild(footerLogoSpan);
    footerDiv2.appendChild(footerLogo);

    footer.appendChild(footerDiv);
    footer.appendChild(footerDiv2);

    document.body.appendChild(footer);
}