<?php
header("Access-Control-Allow-Origin: *");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if ($_POST) {
    http_response_code(200);
    $recipient="bshakir@ilistrealty.net";
	$subject="Visited Your Website";
    $timestamp = date( "F d, Y G:i:s", time() );
    $headers = "MIME-Version 1.0\r\n";
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From:".$_POST['email']."\r\n";
    $body = $_POST['message'];
    mail( $recipient, $subject, $body, $headers);
    echojson_encode(array("sent"=>true));
} else {
    echojson_encode(["sent"=>false, "message"=>"Something went wrong."]);
}
?>