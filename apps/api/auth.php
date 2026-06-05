<?php
require "vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Credentials: true");

 $user_data = json_decode(file_get_contents("php://input"), true);

//  User Credential
 $email = "sivaneshwaran656@gmail.com";
 $password = "KmRJ";
 $hasedPassword = password_hash($password, PASSWORD_DEFAULT);

// JWT Variables
 $key = "Sivaneshwaran_key_JWT_also_have_length";

 $issuedAt = time();
 $notBefore = $issuedAt;
 $expiry = $issuedAt + (60 * 10);
 $idPayload = [
    'iss' => 'test.com',
    'aud' => 'test.com',
    'iat' => $issuedAt,
    'nbf' => $notBefore,
    'exp' => $expiry,
    'sub' => $email,
    'name' => "Sivaneshwaran",
    'role' => 'client'
 ];

 $accPayload = [
    'iss' => 'test.com',
    'aud' => 'test.com',
    'iat' => $issuedAt,
    'nbf' => $notBefore,
    'exp' => $expiry,
    'sub' => $email,
    'name' => "Sivaneshwaran",
    'role' => 'client'
 ];

if($_SERVER["REQUEST_METHOD"] == "OPTIONS"){
    http_response_code(200);    
    exit();
}

if($_SERVER['REQUEST_METHOD'] == "POST"){
    if(isset($user_data["email"]) && $user_data["email"] === $email && isset($user_data["password"]) && password_verify($user_data["password"], $hasedPassword)){
       try{
        $idToken = JWT::encode($idPayload, $key, "HS256");
        $accToken = JWT::encode($accPayload, $key, "HS256");
        http_response_code();
        setcookie("id_t", $idToken, $expiry, "/", "", false, true);
        setcookie("acc_t", $accToken, $expiry, "/", "", false, false);
        // setcookie("token1", $token, $expiry, "/", "", false, true);
        // setcookie("token2", $token, $expiry, "/", "", false, true);
        // setcookie("token3", $token, $expiry, "/", "", false, true);
        // setcookie("token4", $token, $expiry, "/", "", false, true);
        // setcookie("token5", $token, $expiry, "/", "", false, true);
        // setcookie("token6", $token, $expiry, "/", "", false, true);
        // setcookie("token7", $token, $expiry, "/", "", false, true);
        // setcookie("token8", $token, $expiry, "/", "", false, true);

        echo json_encode(["success"=>true, "message"=> "login Success"]);
        // var_dump(http_response_code(200));
       }catch(Exception $e){
            http_response_code(500);
            echo json_encode(["success"=>false, "message"=>"Internal Server Error".$e]);
       }

    }elseif(isset($user_data["action"]) && $user_data["action"] === "logout"){
        setcookie("id_t", "", time()-3600, "/", "", false, true);
        setcookie("acc_t", "", time()-3600, "/", "", false, false);
        // setcookie("token1","", time()-3600, "/", "", false, true);
        // setcookie("token2","", time()-3600, "/", "", false, true);
        // setcookie("token3","", time()-3600, "/", "", false, true);
        // setcookie("token4","", time()-3600, "/", "", false, true);
        // setcookie("token5","", time()-3600, "/", "", false, true);
        // setcookie("token6","", time()-3600, "/", "", false, true);
        // setcookie("token7","", time()-3600, "/", "", false, true);
        // setcookie("token8","", time()-3600, "/", "", false, true);

        echo json_encode(["success"=>true, "message"=> "logout Success"]);
    } else{
        http_response_code(404);

        echo json_encode(["success"=>false, "message"=> "login Failed"]);
    }
}



?>

