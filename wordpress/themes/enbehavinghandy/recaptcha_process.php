<?php 
	require_once "recaptchalib.php";

    // Register API keys at https://www.google.com/recaptcha/admin
    $siteKey = "6Ld_GBATAAAAAMDQyJmB30mA6unoBtgW9fVlpbz9";
    $secret = "6Ld_GBATAAAAAAmWzwwoK7tS3ljQVrw4CyFlroQg";
    // reCAPTCHA supported 40+ languages listed here: https://developers.google.com/recaptcha/docs/language
    $lang = "en";
    // The response from reCAPTCHA
    $resp = null;
    // The error code from reCAPTCHA, if any
    $error = null;
    $reCaptcha = new ReCaptcha($secret);
    // Was there a reCAPTCHA response?
    if ($_POST["g-recaptcha-response"]) {
        $resp = $reCaptcha->verifyResponse(
            $_SERVER["REMOTE_ADDR"],
            $_POST["g-recaptcha-response"]
        );
    }

    if ($resp != null && $resp->success) {

    }else{
        if( strpos($_SERVER["HTTP_REFERER"], "http://")!==false){
            $url = substr($_SERVER["HTTP_REFERER"], strpos($_SERVER["HTTP_REFERER"], "/", 15));
        }else{
            $url = $_SERVER["HTTP_REFERER"];
        }
        header("Location: $url");
        exit;
    }
?>