<?php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$senha = $data['password'];

$query = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    if (password_verify($senha, $user['senha'])) {
        echo json_encode(["success" => true, "message" => "Login bem-sucedido!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Senha incorreta."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Usuário não encontrado."]);
}
?>