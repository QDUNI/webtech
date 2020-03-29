document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search__input");
    const searchButton = document.getElementById("search__button");
    const searchInfo = document.getElementById("search__info");
    const filterIndicator = document.getElementById("filter__indicator");

    const filters = document.getElementsByClassName("filter");

    searchButton.onclick = () => {
        window.location.href = "/search?value=" + searchInput.value;
    };

    const filterToggle = function (element) {
        if (element.classList.contains("filter--toggled"))
        {
            element.setAttribute("class", "filter");
        } else
        {
            element.classList.add("filter--toggled");
        }

        updateFilters();
    };

    for (var key in filters)
    {
        const element = filters[key];
        filters[key].onclick = () => { filterToggle(element); };
    }

    function updateFilters() {
        var numSelectedFilters = 0;

        for (var i = 0; i < filters.length; i++)
        {
            if (filters[i].classList.contains("filter--toggled"))
            {
                numSelectedFilters++;
            }
        }

        filterIndicator.innerHTML = numSelectedFilters;

        updateData();
    }

    updateData();
    function updateData() {
        const selectedFilters = document.getElementsByClassName("filter--toggled");

        var program = [];
        var academicLevels = [];
        var semester = [];
        for (let i = 0; i < selectedFilters.length; i++)
        {
            switch (selectedFilters[i].innerHTML)
            {
                case "Computer_Science":
                    program.push("Computer Science");
                    break;
                case "Mathematics":
                    program.push("Mathematics");
                    break;
                case "Information_Science":
                    program.push("Information Science");
                    break;
                case "level_1":
                    academicLevels.push("level1");
                    break;
                case "level_2":
                    academicLevels.push("level2");
                    break;
                case "level_3":
                    academicLevels.push("level3");
                    break;
                case "1":
                    semester.push(1);
                    break;
                case "2":
                    semester.push(2);
                    break;
                case "3":
                    semester.push(3);
                    break;
                case "4":
                    semester.push(4);
                    break;
                default:
                    break;
            }
        }

        var data = document.getElementById('courses__data').textContent.trim();
        var courses = JSON.parse(data);



        const searchResults = document.getElementById("search__results");
        searchResults.innerHTML = "";

        let count = 0;
        for (let i = 0; i < courses.length; i++)
        {
            const course = JSON.parse(courses[i]);
            if (!program.includes(course.program))
            {
                console.log(course.course_id, course.program, course.ac_level, course.semester);
                continue;
            }
            if (!academicLevels.includes(course.ac_level))
            {
                console.log(course.course_id);
                continue;
            }
            if (!semester.includes(course.semester))
            {
                console.log(course.course_id);
                continue;
            }


            const coursePanel = document.createElement("div");
            coursePanel.setAttribute("class", "course__panel");

            const coursePanelImg = document.createElement("img");
            const coursePanelDiv = document.createElement("div");
            coursePanel.appendChild(coursePanelImg);
            const coursePanelTitle = document.createElement("h2");
            coursePanelTitle.innerHTML = course.title;
            const coursePanelProgram = document.createElement("span");
            coursePanelProgram.innerHTML = course.program + "<br><br>";
            const coursePanelDescription = document.createElement("div");
            coursePanelDescription.innerHTML = course.description;
            coursePanelDiv.appendChild(coursePanelTitle);
            coursePanelDiv.appendChild(coursePanelProgram);
            coursePanelDiv.appendChild(coursePanelDescription);
            coursePanel.appendChild(coursePanelDiv);

            searchResults.appendChild(coursePanel);

            count++;
        }

        searchInfo.innerHTML = "We found " + count + " courses";
    }
});