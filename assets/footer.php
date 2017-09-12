<?php
	include ('assets/connect.php');
	include ('assets/function.php');

    if(isset($_POST['sent']))
    {

        $email = $_POST['email'];

        $row = getDataFromDatabase("SELECT email FROM emails WHERE email=:email", [ 
            'email' => $email,
        ]);

        $emailErr = '';

        if($row['email']==$email) {
            $emailError = "Your e-mails are already there!".$row['email'];
            $trueError = true;
            $emailErr = 'emailErr'.$row['email'];

        }else{

            $sql = "INSERT INTO emails (email) VALUES(:email)";
    
            $row = insertDataInToDataBase($sql, [
            'email' => $email
            ]);
        }
						
			if(isset($emailError)){
				// alert ($emailError);

				echo "<script>alert(' Your e-mails are already there!');</script>";
			}else{

				echo "<script>alert('Your email is registered!');</script>";

			}
						
    	}else{

	}
?>


<link rel="stylesheet" type="text/css" href="style/footer.css">

<div id="footer">
	<h1>Contact</h1>

	<div class="wrap">	
		<table>
			<tr>
				<th><img src="img/mail.png"></th>
			</tr>
			<tr>
				<td><p><!--info@elcoin.com--> info@elcoin.co.uk</p></td>
			</tr>
		</table>
		<table>
			<tr>
				<th><img src="img/map.png"></th>
			</tr>
			<tr>
				<td><p><!--Jumtinas 148, Riga, Latvia--> 8-10 Grosvenor Gardens, London, England, SW1 W0DH</p></td>
			</tr>
		</table>
		<!--
		<table>
			<tr>
				<th><img src="img/phone.png"></th>
			</tr>
			<tr>
				<td><p>+371 223 12342 10755607</p></td>
			</tr>
		</table>-->
	</div>

	<form action="index.php" method="post" name ="subForm">
    	<input class="footer_input" type="text" name="email" placeholder="Email"></input>
		<!-- <button class="subscribe"> -->
			<input class="footer_button" type="submit" name="sent" value="send"></input>
		<!-- </button> -->
	</form>

	<div class="rights">
		<p> ELCOIN LTD. All rights reserved</p>
		<p>designed by Vinille Büro</p>
		<img src="img/vinille.png">
		</div>
	
	<div class="socials">
		<div><img src="img/twitter.png"></div>
		<div><img src="img/instagram.png"></div>
		<div><img src="img/facebook.png"></div>
	</div>
	
</div>