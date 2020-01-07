const dogBtn = document.querySelector('.dogBtn');
const dogImage = document.querySelector('.dogImage');


dogBtn.addEventListener('click',() => {


    fetch('https://source.unsplash.com/random')

    	.then(response => {
    	    return response.json()
    	})
    	.then(picture => {

	    dogImage.src = picture.message;
    	});
});
