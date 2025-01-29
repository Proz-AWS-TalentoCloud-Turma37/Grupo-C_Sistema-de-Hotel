<?php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$nome = $data['nome'];
$email = $data['email'];
$senha = password_hash($data['password'], PASSWORD_DEFAULT);

$query = "INSERT INTO usuarios (nome, email, senha) VALUES ('$nome', '$email', '$senha')";

if ($conn->query($query) === TRUE) {
    echo json_encode(["success" => true, "message" => "Cadastro realizado com sucesso!"]);
} else {
    echo json_encode(["success" => false, "message" => "Erro ao cadastrar: " . $conn->error]);
}
?>