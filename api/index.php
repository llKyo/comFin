<?php
    require_once("./finanzas/funFinanzas.php");


    $iRut       = $_POST["rut"];
    $iCCarrera  = $_POST["carrera"];
    $iAccion    = $_POST["accion"];

    $sMensaje = "";

    switch ($iAccion) {
        case 1:
            crearPersona();
            $sMensaje = "Personas Creada";
            break;
        case 2:
            crearCxCDI();
            $sMensaje = "CxC DI Creada";
            break;
        case 3:
            crearCxCArancel();
            $sMensaje = "CxC Arancel Creada";
            break;
        default:
            # code...
            break;
    }
    

    $respuesta = new stdClass();
    $respuesta->resultado   = true;
    $respuesta->rut         = $iRut;
    $respuesta->carrera     = $iCCarrera;
    $respuesta->mensaje     = $sMensaje;
    echo json_encode($respuesta);
    // $a = 'come!! fetch this value';
    // echo ($a);