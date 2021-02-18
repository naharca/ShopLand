// $(document).ready(function () {
//     $("button").click(function () {
//         $(this).hide();
//     });


// });


// // function compra() { let nombre = $("#input-nombre").val(); let apellido = $("#input-apellido").val(); let edad = $("#input-edad").val(); if (edad >= 18) { $("#parrafo-estadodecompra").html("COMPRA ACEPTADA"); } else { $("#parrafo-estadodecompra").html("COMPRA DENEGADA"); } }

const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);

});



const shoppingCartItemsContainer = document.querySelector(
    '.shoppingCartItemsContainer'
);

function addToCartClicked(e) {
    const button = e.target;
    const item = button.closest('.item');

    const itemImage = item.querySelector('.item-image').src;
    const itemTitle = item.querySelector('.item-title').textContent;
    // const itemBrand = item.querySelector('.item-brand').textContent;
    // const itemFabric = item.querySelector('.item-fabric').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    // const itemStock = item.querySelector('.item-stock').textContent;

    addItemToShoppingCart(itemImage,itemTitle,itemPrice);


}

function addItemToShoppingCart(itemImage, itemTitle, itemPrice,) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
        'shoppingCartItemTitle'
    );
    for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
            let elementQuantity = elementsTitle[
                i
            ].parentElement.parentElement.parentElement.querySelector(
                '.shoppingCartItemQuantity'
            );
            elementQuantity.value++;
            $('.toast').toast('show'); //ojo con este toast, es algo de bs
            updateShoppingCartTotal();
            return;
        }
    }


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
                 <th scope="col">Total</th>
                 <th scope="col">Actions</th>
                 </tr>
               </thead>
                <tbody>
                   <tr>
                      <td class="w-25">
                          <img src=${itemImage} class="img-fluid img-thumbnail" alt="Sheep">
                      </td>
                     <td class="shoppingCartItemTitle">${itemTitle} </td>
                     <td class="shoppingCartItemPrice">${itemPrice} </td>
                     <td class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                     <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1"></td>
                     
             
                     <button class="btn btn-primary btn-sm buttonDelete" type="button">X</button>
          
                    </tr>
                </tbody>
            </table>
            <div class="row">
                <div class="col-12">
                    <div class="shopping-cart-total d-flex align-items-center">
                        <p class="mb-0 ml-4 shoppingCartTotal">$</p>

                    </div>        

                </div>           

            </div>               

           <div class="modal-footer border-top-0 d-flex justify-content-between">
                   <button type="button" class="btn btn-secondary btn-primary" data-dismiss="modal">Close</button>
                   <button type="button" class="btn btn-success btn-primary">Checkout</button>
          </div>
               
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

    updateShoppingCartTotal();
}

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

// desafío aplicando Jquery//
  $(document).ready(function(){
    $(".new-style").hover(function(){
        $(this).css("background-color", "grey");
    });

    $("#sampleCard").click(function(){
     $(this).css("margin", "30rem");
    });

    $(".button-1").click(function(){
        $(this).css("background-color", "red");
        
    });

    $(".button-2").focus(function(){
     $(this).hide(".button-2");
    });

    $(".my-title").offset(function(){
        $(this).css("margin-top", "10rem");
    });

    
});
