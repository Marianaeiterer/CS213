const form = document.getElementById("form");
var errorElement = document.getElementById('error');
const input_button = document.getElementById('calculate');
const reset_button = document.getElementById("clear");


function validate_apr() {

    let erros = [];

    var annualRate = document.getElementById("apr").value;

    if (isNaN(annualRate)) {
        erros.push("Rate must be a number");

    } else if (annualRate < 0 || annualRate > 25.00) {
        erros.push("Rate must be a number between 0 and 25%");

    }else if(annualRate == ""){
        erros.push("Rate is required");
    }
    if (erros.length > 0) {
        errorElement.innerText = erros.join(',');
        document.getElementById("apr").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("apr").style.borderColor = "rgb(57, 206, 131)";
        errorElement.innerText = "";
        return true;
    }

}

function validate_term() {

    let erros = [];

    var years = document.getElementById("term").value;

    if (isNaN(years)) {
        erros.push("Loan Term must be a number");

    } else if(years == ""){
        erros.push("Loan Term is required");

    }else if (!(0 < years && years <= 40)) {
        erros.push("Loan Term must be a number bigger than 0 and less or equal to 40");
    }
    if (erros.length > 0) {
        errorElement.innerText = erros.join(',');
        document.getElementById("term").style.borderColor = "red";
        return false;
    } else {

        document.getElementById("term").style.borderColor = "rgb(57, 206, 131)";
        errorElement.innerText = "";
        return true;
    }

}

function validate_amount() {

    let erros = [];

    var principal = document.getElementById("amount").value;

    if (isNaN(principal)) {
        erros.push("Loan Amount must be a number");

    }else if(principal == ""){
        erros.push("Loan Amount is required");
    }
    if (erros.length > 0) {
        errorElement.innerText = erros.join(',');
        document.getElementById("amount").style.borderColor = "red";
        return false;
    } else {

        document.getElementById("amount").style.borderColor = "rgb(57, 206, 131)";
        errorElement.innerText = "";
        return true;
    }

}
function getFocus_apr() {
    document.getElementById("apr").focus();
}
function getFocus_term() {
    document.getElementById("term").focus();
}
function getFocus_amount() {
    document.getElementById("amount").focus();
}


input_button.addEventListener("click", (e) => {
    let erros = [];

    var annualRate = document.getElementById("apr").value;
    var years = document.getElementById("term").value;
    var principal = document.getElementById("amount").value;

    if(annualRate == "" && years == "" && principal == ""){
        erros.push("Please fill all required fields");
        getFocus_apr();
    }
    else if (annualRate == "") {
        erros.push("This field cannot be left blank");
        getFocus_apr();
    } else if (validate_apr() == false) {
        erros.push("Rate must be a number between 0 and 25%");
        getFocus_apr();
    } else if (years == "") {
        erros.push("This field cannot be left blank");
        getFocus_term();
    } else if (validate_term() == false) {
        erros.push("Loan Term must be a number bigger than 0 and less or equal to 40");
        getFocus_term();
    } else if (principal == "" || validate_amount() == false) {
        erros.push("This field cannot be left blank");
        getFocus_amount();
    }
    if (erros.length > 0) {
        errorElement.innerText = erros.join(',');
        e.preventDefault();
        return false;
    }
    errorElement.innerText = "";
    doPayment();
    return true;

});

reset_button.addEventListener("click", (e) => {
    errorElement.innerText = "";
    document.getElementById("apr").style.borderColor = "red";
    document.getElementById("term").style.borderColor = "red";
    document.getElementById("amount").style.borderColor = "red";
    getFocus_apr();
});
function doPayment() {
    var years = document.getElementById("term").value;
    var principal = document.getElementById("amount").value;
    var annualRate = document.getElementById("apr").value;         //This function will display the result for the user    
    annualRate = annualRate / 100;
    //Calls the function to calculate the payment
    let months = 12;
    let result = computePayment(principal, annualRate, years, months).toFixed(2);
    document.getElementById("payment").value = "$" + result;                     //Display the message to the user

}
function computePayment(principal, annualRate, years, months) {

    let payment = ((principal * (annualRate / months)) / (1 - Math.pow(1 + (annualRate / months), -(years * months))));
    return payment;
}