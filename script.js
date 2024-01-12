// Contoh data produk (dapat diambil dari database atau sumber data lainnya)
const productsData = [
    {
        name: "Kangkung",
        price: 5000,
        image: "kangkung.jpg",
    },
    {
        name: "Bayam",
        price: 6000,
        image: "bayam.jpg",
    },
    {
        name: "Wortel",
        price: 7000,
        image: "wortel.jpg",
    },
    // Tambahkan produk lainnya
];

// Fungsi untuk menampilkan produk di halaman
function displayProducts() {
    const productsContainer = document.getElementById("products");

    productsData.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        
        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;
        
        const nameElement = document.createElement("h2");
        nameElement.textContent = product.name;
        
        const priceElement = document.createElement("p");
        priceElement.textContent = `Harga: Rp ${product.price}`;

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);
        
        productsContainer.appendChild(productElement);
    });
}

// Panggil fungsi untuk menampilkan produk
displayProducts();
