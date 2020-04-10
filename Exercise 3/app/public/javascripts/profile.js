document.addEventListener("DOMContentLoaded", () => {
    const registeredcourseDataRaw = document.getElementById("course__data").innerHTML.trim();
    const registeredcourseData = JSON.parse(registeredcourseDataRaw);
    const registeredcoursesContent = document.getElementsByClassName("RegisteredCourses__list")[0];

    let courses = [];

    // List all registered courses
    for (let i = 0; i < registeredcourseData.length; i++)
    {
        loadUrl("/group18/getcoursedata/" + registeredcourseData[i].course_id, (xhttp) => {
            const data = xhttp.response;
            courses.push(JSON.parse(data));

            const courseItem = document.createElement("div");
            if (i % 2 == 0)
                courseItem.setAttribute("class", "course__item course__item--dark");
            else
                courseItem.setAttribute("class", "course__item course__item--light");
            const courseTeacher = document.createElement("div");
            courseTeacher.innerHTML = courses[i].teacher;
            const courseTitle = document.createElement("div");
            courseTitle.innerHTML = courses[i].course_title;
            const courseSemester = document.createElement("div");
            courseSemester.innerHTML = "semester " + courses[i].semester;
            courseItem.appendChild(courseTeacher);
            courseItem.appendChild(courseTitle);
            courseItem.appendChild(courseSemester);
            courseItem.onclick = () => {
                window.location.href = "/group18/course/" + courses[i].course_id;
            };
            registeredcoursesContent.appendChild(courseItem);
        });
    }

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

    const editProfileButton = document.getElementById("editprofile");
    editProfileButton.onclick = () => {
        window.location.href = "/group18/editprofile";
    };
});