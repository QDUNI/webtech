window.addEventListener('load', validate);

function validate() {
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') == "error") {
        var span = document.getElementById("Signin_error");
        var text = document.createTextNode("Password or Username incorrect!");
        span.appendChild(text);
    }
    if (urlParams.get('status') == "empty") {
        var spanempty = document.getElementById("Signin_error");
        var textempty = document.createTextNode("Please fill in all fields!");
        spanempty.appendChild(textempty);
    }
};