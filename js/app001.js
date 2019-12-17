const palindrome = str => {
    if (
	str ===
	    str
	    .split("")
	    .reverse()
	    .join("")
    ) {
	console.log("it is");
    } else {
	console.log("false");
    }
};

palindrome('cac');	


