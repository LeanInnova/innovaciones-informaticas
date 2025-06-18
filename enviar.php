<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$nombre = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$telefono = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
$servicio = filter_input(INPUT_POST, 'service', FILTER_SANITIZE_STRING);
$mensaje = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// Validaciones básicas
if (empty($nombre) || empty($email) || empty($mensaje)) {
    echo json_encode(['success' => false, 'message' => 'Nombre, email y mensaje son obligatorios']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email no válido']);
    exit;
}

// Configura el correo
$to = 'soporte.innovaciones@hotmail.com';
$subject = 'Nuevo mensaje de contacto - Innovaciones Informáticas';
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Cuerpo del email (formato profesional)
$body = "
<html>
<body>
    <h2 style='color: #3498db;'>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> $nombre</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Teléfono:</strong> $telefono</p>
    <p><strong>Servicio:</strong> $servicio</p>
    <p><strong>Mensaje:</strong></p>
    <p>$mensaje</p>
    <hr>
    <p style='color: #777; font-size: 0.9em;'>Enviado desde el sitio Web de Innovaciones Informáticas</p>
</body>
</html>
";

// Envía el correo
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado con éxito. ¡Gracias!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje. Por favor intente más tarde.']);
}
?>
