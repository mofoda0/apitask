async function FetchAPI(){
    const productsCo = document.getElementById("products");
    try{
        const apifetch = await fetch("https://fakestoreapi.com/products");
        const products = await apifetch.json();
        products.forEach(product => {
            productsCo.innerHTML = productsCo.innerHTML + 
            `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.title}" />
                    <h3>${product.title}</h3>
                    <p>${product.description.substring(0, 100)}</p>
                    <p>${product.rating.rate} ⭐ (${product.rating.count} reviews)</p>
                    <div class="price">$${product.price}</div>
                </div>
            `;
        });
    }catch(error){
        console.error("Error", error);
    }
}
FetchAPI();
