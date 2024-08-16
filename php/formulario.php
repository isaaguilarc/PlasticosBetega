<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['Teléfono']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Define la dirección de correo a la que se enviará el mensaje
    $to = "iaguil19@itam.mx"; 
    $subject = "Nuevo mensaje de contacto de PlasticosBetega";

    // Construye el cuerpo del correo
    $body = "Nombre: $nombre\n";
    $body .= "Email: $email\n";
    $body .= "Teléfono: $telefono\n";
    $body .= "Mensaje:\n$mensaje\n";

    // Cabeceras del correo
    $headers = "From: $email";

    // Envía el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.";
    }
} else {
    echo "Método de solicitud no soportado.";
}
?>
