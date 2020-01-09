function imageGallery () {
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".room-preview img");



    previews.forEach(preview => {
	preview.addEventListener("click", function () {
	    highlight.src = this.src;
	    previews.forEach(preview => preview.classList.remove("room-active"));
	    
	    preview.classList.add("room-active");
	});
    });
}

imageGallery();
