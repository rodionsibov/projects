class InstantSearch {
    constructor(instantSearch, options) {
	this.options = options;
	this.elements = {
	    main: instantSearch,
	    input: instantSearch.querySelector(".instant-search-input"),
	    resultsContainer: document.createElement("div")
	};

	this.elements.resultsContainer.classList.add("instant-search-result-container");
	this.elements.main.appendChild(this.elements.resultsContainer);

	this.addListeners();
    }

    addListeners() {
	let delay; 
	this.elements.input.addEventListener("input", () => {
	    clearTimeout(delay);

	    const query = this.elements.input.value;

	    delay = setTimeout(() => {
		if (query.length < 3) {
		    this.populateResults([]);
		    return;
		}

		this.performSearch(query).then(results => {
		    this.populateResults(results)
		});
	    }, 500);
	});


	this.elements.input.addEventListener("focus", () => {
	    this.elements.resultsContainer.classList.add("instant-search-results-container-visible");
	});
	
	this.elements.input.addEventListener("blur", () => {
	    this.elements.resultsContainer.classList.remove("instant-search-results-container-visible");
	});
	
    }

    populateResults(results) {
	while (this.elements.resultsContainer.firstChild) {
	    this.elements.resultsContainer.removeChild(this.elements.resultsContainer.firstChild);
	}

	for (const result of results) {
	    this.element.resultsContainer.appendChild(this.createResultElement(result));
	}

	if ("href" in result) {
	    anchorElement.setAttribute("href", result.href);
	}

	return anchorElement;
    }

    createResultElement(result) {
	const anchorElement = document.createElement("a");

	anchorElement.classList.add("instant-search-result");
	anchorElement.insertAdjacentHTML("afterbegin", this.options.templateFunction(result));
    }

    performSearch(query) {
	const url = new URL(this.options.searchUrl.toString());

	url.searchParams.set(this.options.queryParam, query);

	this.setLoading(true);

	return fetch(url, {
	    method: "get"
	}).then(response => {
	    if (response.status !== 200) {
		throw new Error("Something went wrong with the search!");
	    }
	    
	    return response.json()
	}).then(responseData => {
	    console.log(responseData);

	    this.options.responseParser(responseData);
	}).catch(error => {
	    console.log(error);

	    return [];
	}).finally(results => {
	    this.setLoading(false);

	    return results;
	});
    }

    setLoading(b) {
	this.elements.main.classList.toggle("instant-search-loading", b);
    }
    
}

export default InstantSearch;
