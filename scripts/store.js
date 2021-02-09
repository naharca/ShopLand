let cart = [];

// Storage Validation//

if (localStorage.getItem("cart") != null) {
    console.log("Get into validation");
    let cartValues = JSON.parse(localStorage.getItem("cart"));
    cart = cartValues;
    document.getElementById("counter").innerHTML = cart.length;
}
// Storage Validation//

//Constructor//
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
//Constructor//

//Obejects Arays//

let dataBase = []

let productShirtOne = new Product('T-Shirt', 'Showcase', 'Cotton', 850, 15, "https://i.pinimg.com/236x/49/6a/8c/496a8c050d0a86d1cb7173d4123c40c4.jpg");
let productShirtTwo = new Product('T-Shirt', 'Xtreme', 'Cotton', 1200, 35, "https://i.pinimg.com/236x/c2/e8/5b/c2e85bd243a2bff4b587726524470418.jpg");
let productJean = new Product('Jean', 'Comfy Jeans', 'Denim', 2350, 10, "https://i.pinimg.com/236x/07/41/ee/0741eed21386e0a53895b3f66e224eed.jpg");
let productSkirt = new Product('Skirt', 'Levis', 'Organic Leather', 2800, 16, "https://i.pinimg.com/236x/f2/6f/61/f26f61b72d0e9768fdcaf44f2999c12a.jpg");
let productJacket = new Product('Jacket', 'Bomb', 'Mixed', 2400, 3, "https://i.pinimg.com/236x/7a/ff/ef/7affeff3c66b28d23343f7ade96e1136.jpg");
let productJacketTwo = new Product('Jacket', 'Awesome', 'Leather', 5400, 12, "https://i.pinimg.com/236x/04/16/03/041603c21dabc8b6d576c16c334f172b.jpg");


dataBase.push(productShirtOne);
dataBase.push(productShirtTwo);
dataBase.push(productJean);
dataBase.push(productSkirt);
dataBase.push(productJacket);
dataBase.push(productJacketTwo);

//Obejects Arays//


let aux = ``;
for (let i = 0; i < dataBase.length; i++) {
    if (dataBase[i].stock > 0) {

        aux += `
    
    <div class="row col-lg-3 col-md-6 mb-4 align-self-center">
    <div class="card h-100">
    <img class="card-img-top" src="${dataBase[i].picture}" alt="Product Picture" class="img-fluid" height="300px" width="354px">
    <div class="card-body">
    <h1 class="card-title">${dataBase[i].type}</h1>
    <h5 class="card-brand"><p>${dataBase[i].brand}</p></h5>
    <h4 class="card-fabric"><p class="product-fabric">Fabric:    <strong>${dataBase[i].fabric}</strong></p></h4>
    <h3 class="card-price"><p class="product-items">Precio:      <strong> ${dataBase[i].price}</strong></p></h3>
    <h3 class="card-stock"><p class="product-stock">Stock:        <strong> ${dataBase[i].stock}</strong></p></h3>
    </div>
    <div class="card-footer">
    <a href="#" class="btn btn-primary" onclick='addToTheCart(${JSON.stringify(dataBase[i])})'>Add to the Cart</a>
    </div>
    </div>
    </div>
    `;
    } else {
        aux += `
        <p>Out Of Stock</p>`;
    }

}
document.getElementById("products").innerHTML = aux;

//Add to the cart acumulator//
function addToTheCart(product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    let aux = 0;
    for (let i = 0; i < cart.length; i++) {
        aux += cart[i].price;
    }
    document.getElementById("totalPrice").innerHTML = "ARS= " + aux;
    document.getElementById("counter").innerHTML = cart.length;
}
//Add to the cart acumulator//

//Close Modal//

let modal = document.getElementById('modal-warning');
function modalWarning() {

    modal.classList.remove('hide');
    modal.classList.add('show');


}

function closeModal() {
    modal.classList.remove('show');
}

let closeWarning = document.getElementById('accept-warning');

//Close Modal//

//Enter caption to execute closing modal//
function acceptAndClose(event) {
    console.log(event.key);
    if (event.keyCode == 13) {
        modal.classList.remove('show');
    }
}
 //Enter caption to execute closing modal//





//Enter caption//















/* function deleteAProduct() {
    const newCart= [];
    for (let i = 0; i < cart.length; i++) {
        if (i != 1) {
            newCart.push(cart[i]);

    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    cart= newCart;
    document.getElementById(xxxx)
    document.getElementById("counter").innerHTML = cart.length;

} */


/*function funcion(){let pass=document.getElementById('name').value;if(pass.length<5 && pass.length!= 0){alert("la contraseña debe ser mayor a 5 caracteres");}else if(pass=="" || pass == null){alert("ingrese una contraseña");}//let ape= document.getElementById('ape').value;}*/


