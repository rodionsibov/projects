const cards = document.querySelector('#cards')

document.addEventListener("DOMContentLoaded", async () => {
    let products = [];
    try {
        products = await getProducts();
    } catch (error) {
        console.log(error);
    }
    console.log(products);
    html(cards, products)
})

async function getProducts() {
    const res = await fetch("https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products")
    const data = await res.json();
    return data
}

function randomBgImage() {
    return `background-image: url(https://picsum.photos/400?random=${Math.floor(
        Math.random() * 20
    )})`
}

function html(tag, list) {
    tag.innerHTML = list.map(item => {
        return `
        <div class="card" style="${randomBgImage()}">
        <div class="badge">${item.colorVariant}</div>
        <h3 class="title">${item.name}</h3>
        <p class="price">
          <span class="currency">$</span>${item.price.toFixed(2)}
        </p>
        <p class="description">${item.content}</p>
        <button class="view-product-button">
          View Product
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="arrow"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        </div>`
    }).join('')
}

