<?php
    $iRut       = $_POST["rut"];
    $iCCarrera  = $_POST["carrera"];
    // $iCCarrera  = $_POST["carrera2"];
    
    sleep(1);

    $respuesta = new stdClass();
    $respuesta->resultado   = true;
    $respuesta->rut         = $iRut;
    $respuesta->carrera     = $iCCarrera;
    echo json_encode($respuesta);
    // $a = 'come!! fetch this value';
    // echo ($a);