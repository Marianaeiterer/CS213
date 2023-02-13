function callPHP() {
    let xhttp = new XMLHttpRequest()
    let i ="";
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let dTable = "<table>" + "<th>" + "File Name " + "</th>" + "<th>" + "Type" + "</th>" + "<th>" +"CWD" + "</th>"+ "<th>" + "Action" + " </th>";
            let obj = JSON.parse(xhttp.responseText);
            
            for (i in obj) {

                dTable += "<tr>" + "<td>" + obj[i].fileName + "</td>" + "<td>" + obj[i].fileType + "</td>" +
                "<td>" + obj[i].cwd + "</td>" + "<td>" + "<button type='button' onclick='window.location=\""+ obj[i].fileName+"\"'>View file</button>" + "</td>" +"</tr>";
            }
            
            dTable += "</table>";
            document.getElementById("table").innerHTML = dTable;

        }
    }
    xhttp.open("GET", "assign10.php", true);
    xhttp.send();
}