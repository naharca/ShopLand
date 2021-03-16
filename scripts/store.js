$(document).ready(function () {
    generateDB();
});

// 2. Guardar y obtener la lista del local storage

// Storage Validation---rhacer de nuevo
// let cart = [];

// if (localStorage.getItem('cart') != null) {
//     let cartValues = JSON.parse(localStorage.getItem('cart'));
//     cart = cartValues;

// }

// function addToCartClicked() {
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// Storage Validation

//Constructor
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


}
//Constructor

//Objects Arays

let dataBase = []

//AJAX Called from .json archieve with GET method
//data.json contains json objects

function generateDB() {
    $.get("../data/data.json", function (data, status) {
        dataBase = data;
        for (let i = 0; i < dataBase.length; i++) {
            add2DB(i);

        }
    });


}

//Generation of HTML div store called with JS - product cards
let aux = ``;
function add2DB(i) {
    aux += `
    <div class="row col-lg-3 col-md-6 mb-4 align-self-center">
    <div class="item card h-100">
    <img class="item-image card-img-top" src="${dataBase[i].product_picture}" alt="Product Picture" class="img-fluid" height="300px" width="354px">
    <div class="card-body">
    <h1 class="item-title">${dataBase[i].product_type}</h1>
    <h5 class="item-brand"><p>${dataBase[i].product_brand}</p></h5>
    <h4 class="item-fabric"><p class="product-fabric">Fabric:    <strong>${dataBase[i].product_fabric}</strong></p></h4>
    <h3 class="item-price"><p class="product-items">$           <strong> ${dataBase[i].product_price}</strong></p></h3>
    <h3 class="item-stock"><p class="product-stock">Stock:       <strong> ${dataBase[i].product_stock}</strong></p></h3>
    </div>
    <div class="card-footer">
    <button onclick="addToCartClicked(${i})" class="btn btn-primary btn-success addToCart" data-toggle="modal" data-target="#cartModal">Add to the Cart</button>
    </div>
    </div>
    </div>
    `;

 //showing products cards on store section 
    $("#products").html(aux);



}




