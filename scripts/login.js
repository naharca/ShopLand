let inputPassword = document.getElementById("password-validation");
function validatePassword (event) {
    if (event.target.value.length < 6){
        alert("Your Password Is Too Short");
    }


}