<?php
include 'db_connect.php';

$data = json_decode(file_get_contents("php://input"), true);

$usuario_id = $data['usuario_id'];
$tipo_quarto = $data['roomType'];
$check_in = $data['checkIn'];
$check_out = $data['checkOut'];

$query = "INSERT INTO reservas (usuario_id, tipo_quarto, check_in, check_out) VALUES ('$usuario_id', '$tipo_quarto', '$check_in', '$check_out')";

if ($conn->query($query) === TRUE) {
    echo json_encode(["success" => true, "message" => "Reserva realizada com sucesso!"]);
} else {
    echo json_encode(["success" => false, "message" => "Erro ao realizar reserva: " . $conn->error]);
}
?>