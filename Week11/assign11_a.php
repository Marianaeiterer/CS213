<?php
if (isset($_GET['confirm'])) {
    $message = "Thank you! Your purchased has been confirmed!";
}
if (isset($_GET['cancel'])) {
    $message = "Your purchased has been canceled!";
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
        <?php 
            print "<h3>".$message."</h3>";
        ?>
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