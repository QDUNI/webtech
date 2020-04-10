document.addEventListener("DOMContentLoaded", () => {
    const dataElement = document.getElementById("data_course");
    const data = JSON.parse(dataElement.textContent);

    const registerButton = document.getElementById("register__btn");
    if (registerButton != null)
    {
        registerButton.onclick = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200)
                {
                    if (xhttp.response == "Succesfully registered!")
                        window.location.reload();
                }
            };
            xhttp.open("GET", "/registercourse/" + data.course_id);
            xhttp.send();
        };
    }

    const unregisterButton = document.getElementById("unregister__btn");
    unregisterButton.onclick = () => {
        if (confirm("Are you sure to unregister for this course?"))
        {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200)
                {
                    console.log(xhttp.response);
                    if (xhttp.response == "Succesfully unregistered!")
                        window.location.reload();
                }
            };
            xhttp.open("GET", "/unregistercourse/" + data.course_id);
            xhttp.send();
        }
    };
});