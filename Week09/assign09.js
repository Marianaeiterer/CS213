function loadDoc(file){
 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
          if(file=='canada.txt'){
            document.getElementById("table1").innerHTML = this.response;
            document.getElementById("table2").innerHTML = "";
            document.getElementById("table3").innerHTML = "";
            document.getElementById("table").innerHTML = "";
          }
          else if (file=='usa.txt'){
            document.getElementById("table2").innerHTML = "";
            document.getElementById("table3").innerHTML = "";
            document.getElementById("table1").innerHTML = "";
            document.getElementById("table").innerHTML = this.response;
          }
          else if (file=='mexico.txt'){
            document.getElementById("table1").innerHTML = "";
            document.getElementById("table3").innerHTML = "";
            document.getElementById("table").innerHTML = "";
            document.getElementById("table2").innerHTML = this.response;
          }
          else if (file=='russia.txt'){
            document.getElementById("table2").innerHTML = "";
            document.getElementById("table1").innerHTML = "";
            document.getElementById("table").innerHTML = "";
            document.getElementById("table3").innerHTML = this.response;
          }
          
    }
  };
  xhttp.open("GET", file , true);
  xhttp.send();
}

function get_file() {
  let xhttp = new XMLHttpRequest();
  let file = document.getElementById("students").value;
  
  let i, j, y = "";
  let x = "";
  
  xhttp.onreadystatechange = function() {
    if(!file){
      document.getElementById("error2").innerHTML = "Please enter a valid file";
      document.getElementById("output").innerHTML = "";
      document.getElementById("error").innerHTML="";
  
    }else if (xhttp.readyState == 4 && xhttp.status == 404){
      document.getElementById("error").innerHTML = "This file does not exist";
      document.getElementById("output").innerHTML = "";
      document.getElementById("error2").innerHTML = "";
    }else if (xhttp.readyState == 4 && xhttp.status == 200) {            
      
      let obj = JSON.parse(xhttp.responseText);
          
      for (i in obj.students) {
        x += "Name: " + obj.students[i].first + " " + obj.students[i].last + "<br>Address: ";
         
        for (j in obj.students[i].address) {
          y += obj.students[i].address[j] + " ";
        }
        x += y + "<br>";
        y = "";
        x += "Major: " + obj.students[i].major + "<br>GPA: " + obj.students[i].gpa + "<br><br>";
      }
      document.getElementById("output").innerHTML = x;
      document.getElementById("error").innerHTML="";
      document.getElementById("error2").innerHTML = "";
    }
  };
  
  xhttp.open("GET", file, true);
  xhttp.send();

}