import { f_crearUlResult } from "./ulResult.js";

const toastLiveExample = document.querySelector("#liveToast");
const toast         = new bootstrap.Toast(toastLiveExample);
const btnTexto      = btnEnviar.querySelector("#btnTexto");
const btnSpinner    = btnEnviar.querySelector("#btnSpinner");
const divAcordeon   = document.querySelector("#divAcordeon");

const phAcordeones1  = document.querySelector("#phAcordeon1");
const phAcordeones2  = document.querySelector("#phAcordeon2");
const phAcordeones3  = document.querySelector("#phAcordeon3");

const bgAcordeno1   = document.querySelector("#badgeAcordenos1");
const bgAcordeno2   = document.querySelector("#badgeAcordenos2");
const bgAcordeno3   = document.querySelector("#badgeAcordenos3");

const contenido1    = document.querySelector("#contenido1");
const contenido2    = document.querySelector("#contenido2");
const contenido3    = document.querySelector("#contenido3");



export const f_iniciar_estilo_carga = () => {
     divAcordeon.classList.remove("d-none");
        
     phAcordeones1.classList.add("placeholder");
     phAcordeones2.classList.add("placeholder");
     phAcordeones3.classList.add("placeholder");
     
     bgAcordeno1.classList.add("d-none");
     bgAcordeno2.classList.add("d-none");
     bgAcordeno3.classList.add("d-none");

     contenido1.classList.add("placeholder");
     contenido2.classList.add("placeholder");
     contenido3.classList.add("placeholder");

     contenido1.innerHTML = '';
     contenido2.innerHTML = '';
     contenido3.innerHTML = '';

     btnTexto.innerHTML = 'Cargando...';
     btnSpinner.classList.remove("visually-hidden");
     btnEnviar.disabled;
}

export const f_finalizar_estilo_carga = () => {
     btnTexto.innerHTML = "Enviar";
     btnSpinner.classList.add("visually-hidden");
}

export const f_finalizar_add_persona = reqPersona => {
     const { rut, carrera,  mensaje} = reqPersona;

     let arrData = [];

     arrData.push(["rut", rut]);
     arrData.push(["carrera", carrera]);
     arrData.push(["mensaje", mensaje]);

     const ul = f_crearUlResult(arrData);
     
     contenido1.appendChild(ul);
     
     phAcordeones1.classList.remove("placeholder");
     bgAcordeno1.classList.remove("d-none");
     contenido1.classList.remove("placeholder");

}

export const f_finalizar_add_cxc_di = reqPersona => {
     const { rut, carrera, mensaje } = reqPersona;

     let arrData = [];

     arrData.push(["rut", rut]);
     arrData.push(["carrera", carrera]);
     arrData.push(["mensaje", mensaje]);

     const ul = f_crearUlResult(arrData);

     contenido2.appendChild(ul);

     phAcordeones2.classList.remove("placeholder");
     bgAcordeno2.classList.remove("d-none");
     contenido2.classList.remove("placeholder");

}

export const f_finalizar_add_cxc_arr = reqPersona => {
     const { rut, carrera, mensaje } = reqPersona;

     let arrData = [];

     arrData.push(["rut", rut]);
     arrData.push(["carrera", carrera]);
     arrData.push(["mensaje", mensaje]);

     const ul = f_crearUlResult(arrData);

     contenido3.appendChild(ul);

     phAcordeones3.classList.remove("placeholder");
     bgAcordeno3.classList.remove("d-none");
     contenido3.classList.remove("placeholder");
}

export const f_mostrar_toast = () => {
     toast.show();
}