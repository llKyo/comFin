/**
 * Calcula el digito verificador del rut ingresado
 * 
 * @link https://validarutchile.cl/calcular-rut-en-javascript.php
 * @param {int or string} rut 
 * @return digito verificador
 */
export const f_calcular_dv =  rut => {  
    let  m  = 0,  s  = 1;

    for(; rut ; rut =  Math.floor( rut /10) ){
         s  = (  s + rut % 10 * ( 9 -  m++ % 6 ) ) % 11;
    }
    
    return  s  ?  s -1 : 'k';
}
const toastLiveExample = document.querySelector("#liveToast");
const toast         = new bootstrap.Toast(toastLiveExample);
const btnTexto      = btnEnviar.querySelector("#btnTexto");
const btnSpinner    = btnEnviar.querySelector("#btnSpinner");
const divAcordeon   = document.querySelector("#divAcordeon");

const phAcordeones  = document.querySelectorAll("#phAcordeones");
const bgAcordenos  = document.querySelectorAll("#badgeAcordenos");


export const f_iniciar_estilo_carga = () => {

     divAcordeon.classList.remove("d-none");
        
     phAcordeones.forEach(acordeon => {
          acordeon.classList.add("placeholder");
     });
     bgAcordenos.forEach(badge => {
          badge.classList.add("d-none");
     });
     

     btnTexto.innerHTML = 'Cargando...';
     btnSpinner.classList.remove("visually-hidden");
     btnEnviar.disabled;
}

export const f_finalizar_estilo_carga = () => {
     toast.show();
     btnTexto.innerHTML = "Enviar";
     btnSpinner.classList.add("visually-hidden");
     
     phAcordeones.forEach(acordeon => {
          acordeon.classList.remove("placeholder");
     });
     bgAcordenos.forEach(badge => {
          badge.classList.remove("d-none");
     });
}