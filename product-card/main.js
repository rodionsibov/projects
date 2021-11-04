async function getProducts() {
    try {
        const res = await fetch(
            "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products"
        );
        const data = await res.json();
    } catch (error) {
        console.log(error);
    }
}

const products = await getProducts()
console.log(products);