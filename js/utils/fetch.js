// import {f_cargar_eventos}    from '../../api/index.php';

const url = './api/index.php';

export const f_registrar_en_finanzas = async (rut, carrera, accion) => {

    const formData = new FormData();
    formData.append("rut", rut);
    formData.append("carrera", carrera);
    formData.append("accion", accion);

    

    let peticionAPI = await fetch(url, { method: 'POST', body: formData })
        .then( response => {
            return response.json();
        })
        .catch( err => {
            console.log(err);
        });

    return peticionAPI;
}