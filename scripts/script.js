let cart = [];

class Product {
    constructor(
        productType,
        productBrand,
        productFabric,
        productPrice,
        productStock,
        productPicture
    ) {
        this.type = productType;
        this.brand = productBrand;
        this.fabric = productFabric;
        this.price = productPrice;
        this.stock = productStock;
        this.picture = productPicture;
    }

    showTheProducts() {
        document.getElementById("chart").innerHTML = `
        <div> 
        <h2> This Are Our Products </h2>
        <p>${this.type}</p>
        <p>${this.brand}</p>
        <p>${this.fabric}</p>
        <p>${this.price}</p>
        <p>${this.stock}</p>
        <p>${this.picture}</p>
        </div>`;
    }
}

let dataBase = []

let productShirtOne = new Product('T-Shirt', 'Showcase', 'Cotton', 850, 15, "https://i.pinimg.com/236x/49/6a/8c/496a8c050d0a86d1cb7173d4123c40c4.jpg");
let productShirtTwo = new Product('T-Shirt', 'Xtreme', 'Cotton', 1200, 35, "https://i.pinimg.com/236x/c2/e8/5b/c2e85bd243a2bff4b587726524470418.jpg");
let productJean = new Product('Jean', 'Comfy Jeans', 'Denim', 2350, 10, "https://i.pinimg.com/236x/07/41/ee/0741eed21386e0a53895b3f66e224eed.jpg");
let productSkirt = new Product('Skirt', 'Levis', 'Organic Leather', 2800, 16, "https://i.pinimg.com/236x/f2/6f/61/f26f61b72d0e9768fdcaf44f2999c12a.jpg");
let productJacket = new Product('Jacket', 'Bomb', 'Mixed', 2400, 3, "https://i.pinimg.com/236x/7a/ff/ef/7affeff3c66b28d23343f7ade96e1136.jpg");
let productJacketTwo = new Product('Jacket', 'Awesome', 'Leather', 5400, 6, "https://i.pinimg.com/236x/04/16/03/041603c21dabc8b6d576c16c334f172b.jpg");


dataBase.push(productShirtOne);
dataBase.push(productShirtTwo);
dataBase.push(productJean);
dataBase.push(productSkirt);
dataBase.push(productJacket);
dataBase.push(productJacketTwo);


let aux = ``;
for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].stock > 0) {

        aux += `
    
    <div class="row col-lg-3 col-md-6 mb-4 align-self-center">
    <div class="card h-100">
    <img class="card-img-top" src="${dataBase[i].picture}" alt="Product Picture" class="img-fluid" height="300px" width="354px">
    <div class="card-body">
    <h1 class="card-title">${dataBase[i].type}</h1>
    <h2 class="card-brand">${dataBase[i].brand}</h2>
    <h3 class="card-fabric">${dataBase[i].fabric}</h3>
    <h3 class="card-price">${dataBase[i].price}</h3>
    <h3 class="card-stock">${dataBase[i].stock}</h3>
    </div>
    <div class="card-footer">
    <a href="#" class="btn btn-primary" onclick='addToTheCart(${JSON.stringify(dataBase[i])})'>Add to the Cart</a>
    </div>
    </div>
    </div>
    `;
    }

}
document.getElementById("products").innerHTML = aux;

// VAlidación del storage//

if (localStorage.getItem("cart") != null) {
    console.log("Get into validation");
    let cartValues = JSON.parse(localStorage.getItem("cart"));
    cart = cartValues;
}
// VAlidación del storage//

function addToTheCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    let aux = 0;
    for (let i = 0; i < cart.length; i++) {
        aux += cart[i].price;
    }
    document.getElementById("totalPrice").innerHTML = aux;
}

// function deleteAProduct() {
//     const newCart[];
//     for (let i = 0; i < cart.length; i++) {
//         if (i != 1) {
//             newCart.push(cart[i]);

//         }

//     }
//     localStorage.setItem("cart", JSON.stringify(newCart));

// hacer lo de la linea del storage en la 1era linea de codigo y lo otro que falta min 48 clase 09 toto
// }

