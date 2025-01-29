<?php
$host = "localhost";
$user = "root";
$password = ""; // Deixa vazio se for padrão do XAMPP
$dbname = "sistema_hotel";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}
?>