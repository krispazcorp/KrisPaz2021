<?php
$destino = "krispaz_4358@yahoo.es";
$nombre = $_POST ["nombre"];
$correo = $_POST ["correo"];
$telefono = $_POST ["telefono"];
$asunto = $_POST ["asunto"];
$mensaje = $_POST ["mensaje"];
$contenido = "Nombre:" .$nombre . "\nCorreo:" . $correo . "\nTeléfono:" . $telefono . "\nAsunto" . $asunto . "\nMensaje" . $mensaje;

mail($destino,"Mensaje desde Matma.com", $contenido);
header("Location:contactoenvio.html");

?>