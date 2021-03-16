//Preparing the HTML call to DOM using JQuery
$(document).ready(function () {
  mostrarCarrtito();
});

//Function to call or ask for the Local Storage saved client selection.
let itemsCartCheckout = localStorage.getItem("dataCart");

let checkout = JSON.parse(itemsCartCheckout);

//Generation of HTML div store called with JS - product selected 

let auxAcumulator = ``;
function mostrarCarrtito() {
    for (let i = 0; i< checkout.length; i++){
      
        //levantar cada item y mandarlo a pantalla.
        auxAcumulator += `
            <ul class="list-group mb-3 z-depth-1 checkoutProductItem">
                <li
                  class="list-group-item d-flex justify-content-between lh-condensed"
                >
                  <div>
                    <h6 class="my-0 d-flex justify-content-baseline">
                    ${checkout[i].product_type}
                    </h6>

                    <td class="w-25">
                      <img
                        src=${checkout[i].product_picture}
                        class="img-fluid img-thumbnail"
                        width="70"
                        alt="Product Picture"
                      />
                    </td>
                    <small class="text-muted ">${checkout[i].product_brand}</small>
                  </div>
                  <span class="text-muted checkoutProductPrice d-flex justify-content-right">${checkout[i].product_price}<strong>$</strong></span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between lh-condensed"
                ></li>

                
              </ul>
            
            
        `;
       
    }    
    //Showing products selected on checkout  
    $('#checkout').html(auxAcumulator);

    //Calling the updated shopping cart checkoyt total
    updateCheckoutCartTotal();
    
    
}

//Totalizer function & updating shopping checkout cart total 
function updateCheckoutCartTotal() {
  let checkoutTotal = 0;
  const checkoutCartTotal = document.querySelector('.checkoutCartTotal');

  const checkoutProductItems = document.querySelectorAll('.checkoutProductItem');

  checkoutProductItems.forEach((checkoutCartItem) => {
    const checkoutProductPriceItem = checkoutCartItem.querySelector(
      '.checkoutProductPrice'
    );
    const checkoutProductPrice = Number(
      checkoutProductPriceItem.textContent.replace('$', '')
    );
    
    checkoutTotal = checkoutTotal + checkoutProductPrice;
    
    
  });
  checkoutCartTotal.innerHTML = `${checkoutTotal.toFixed(2)}$`;
  

}
