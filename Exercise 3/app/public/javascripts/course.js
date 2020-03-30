document.addEventListener("DOMContentLoaded", () => {
    const dataElement = document.getElementById("data");
    const data = JSON.parse(dataElement.textContent);

    const registerButton = document.getElementById("register__btn");
    registerButton.onclick = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
                console.log(xhttp.response);
                if (xhttp.response == "Succesfully registered!")
                    window.location.reload();
            }
        };
        xhttp.open("GET", "/registercourse/" + data.course_id);
        xhttp.send();
    };
});