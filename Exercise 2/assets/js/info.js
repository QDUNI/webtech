class Course {
    constructor(title, department, infoEntries) {
        this.title = title;
        this.department = department;
        this.infoEntries = infoEntries;
    }

    renderDOM() {
        const courseElement = document.createElement("article");
        courseElement.setAttribute("id", "course__article");
        const titleElement = document.createElement("h1");
        titleElement.appendChild(document.createTextNode(this.title));
        courseElement.appendChild(titleElement);

        const infoEntriesWrapper = document.createElement("div");
        infoEntriesWrapper.setAttribute("id", "infoEntries__wrapper");
        for (let i = 0; i < this.infoEntries.length; i++)
        {
            infoEntriesWrapper.appendChild(this.infoEntries[i].render());
        }
        courseElement.appendChild(infoEntriesWrapper);
        document.body.appendChild(courseElement);
    }
}

class InfoEntry {
    constructor(title, infoElement) {
        this.title = title;
        this.infoElement = infoElement;
    }

    render() {
        const infoEntryDiv = document.createElement("div");
        infoEntryDiv.setAttribute("class", "infoEntry");
        const titleDiv = document.createElement("div");
        titleDiv.setAttribute("class", "infoEntry__title");
        titleDiv.appendChild(document.createTextNode(this.title));
        const infoDiv = document.createElement("div");
        infoDiv.setAttribute("class", "infoEntry__info");
        infoDiv.appendChild(this.infoElement);
        infoEntryDiv.appendChild(titleDiv);
        infoEntryDiv.appendChild(infoDiv);

        return infoEntryDiv;
    }

}

class InfoEntryTextOnly extends InfoEntry {
    constructor(title, infoText) {
        super(title, document.createTextNode(infoText));
    }
}

class InfoEntryLink extends InfoEntry {
    constructor(title, infoText, href) {
        const link = document.createElement("a");
        link.appendChild(document.createTextNode(infoText));
        link.setAttribute("href", href);

        super(title, link);
    }
}

{
    const infoEntries = [
        new InfoEntryTextOnly("Coursecode", "INFOIMP"),
        new InfoEntryTextOnly("Study credits", "7.5 ECTS"),
        new InfoEntryTextOnly("Academic period", "week 36 t/m 45"),
        new InfoEntryTextOnly("Timeslot", "D"),
        new InfoEntryTextOnly("Number of participants", "200+"),
        new InfoEntryLink("Planning", "See planning", "Colleges.html"),
        new InfoEntryLink("Tests", "See Tests", "test.html"),
        new InfoEntryLink("Frequently asked questions", "See FAQ", "FAQ.html")
    ];
    const ImperativeProgramming = new Course("Imperative Programming", "Department of Information and Computing Sciences", infoEntries);

    ImperativeProgramming.renderDOM();
}