import InstantSearch from "./InstantSearch.js";

const searchProjects = document.querySelector("#searchProjects")
const instantSearchProjects = new InstantSearch(searchProjects, {
    searchUrl: new URL("./projectsInfo.js", window.location.origin),
    queryParam: "q",
    responseParser: (responseData) => {
	return responseData.results;
    },
    templateFunction: (result) => {
	return `
<div class="instant-search-title">${result.title}</div>
<p class="instant-search-paragraph">${result.text}</p>
`;
    }
});


console.log(instantSearchProjects);
