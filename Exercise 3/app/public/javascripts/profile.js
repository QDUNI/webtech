document.addEventListener("DOMContentLoaded", () => {
    const registeredcourseDataRaw = document.getElementById("course__data").innerHTML.trim();
    const registeredcourseData = JSON.parse(registeredcourseDataRaw);

    let courses = [];

    for (let i = 0; i < registeredcourseData.length; i++)
    {
        loadUrl("/getcoursedata/" + registeredcourseData[i].course_id, (xhttp) => {
            const data = xhttp.response;
            courses.push(JSON.parse(data));
        });
    }

    //HIER ZITTEN DE REGISTERED COURSES IN!
    console.log(courses);

    function loadUrl(url, cFunction) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
                cFunction(this);
            }
        };
        xhttp.open("GET", url);
        xhttp.send();
    }
});