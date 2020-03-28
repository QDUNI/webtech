document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search__input");
    const searchButton = document.getElementById("search__button");
    const searchInfo = document.getElementById("search__info");
    const filterIndicator = document.getElementById("filter__indicator");
    const searchPanelBottom = document.getElementById("search__panel--bottom");

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

    for (let i = 0; i < courses.length; i++)
    {

    }
});