fetch("https://fake-coffee-api.vercel.app/api")
  .then((res) => res.json())
  .then((data) => displayProducts(data));

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = ''; // Clear the container

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // Check if the image URL is valid
        const productImage = product.image 
            ? product.image.startsWith('http') 
                ? product.image 
                : `https://fake-coffee-api.vercel.app${product.image}` // Assuming the base URL
            : 'https://via.placeholder.com/200'; // Placeholder if image is missing

        productCard.innerHTML = `
            <img src="${productImage}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
        `;

        productContainer.appendChild(productCard);
    });
}
