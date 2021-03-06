document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search__input");
    const searchButton = document.getElementById("search__button");
    const searchInfo = document.getElementById("search__info");
    const filterIndicator = document.getElementById("filter__indicator");

    const filters = document.getElementsByClassName("filter");

    searchButton.onclick = () => {
        updateData();
    };

    // Toggle a filter
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

    // Set all onclick functions
    for (var key in filters)
    {
        const element = filters[key];
        filters[key].onclick = () => { filterToggle(element); };
    }

    // Check what filters are selected and update data
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
                case "bachelor":
                    academicLevels.push("level1");
                    academicLevels.push("level2");
                    break;
                case "master":
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

        // AJAX request
        loadUrl("/group18/searchdata?value=" + searchInput.value, (xhttp) => {
            const data = xhttp.response;


            var courses = JSON.parse(data);

            const searchResults = document.getElementById("search__results");
            searchResults.innerHTML = "";

            let countTenCourses = 0;
            let countSets = 0;
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
                coursePanel.onclick = () => {
                    window.location.href = "/group18/course?course_id=" + course.course_id;
                };

                const coursePanelImg = document.createElement("img");
                var src = "";
                switch (course.program)
                {
                    case "Computer Science":
                        src = "computer.svg";
                        break;
                    case "Information Science":
                        src = "information.svg";
                        break;
                    case "Mathematics":
                        src = "formula.svg";
                        break;
                    default: break;
                }
                coursePanelImg.setAttribute("src", "/group18/images/" + src);
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

                // Show 10 courses hide the rest. 
                if (countTenCourses >= 10)
                {
                    if (countTenCourses % 10 == 0)
                    {
                        countSets++;
                        const viewMoreButton = document.createElement("button");
                        if (countSets != 1)
                        {
                            viewMoreButton.setAttribute("class", "panel__hidden--" + (countSets - 1));
                            viewMoreButton.setAttribute("style", "display: none");
                        }
                        viewMoreButton.innerHTML = "VIEW MORE";
                        const set = countSets;
                        viewMoreButton.onclick = () => {
                            console.log("test", set);
                            const hiddenPanels = document.getElementsByClassName("panel__hidden--" + set);
                            for (let i = 0; i < hiddenPanels.length; i++)
                            {
                                hiddenPanels[i].setAttribute("style", "display: block");
                            }
                            viewMoreButton.setAttribute("style", "display: none");
                        };

                        searchResults.appendChild(viewMoreButton);
                    }
                    coursePanel.setAttribute("style", "display: none");
                    coursePanel.setAttribute("class", "course__panel panel__hidden--" + countSets);
                }
                searchResults.appendChild(coursePanel);
                countTenCourses++;

                count++;
            }

            searchInfo.innerHTML = "We found " + count + " courses";
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
});