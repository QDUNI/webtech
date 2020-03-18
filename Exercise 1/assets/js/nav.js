window.onscroll = function() { CloseOnScroll() };

function CloseOnScroll() {
    var x = document.getElementById("Nav_mob_links");
    if (x.className === "Nav_mob_links") {

    } else {
        x.className = "Nav_mob_links";
    }
}

function MenuClick() {

    window.scrollTo(0, 0);
    window.setTimeout(partB, 1)
}

function partB() {
    var x = document.getElementById("Nav_mob_links");
    if (x.className === "Nav_mob_links") {
        x.className += " responsive";
    } else {
        x.className = "Nav_mob_links";
    }
}