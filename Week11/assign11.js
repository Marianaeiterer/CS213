const form = document.getElementById("form");
var errorElement = document.getElementById('error');
var error_Element = document.getElementById('error2');
var error_name = document.getElementById("error_name");
var error_Lname = document.getElementById("error_lname");
var error_phone = document.getElementById("error_phone");
var error_card = document.getElementById("error_card");
const input_button = document.getElementById("validate");
const reset_button = document.getElementById("reset");
const phone = document.getElementById("phone");
const credit_card = document.getElementById("credit_card");
const expiration_date = document.getElementById("exp_date");

function is_checked(){
    let total = 0;
    var item_0 = document.getElementById("item_0").checked;
    var item_1 = document.getElementById("item_1").checked;
    var item_2 = document.getElementById("item_2").checked;
    var item_3 = document.getElementById("item_3").checked;
    var price_0 = parseFloat(document.getElementById("item_0").value);
    var price_1 = parseFloat(document.getElementById("item_1").value);
    var price_2 = parseFloat(document.getElementById("item_2").value);
    var price_3 = parseFloat(document.getElementById("item_3").value);
    if(item_0 == false && item_1 == false && item_2 == false  && item_3 == false){
        document.getElementById("total").value = "";
        return false;
    }
    if(item_0 == true){
        total += price_0;
    }
    if(item_1){
        total += price_1;
    }
    if(item_2){
        total += price_2;
    }
    if(item_3){
        total += price_3;
    }
    if(total > 0){
        document.getElementById("total").value = '$' + total;
        return true;
    }

}
function validate_name() {

    let erros = [];

    var first_name = document.getElementById("first_name").value;

    if (first_name == "") {
        erros.push("This field cannot be left blank");
    } else if (!(isNaN(first_name))) {
        erros.push("First Name must be letters");
    }
    if (erros.length > 0) {
        error_name.innerText = erros.join(',');
        document.getElementById("first_name").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("first_name").style.borderColor = "rgb(57, 206, 131)";
        error_name.innerText = "";
        return true;
    }

}


function validate_lname() {

    let erros = [];

    var last_name = document.getElementById("last_name").value;

    if (last_name == "") {
        erros.push("This field cannot be left blank");
    }else if (!(isNaN(last_name))) {
        erros.push("Last Name must be letters");
    }
    if (erros.length > 0) {
        error_Lname.innerText = erros.join(',');
        document.getElementById("last_name").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("last_name").style.borderColor = "rgb(57, 206, 131)";
        error_Lname.innerText = "";
        return true;
    }

}

function validate_address() {

    let erros = [];

    var address = document.getElementById("address").value;

    if (address == "") {
        erros.push("Address is required");
    }
    if (erros.length > 0) {
        errorElement.innerText = erros.join(',');
        document.getElementById("address").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("address").style.borderColor = "rgb(57, 206, 131)";
        errorElement.innerText = "";
        return true;
    }

}

phone.addEventListener("input", function (event) {
    let erros = [];

    if (phone.validity.patternMismatch) {
        erros.push("Phone number must be in the following format 208-555-5555");
    }
    if (erros.length > 0) {
        error_phone.innerText = erros.join(',');
        return false;

    } else {
        error_phone.innerText = "";
        return true;
    }

});

credit_card.addEventListener("input", function (event) {
    let erros = [];

    if (credit_card.validity.patternMismatch) {
        erros.push("Credit Card must be in the following format 1111 1111 1111 1111");
    }
    if (erros.length > 0) {
        error_card.innerText = erros.join(',');
        return false;

    } else {
        error_card.innerText = "";
        return true;
    }

});

expiration_date.addEventListener("input", function (event) {
    let erros = [];

    if (expiration_date.validity.patternMismatch) {
        erros.push("Please check your card expiration date");
    }
    if (erros.length > 0) {
        error_Element.innerText = erros.join(',');
        return false;

    } else {
        error_Element.innerText = "";
        return true;
    }

});

function getFocus_first_name() {
    document.getElementById("first_name").focus();
}
function getFocus_last_name() {
    document.getElementById("last_name").focus();
}
function getFocus_phone() {
    document.getElementById("phone").focus();
}
function getFocus_address() {
    document.getElementById("address").focus();
}
function getFocus_card() {
    document.getElementById("credit_card").focus();
}
function getFocus_date() {
    document.getElementById("exp_date").focus();
}


input_button.addEventListener("click", (e) => {
    let erros = [];
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var address = document.getElementById("address").value;

    if (first_name == "" && last_name == "" && address == "" && expiration_date.validity && credit_card.validity && expiration_date.validity) {
        validate_name();
        getFocus_first_name();
        e.preventDefault();
        return false;
    }else if (first_name == "") {
        validate_name();
        getFocus_first_name();
        e.preventDefault();
        return false;   
    } else if (validate_name() == false) {
        validate_name();
        getFocus_first_name();
        e.preventDefault();
        return false;
    } else if (last_name == "") {
        validate_lname();
        getFocus_last_name();
        e.preventDefault();
        return false;
    }else if (validate_lname() == false) {
        validate_lname();
        getFocus_last_name();
        e.preventDefault();
        return false;
    } else if (phone.validity.valueMissing) {
        erros.push("This field cannot be left blank");
        error_phone.innerText = erros.join(',');
        getFocus_phone();
        e.preventDefault();
        return false;
    } else if (phone.validity.patternMismatch) {
        erros.push("Please check your phone number");
        error_phone.innerText = erros.join(',');
        getFocus_phone();
        e.preventDefault();
        return false;
    } else if (address == "") {
        validate_address();
        getFocus_address();
        e.preventDefault();
        return false;
    }else if (credit_card.validity.valueMissing) {
        erros.push("This field cannot be left blank");
        error_card.innerText = erros.join(',');
        getFocus_card();
        e.preventDefault();
        return false;
    }else if (credit_card.validity.patternMismatch) {
        erros.push("Please check your card number");
        error_card.innerText = erros.join(',');
        getFocus_card();
        e.preventDefault();
        return false;
    }else if (expiration_date.validity.valueMissing) {
        erros.push("This field cannot be left blank");
        error_Element.innerText = erros.join(',');
        getFocus_date();
        e.preventDefault();
        return false;
    }else if (expiration_date.validity.patternMismatch) {
        erros.push("Please check your card expiration date");
        error_Element.innerText = erros.join(',');
        getFocus_date();
        e.preventDefault();
        return false;
    }
    errorElement.innerText = "";
    error_Element.innerText = "";
    error_card.innerText = "";
    error_name.innerText = "";
    error_Lname.innerText = "";
    error_phone.innerText = "";
    return true;

});

form.addEventListener("reset", (e) => {
    errorElement.innerText = "";
    error_Element.innerText = "";
    error_name.innerText = "";
    error_Lname.innerText = "";
    error_card.innerText = "";
    error_phone.innerText = "";
    document.getElementById("address").style.borderColor = "red";
    document.getElementById("last_name").style.borderColor = "red";
    document.getElementById("first_name").style.borderColor = "red";
    getFocus_first_name();
});

