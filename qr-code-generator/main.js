const input = document.querySelector('.form input')
const button = document.querySelector('.form button')
const qrImg = document.querySelector('.qr-img img')
button.addEventListener('click', () => {
    if (input.value.length > 0) {
        const imgSrc = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${input.value}`
        qrImg.src = imgSrc
        input.value = ''
    }
})