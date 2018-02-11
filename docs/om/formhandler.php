<?php
$name = $email = $subject = $message = "";

function test_input($formdata) {
  $formdata = trim($formdata);
  $formdata = stripslashes($formdata);
  $formdata = htmlspecialchars($formdata);
  return $formdata;
}

$inputerror = "";

    if (empty($_POST["name"])) {
        $inputerror .= "Your name is required";
      } else {
        $navn = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
          $inputerror .= "Only letters and spaces in your name, Thansk!"; 
        }
      }
    
    if (empty($_POST["email"])) {
        $inputerror .= "Your email is required";
      } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $inputerror .= "Enter a valid email address."; 
        }
      }
    
    if (empty($_POST["Subject"])) {
        $inputerror .= "A Subject is required";
      } else {
            $henvendelse = test_input($_POST["subject"]);
      }

    if (empty($_POST["message"])) {
        $inputerror .= "A Message is required.";
      } else {
        $besked = test_input($_POST["message"]);
      }


$modtager = "mt@mtoama.dk";
$subject = "Message from " . $name . " regarding " . $subject . " ";
$headers = "From: " . $email . " ";

if($inputerror == ""){
    if($success = mail($modtager, $subject, $besked, $headers)){
        echo "success";
    } else{
        echo "Something went wrong!";
    } 
} else{
    echo $inputerror;
}
    
?>