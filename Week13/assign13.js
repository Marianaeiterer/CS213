const form = document.getElementById("form");
var error_location = document.getElementById('error_location');
var error_room = document.getElementById('error_room');
var error_time = document.getElementById('error_time');
var error_name = document.getElementById("error_name");
var error_Lname = document.getElementById("error_lname");
var error_id = document.getElementById("error_id");
var error_name2 = document.getElementById("error_name2");
var error_Lname2 = document.getElementById("error_lname2");
var error_id2 = document.getElementById("error_id2");

const clear_button = document.getElementById("clear");

function is_select(select) {

    if (select.value == "Duet") {
        document.getElementById('display').style.display = "block";
        document.getElementById("first_name_2").style.borderColor = "red";
        document.getElementById("last_name_2").style.borderColor = "red";
        document.getElementById("student_id_2").style.borderColor = "red";
        document.getElementById("first_name_2").required = true;
        document.getElementById("last_name_2").required = true;
        document.getElementById("student_id_2").required = true;

    } else {
        document.getElementById('display').style.display = "none";
        document.getElementById("first_name_2").required = false;
        document.getElementById("last_name_2").required = false;
        document.getElementById("student_id_2").required = false;
    }

}
function validate_location() {
    let erros = [];

    var location = document.getElementById("location").value;

    if (location == "") {
        erros.push("This field cannot be left blank");
    } else if (!(isNaN(location))) {
        erros.push("Building must be letters");
    }
    if (erros.length > 0) {
        error_location.innerText = erros.join(',');
        document.getElementById("location").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("location").style.borderColor = "rgb(57, 206, 131)";
        error_location.innerText = "";
        return true;
    }
}
function validate_room() {
    let erros = [];

    var room = document.getElementById("room").value;

    if (room == "") {
        erros.push("This field cannot be left blank");
    }
    if (erros.length > 0) {
        error_room.innerText = erros.join(',');
        document.getElementById("room").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("room").style.borderColor = "rgb(57, 206, 131)";
        error_room.innerText = "";
        return true;
    }
}
function validate_time() {
    let erros = [];

    var time = document.getElementById("time_slot").value;

    if (time == "") {
        erros.push("This field cannot be left blank");
    } else if (!("08" <= time && time <= "18")) {
        erros.push("The time should be between 8:00 and 18:00");
    }
    if (erros.length > 0) {
        error_time.innerText = erros.join(',');
        document.getElementById("time_slot").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("time_slot").style.borderColor = "rgb(57, 206, 131)";
        error_time.innerText = "";
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
    } else if (!(isNaN(last_name))) {
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
function validate_id() {
    let erros = [];

    var student_id = document.getElementById("student_id").value;

    if (student_id == "") {
        erros.push("This field cannot be left blank");
    }
    if (erros.length > 0) {
        error_id.innerText = erros.join(',');
        document.getElementById("student_id").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("student_id").style.borderColor = "rgb(57, 206, 131)";
        error_id.innerText = "";
        return true;
    }
}
function validate_name2() {

    let erros = [];

    var first_name = document.getElementById("first_name_2").value;

    if (first_name == "") {
        erros.push("This field cannot be left blank");
    } else if (!(isNaN(first_name))) {
        erros.push("First Name must be letters");
    }
    if (erros.length > 0) {
        error_name2.innerText = erros.join(',');
        document.getElementById("first_name_2").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("first_name_2").style.borderColor = "rgb(57, 206, 131)";
        error_name2.innerText = "";
        return true;
    }
}
function validate_lname2() {

    let erros = [];

    var last_name = document.getElementById("last_name_2").value;

    if (last_name == "") {
        erros.push("This field cannot be left blank");
    } else if (!(isNaN(last_name))) {
        erros.push("Last Name must be letters");
    }
    if (erros.length > 0) {
        error_Lname2.innerText = erros.join(',');
        document.getElementById("last_name_2").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("last_name_2").style.borderColor = "rgb(57, 206, 131)";
        error_Lname2.innerText = "";
        return true;
    }
}
function validate_id2() {
    let erros = [];

    var student_id = document.getElementById("student_id_2").value;

    if (student_id == "") {
        erros.push("This field cannot be left blank");
    }
    if (erros.length > 0) {
        error_id2.innerText = erros.join(',');
        document.getElementById("student_id_2").style.borderColor = "red";
        return false;

    } else {

        document.getElementById("student_id_2").style.borderColor = "rgb(57, 206, 131)";
        error_id2.innerText = "";
        return true;
    }
}

function getFocus_location() {
    document.getElementById("location").focus();
}
function getFocus_room() {
    document.getElementById("room").focus();
}
function getFocus_time_slot() {
    document.getElementById("time_slot").focus();
}
function getFocus_first_name() {
    document.getElementById("first_name").focus();
}
function getFocus_last_name() {
    document.getElementById("last_name").focus();
}
function getFocus_student_id() {
    document.getElementById("student_id").focus();
}
function getFocus_first_name2() {
    document.getElementById("first_name_2").focus();
}
function getFocus_last_name2() {
    document.getElementById("last_name_2").focus();
}
function getFocus_student_id2() {
    document.getElementById("student_id_2").focus();
}

function validate() {

    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var student_id = document.getElementById("student_id").value;
    var location = document.getElementById("location").value;
    var room = document.getElementById("room").value;
    var time = document.getElementById("time_slot").value;

    if (location == "" && room == "" && time == "" && first_name == "" && last_name == "" && student_id == "") {
        validate_location();
        getFocus_location();
        return false;
    } else if (validate_location == false) {
        validate_location();
        getFocus_location();
        e.preventDefault();
        return false;
    } else if (validate_room() == false) {
        validate_room();
        getFocus_room();
        e.preventDefault();
        return false;
    } else if (validate_time() == false) {
        validate_time();
        getFocus_time_slot();
        e.preventDefault();
        return false;
    } else if (validate_name() == false) {
        validate_name();
        getFocus_first_name();
        e.preventDefault();
        return false;
    } else if (validate_lname() == false) {
        validate_lname();
        getFocus_last_name();
        e.preventDefault();
        return false;
    } else if (validate_id() == false) {
        validate_id();
        getFocus_student_id();
        e.preventDefault();
        return false;
    }
    if (document.getElementById('display').style.display == "block") {
        if (validate_name2() == false) {
            validate_name2();
            getFocus_first_name2();
            e.preventDefault();
            return false;
        }
        if (validate_lname2() == false) {
            validate_lname2();
            getFocus_last_name2();
            e.preventDefault();
            return false;
        }
        if (validate_id2() == false) {
            validate_id2();
            getFocus_student_id2();
            e.preventDefault();
            return false;
        }
    }
    error_location.innerText = "";
    error_room.innerText = "";
    error_time.innerText = "";
    error_name.innerText = "";
    error_Lname.innerText = "";
    error_id.innerText = "";
    error_name2.innerText = "";
    error_Lname2.innerText = "";
    error_id2.innerText = "";
    form.addEventListener("submit");
    return true;

}

clear_button.addEventListener("click", (e) => {
    error_location.innerText = "";
    error_room.innerText = "";
    error_time.innerText = "";
    error_name.innerText = "";
    error_Lname.innerText = "";
    error_id.innerText = "";
    error_name2.innerText = "";
    error_Lname2.innerText = "";
    error_id2.innerText = "";
    document.getElementById("location").style.borderColor = "red";
    document.getElementById("room").style.borderColor = "red";
    document.getElementById("time_slot").style.borderColor = "red";
    document.getElementById("first_name").style.borderColor = "red";
    document.getElementById("last_name").style.borderColor = "red";
    document.getElementById("student_id").style.borderColor = "red";
    document.getElementById("first_name_2").style.borderColor = "red";
    document.getElementById("last_name_2").style.borderColor = "red";
    document.getElementById("student_id_2").style.borderColor = "red";
    getFocus_location();
    is_select('Solo');
    
});


function PHPFile() {

    let xhttp = new XMLHttpRequest();
    var data = new FormData(document.getElementById('form'));
    let i = "";
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let obj = JSON.parse(xhttp.responseText);
            if (obj == null) {
                document.getElementById("output").innerHTML = "Be the first to register to our Festival!";
            } else {
                let dTable = "<table>" + "<th>" + "Name " + "</th>" +  "<th>" + "ID" + "</th>" + "<th>" + "Location" + "</th>" + "<th>" + "Time" + "</th>" + "<th>" + "Performance" + " </th>";

                for (i in obj) {
                    
                    if(obj[i].performance == "Duet")
                    {
                        dTable += "<tr>" + "<td>" + obj[i].first_name + " " + obj[i].last_name + " and " + "<br>" + obj[i].first_name_2 + " " + obj[i].last_name_2  + "</td>" + "<td>" + obj[i].id + "<br>" + obj[i].id_2 +  "</td>" + "<td>" + obj[i].location + "<br>" + "Room " + obj[i].room + "</td>" +
                        "<td>" + obj[i].time + "</td>" + "<td>" + obj[i].performance + " for" + "<br>" + obj[i].skill + " " + obj[i].instrument + " and " + "<br>" +  obj[i].skill_2 + " " + obj[i].instrument_2 + "</td>" + "</tr>";
                    }
                    else{
                        dTable += "<tr>" + "<td>" + obj[i].first_name + " " + obj[i].last_name + "</td>" + "<td>" + obj[i].id + "</td>" + "<td>" + obj[i].location + "<br>" + "Room " + obj[i].room + "</td>" +
                        "<td>" + obj[i].time + "</td>" + "<td>" + obj[i].performance + " for" + "<br>" + obj[i].skill + " " + obj[i].instrument + "</td>" + "</tr>";
                    }
                    
                }
                dTable += "</table>";
                document.getElementById("output").innerHTML = dTable;
                form.reset();
                document.getElementById("location").style.borderColor = "red";
                document.getElementById("room").style.borderColor = "red";
                document.getElementById("time_slot").style.borderColor = "red";
                document.getElementById("first_name").style.borderColor = "red";
                document.getElementById("last_name").style.borderColor = "red";
                document.getElementById("student_id").style.borderColor = "red";
                document.getElementById("first_name_2").style.borderColor = "red";
                document.getElementById("last_name_2").style.borderColor = "red";
                document.getElementById("student_id_2").style.borderColor = "red";
                is_select('Solo');
            }
        }
    }
    xhttp.open("POST", "assign13.php", true);
    xhttp.send(data);

    return false;
}
