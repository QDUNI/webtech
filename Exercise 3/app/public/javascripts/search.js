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
    }

    var data = document.getElementById('courses__data').textContent.trim();
    var courses = JSON.parse(data);
    console.log(courses);

    searchInfo.innerHTML = "We found " + courses.length + " courses";

    const searchResults = document.getElementById("search__results");

    for (let i = 0; i < courses.length; i++)
    {
        console.log(courses[i]);
        const course = JSON.parse(courses[i]);
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
    }
});