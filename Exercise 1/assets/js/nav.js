window.onscroll = function () { CloseOnScroll(); };

function CloseOnScroll() {
    var x = document.getElementById("navmob__links");
    if (x.className === "navmob__links")
    {

    } else
    {
        x.className = "navmob__links";
    }
}

function MenuClick() {

    window.scrollTo(0, 0);
    window.setTimeout(partB, 1);
}

function partB() {
    var x = document.getElementById("navmob__links");
    if (x.className === "navmob__links")
    {
        x.className += "--responsive";
    } else
    {
        x.className = "navmob__links";
    }
}