import { f_registrar_en_finanzas } from "./utils/fetch.js";
import { f_finalizar_estilo_carga, f_iniciar_estilo_carga } from "./utils/utils.js";
//Patron Modulo
(() => {
    'use strict'

    const btnEnviar         = document.querySelector('#btnEnviar');
    const inputRut          = document.querySelector("#inputRut");
    const inputCarrera      = document.querySelector("#inputCarrera");
    
    

    btnEnviar.addEventListener('click', async () => {
        
        f_iniciar_estilo_carga();

        let resp = await f_registrar_en_finanzas(inputRut.value, inputCarrera.value);
        console.log(resp);

        f_finalizar_estilo_carga();
        
    });




})();
