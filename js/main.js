import { f_registrar_en_finanzas } from "./utils/fetch.js";
import { f_finalizar_add_cxc_arr
       , f_finalizar_add_cxc_di
       , f_finalizar_add_persona
       , f_finalizar_estilo_carga
       , f_iniciar_estilo_carga
       , f_mostrar_toast } from "./utils/utils.js";

//Patron Modulo
(() => {
    'use strict'

    const btnEnviar         = document.querySelector('#btnEnviar');
    const inputRut          = document.querySelector("#inputRut");
    const inputCarrera      = document.querySelector("#inputCarrera");
    

    const validar = () => {
        if (isNaN(inputRut.value) || inputRut.value == '') return false;
        if (isNaN(inputCarrera.value) || inputRut.value == '') return false;

        if (inputRut.value.indexOf("-") != -1 || inputRut.value.indexOf(".") != -1) return false;
        if (inputCarrera.value.indexOf("-") != -1 || inputCarrera.value.indexOf(".") != -1) return false;


        return true;
    }
    

    const enviarInfoFinanzas = async () => {
        
        if (validar()) {
            f_iniciar_estilo_carga();

            let reqPersona = await f_registrar_en_finanzas(inputRut.value, inputCarrera.value, 1);
            f_finalizar_add_persona(reqPersona);
            let reqCxCDI = await f_registrar_en_finanzas(inputRut.value, inputCarrera.value, 2);
            f_finalizar_add_cxc_di(reqCxCDI);
            let reqCxCArancel = await f_registrar_en_finanzas(inputRut.value, inputCarrera.value, 3);
            f_finalizar_add_cxc_arr(reqCxCArancel);
            
            // console.log(, resp2, resp3);

            f_finalizar_estilo_carga();
        } else {
            f_mostrar_toast();
        }
    }

    btnEnviar.addEventListener('click', () =>  enviarInfoFinanzas());
    inputRut.addEventListener("keypress", (e) => {
        if (e.key === "Enter") btnEnviar.click();
    });
    inputCarrera.addEventListener("keypress", e =>  (e.key === "Enter") ? btnEnviar.click() : '');
    
    


})();
