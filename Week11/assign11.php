<?php

//  This function reads the form "query string"
//  
// This function handles both an http "get".
$total = $_GET['total'];
$first_name = $_GET['first_name'];
$last_name = $_GET['last_name'];
$address = $_GET['address'];
$phone = $_GET['phone'];
$exp_date = $_GET['exp_date'];
if (!empty($_GET['check_list'])) {
  // Counting number of checked checkboxes.
  $checked_count = count($_GET['check_list']);
}
if (isset($_GET['card'])) {
  $card = $_GET['card'];
}

?>

<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8" />
<title>Confirm Purchase</title>
<link type="text/css" rel="stylesheet" href="assign11.css" />
<style>
  main {
    background-color: rgba(230, 60, 148, 0.3);
    padding: 2em;
  }

  .php {
    max-width: 60%;
    background-color: #fff;
    margin: 4em auto;
    overflow: hidden;
    padding: 20px;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    line-height: 2em;
  }

  .php h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.2em;
  }
  .buttons{
    margin: 1em auto;
  }
</style>

<body>
  <header>
    <nav>
      <ul>
        <li><a href="assign11.html">Home</a></li>
        <li><a href="#">Models</a></li>
        <li><a href="#">Sales</a></li>
        <li><a href="#">Dresses</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <div class="php">
      <h3>Please Confirm the Following Information</h3>

      <?php
      print "First Name: $first_name<br />";
      print "Last Name: $last_name<br />";
      print "Adress: $address<br />";
      print "Phone: # $phone<br />";
      echo "\n";
      print "Items selected to purchase: <br />";
      // Loop to store and display values of individual checked checkbox.
      foreach ($_GET['check_list'] as $selected) {
        if($selected == 110){
          $i = 1;
        }
        if($selected == 70){
          $i = 2;
        }
        if($selected == 150){
          $i = 3;
        }
        if($selected == 90){
          $i = 4;
        }
        print "- Shoes " . "$i: $" . $selected . "<br />";
        $i++;
      }
      echo "\n";
      print "Total: $total<br />";
      print "Credit card: $card<br />";
      print "Expiration date: $exp_date<br />";
      ?>
      <form action="assign11_a.php" method="GET">
      <div class="buttons">
        <button class="button" type="submit" id="confirm" name="confirm">Confirm</button>
        <button class="button" type="submit" id="cancel" name="cancel">Cancel</button>
      </div>
      </form>
    </div>

  </main>
  <footer>
    <div class="footer">
      <p class="paragraph-footer">&copy; 2021 - Mariana Souza - CS213 - Section 4</p>

      <ul class="footer-links">
        <li class="footer-link">Contact us:</li>
        <li class="footer-link"><a href="https://www.facebook.com/" target="_blank"><img src="facebook.png" alt="Facebook Icon"></a></li>
        <li class="footer-link"><a href="https://www.instagram.com/" target="_blank"><img src="instagram.png" alt="Instagram Icon"></a></li>
        <li class="footer-link"><a href="https://www.google.com/intl/pt-BR/gmail/about/" target="_blank"><img src="gmail.png" alt="Gmail Icon"></a></li>
      </ul>
    </div>
    <div class="credits">
      <span>Photo by <a href="https://unsplash.com/@tierramallorca?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tierra
          Mallorca</a> on <a href="https://unsplash.com/s/photos/mortgage?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div>
  </footer>


</body>

</html>