let cart = [];


//Adding element to shopping cart

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);

});

const shoppingCartItemsContainer = document.querySelector(
  '.shoppingCartItemsContainer'
);


function addToCartClicked(item) {
  const itemImage = dataBase[item].product_picture;
  const itemTitle = dataBase[item].product_type;
  const itemPrice = dataBase[item].product_price;

  //Local Storage request
  const jsonStorage = localStorage.getItem("dataCart");
  const storageList = JSON.parse(jsonStorage);

  if (storageList) {
    addItemToLocalStorage([...storageList, dataBase[item]]);

  } else {
    addItemToLocalStorage([dataBase[item]]);
  }

  addItemToShoppingCart(itemImage, itemTitle, itemPrice);

}

//Sending client selection to LocalStorage
function addItemToLocalStorage(objeto) {
  if (localStorage.getItem("dataCart") == null) {
    localStorage.setItem("dataCart", JSON.stringify(objeto));

  } else {
    let newDataStorage = JSON.stringify(objeto);
    localStorage.setItem("dataCart", newDataStorage);
  }

}


//adding item to shopping cart
function addItemToShoppingCart(itemImage, itemTitle, itemPrice,) {
  const elementsTitle = $(
    '.shoppingCartItemTitle'
  );

  for (let i = 0; i < elementsTitle.length; i++) {
    if (elementsTitle[i].innerText === itemTitle) {
      let elementQuantity = elementsTitle[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      return;
    }
  }

  //Generation of HTML cart div cart called from JS document 
  const shoppingCartRow = document.createElement('div');
  const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="modal-body">
          <table class="table table-image">
             <thead>
                 <tr>
                     <th scope="col"></th>
                     <th scope="col">Product</th>
                     <th scope="col">Price</th>
                     <th scope="col">Qty</th>
                     <th scope="col">Delete</th>
                 </tr>
               </thead>
                <tbody>
                   <tr>
                      <td class="w-25">
                          <img src=${itemImage} class="img-fluid img-thumbnail" width= 100 alt="Product Image">
                      </td>
                     <td class="shoppingCartItemTitle">${itemTitle} </td>
                     <td class="shoppingCartItemPrice">${itemPrice} </td>
                     <td class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 pb-1 pt-2">
                     <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" 
                      value="1"></td>
                      <td>
                     <button class="btn-delete btn-primary btn-sm buttonDelete" type="button">X</button></td>
                     
                    </tr>
                </tbody>
            </table>
           
               
        </div>

    </div>`;

  shoppingCartRow.innerHTML = shoppingCartContent;
  shoppingCartItemsContainer.append(shoppingCartRow);

  shoppingCartRow
    .querySelector('.buttonDelete')
    .addEventListener('click', removeShoppingCartItem);

  shoppingCartRow
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  //Calling the updated shopping cart total
  updateShoppingCartTotal();

}

//Totalizer function & updating shopping cart total when a product has been added to the shopping cart

function updateShoppingCartTotal() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCartTotal');

  const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCartItems.forEach((shoppingCartItem) => {
    const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCartItemPrice = Number(
      shoppingCartItemPriceElement.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;


  });
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;


}

//Removoing an item from the cart 

function removeShoppingCartItem(e) {
  const buttonClicked = e.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  updateShoppingCartTotal();
}

function quantityChanged(e) {
  const input = e.target;
  input.value <= 0 ? (input.value = 1) : null;
  updateShoppingCartTotal();
}

function comprarButtonClicked() {
  shoppingCartItemsContainer.innerHTML = '';
  updateShoppingCartTotal();
}











