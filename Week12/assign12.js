const start_state = document.getElementById("startState");
const end_state = document.getElementById("endState");
var error_startcity = document.getElementById('error_startcity');
var error_startstate = document.getElementById('error_startstate');
var error_endcity = document.getElementById('error_endcity');
var error_endstate = document.getElementById('error_endstate');
var errorElement = document.getElementById("error");
const reset_button = document.getElementById("clear");


function validate_startcity() {

    let erros = [];

    var start_city = document.getElementById("startCity").value;

    if (!isNaN(start_city)) {
        erros.push("City is not a number");

    } else if (start_city == "") {
        erros.push("City is required");
    }
    if (erros.length > 0) {
        error_startcity.innerText = erros.join(',');
        document.getElementById("startCity").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("startCity").style.borderColor = "rgb(57, 206, 131)";
        error_startcity.innerText = "";
        return true;
    }

}

function validate_endcity() {

    let erros = [];

    var end_city = document.getElementById("endCity").value;

    if (!isNaN(end_city)) {
        erros.push("City is not a number");

    } else if (end_city == "") {
        erros.push("City is required");
    }
    if (erros.length > 0) {
        error_endcity.innerText = erros.join(',');
        document.getElementById("endCity").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("endCity").style.borderColor = "rgb(57, 206, 131)";
        error_endcity.innerText = "";
        return true;
    }

}

start_state.addEventListener("input", function (event) {
    let erros = [];

    if (start_state.validity.patternMismatch) {
        erros.push("State must be letters in the folloing format UT");
    }
    if (erros.length > 0) {
        error_startstate.innerText = erros.join(',');
        return false;

    } else {
        error_startstate.innerText = "";
        return true;
    }

});

end_state.addEventListener("input", function (event) {
    let erros = [];

    if (end_state.validity.patternMismatch) {
        erros.push("State must be letters in the folloing format UT");
    }
    if (erros.length > 0) {
        error_endstate.innerText = erros.join(',');
        return false;

    } else {
        error_endstate.innerText = "";
        return true;
    }

});
function getFocus_startcity() {
    document.getElementById("startCity").focus();
}
function getFocus_endCity() {
    document.getElementById("endCity").focus();
}
function getFocus_startState() {
    document.getElementById("startState").focus();
}
function getFocus_endState() {
    document.getElementById("endState").focus();
}


function validate() {

    let erros = [];
    var start_city = document.getElementById("startCity").value;
    var end_city = document.getElementById("endCity").value;

    if (start_city == "" && end_city == "" && start_state.validity && end_state.validity) {
        validate_startcity();
        getFocus_startcity();
        e.preventDefault();
        return false;
    } else if (start_city == "") {
        validate_startcity();
        getFocus_startcity();
        e.preventDefault();
        return false;
    } else if (validate_startcity() == false) {
        validate_startcity();
        getFocus_startcity();
        e.preventDefault();
        return false;
    } else if (start_state.validity.valueMissing) {
        erros.push("This field cannot be left blank");
        error_startstate.innerText = erros.join(',');
        getFocus_startState();
        e.preventDefault();
        return false;
    } else if (start_state.validity.patternMismatch) {
        erros.push("Please check the state");
        error_startstate.innerText = erros.join(',');
        getFocus_startState();
        e.preventDefault();
        return false;
    } else if (end_city == "") {
        validate_endcity();
        getFocus_endCity();
        e.preventDefault();
        return false;
    } else if (validate_endcity() == false) {
        validate_endcity();
        getFocus_endCity();
        e.preventDefault();
        return false;
    } else if (end_state.validity.valueMissing) {
        erros.push("This field cannot be left blank");
        error_endstate.innerText = erros.join(',');
        getFocus_endState();
        e.preventDefault();
        return false;
    } else if (end_state.validity.patternMismatch) {
        erros.push("Please check the state");
        error_endstate.innerText = erros.join(',');
        getFocus_endState();
        e.preventDefault();
        return false;
    }
    errorElement.innerText = "";
    error_startcity.innerText = "";
    error_endcity.innerText = "";
    error_startstate.innerText = "";
    error_endstate.innerText = "";
    calculate();
    return true;

}

reset_button.addEventListener("click", (e) => {
    errorElement.innerText = "";
    error_startcity.innerText = "";
    error_startstate.innerText = "";
    error_endcity.innerText = "";
    error_endstate.innerText = "";
    document.getElementById("startCity").style.borderColor = "red";
    document.getElementById("endCity").style.borderColor = "red";
    document.getElementById("output").innerHTML = "";
    getFocus_startcity();
});


function calculate() {
    var xhttp = new XMLHttpRequest();
    var start_city = document.getElementById("startCity").value;
    var end_city = document.getElementById("endCity").value;
    var start_state = document.getElementById("startState").value;
    var end_state = document.getElementById("endState").value;

    var locationString = "startCity=" + start_city + "&startState=" + start_state + "&endCity=" + end_city + "&endState=" + end_state;

    var url = "/cgi-bin/cs213/mileageAjaxJSON?" + locationString;
    var i = "";
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var obj = JSON.parse(this.responseText);
            var x;
            if (obj.trip.miles == "Unknown") {
                x = "Sorry! We are unable to determine the distance between " + start_city + " and " + end_city;
            }
            else {
                x = "Travel from " + obj.trip.startcity + "," + obj.trip.startstate + " to " + obj.trip.endcity + "," + obj.trip.endstate + " will be " + obj.trip.miles + " miles" + "<br>" +
                    "You can travel by: " + "<ul>";


                for (i in obj.trip.tmode) {
                    x += "<li>" + obj.trip.tmode[i] + "</li>";

                }
                x += "</ul>";
            }
            document.getElementById("output").innerHTML = x;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}