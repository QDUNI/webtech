document.addEventListener("DOMContentLoaded", () => {
    const dataElement = document.getElementById("data_course");
    const data = JSON.parse(dataElement.textContent);

    // Clicking on register button makes an AJAX request to register to a course
    const registerButton = document.getElementById("register__btn");
    if (registerButton != null)
    {
        registerButton.onclick = () => {
            if (confirm("Are you sure to register on this course?"))
            {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200)
                    {
                        if (xhttp.response == "Succesfully registered!")
                            window.location.reload();
                        else
                        {
                            alert(xhttp.response);
                        }
                    }
                };
                xhttp.open("GET", "/group18/registercourse/" + data.course_id);
                xhttp.send();
            }
        };
    }

    // Clicking on unregister button makes an AJAX reguest to unregister on a course.
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
            xhttp.open("GET", "/group18/unregistercourse/" + data.course_id);
            xhttp.send();
        }
    };
});