<?php
    require_once("./finanzas/funFinanzas.php");


    $iRut       = $_POST["rut"];
    $iCCarrera  = $_POST["carrera"];
    $iAccion    = $_POST["accion"];

    $sMensaeje = "";

    switch ($iAccion) {
        case 1:
            crearPersona();
            $sMensaeje = "Crea Carrera";
            break;
        case 2:
            crearCxCDI();
            break;
        case 3:
            crearCxCArancel();
            break;
        default:
            # code...
            break;
    }
    
    sleep(1);

    $respuesta = new stdClass();
    $respuesta->resultado   = true;
    $respuesta->rut         = $iRut;
    $respuesta->carrera     = $iCCarrera;
    $respuesta->mensaeje    = $sMensaeje;
    echo json_encode($respuesta);
    // $a = 'come!! fetch this value';
    // echo ($a);