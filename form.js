/**SPRINT 2  
 * 
 * * Validar el campo nombre evitando que se ingresen caracteres numéricos, restringiendo la 
 * longitud entre 4 y 30 caracteres máximo y que el campo no se deje vacío*/


 document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-submit-form").addEventListener('click',checkNombre); 
    document.getElementById("btn-submit-form").addEventListener('click',checkTelefono); 
    document.getElementById("btn-submit-form").addEventListener('click',checkDir);
    document.getElementById("btn-submit-form").addEventListener('click',checkCorreo);
    document.getElementById("btn-submit-form").addEventListener('click',checkContrasena);
});

    function checkNombre(valor) {
        valor.preventDefault();
        /*Por defecto, emite el mensaje de bueno. Si no, evalúa y emite el mensaje de malo */
        var name = document.getElementById('Nombre').value;
        if (name == null || name.length == 0 || !/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(name)){
            return false;
        }
        else {
            return true;
        }
    }

/*Validar el campo teléfono, este campo debe tener una longitud de 7 dígitos únicamente, solo puede
contener caracteres numéricos y no puede dejarse vacío. Debe llamarse  checkTelefono(valor) y 
debe retornar verdadero o falso */

    function checkTelefono(valor) {
        valor.preventDefault();
        var clave = document.getElementById('Telefono').value;
        if (clave == null || clave.length == 0 || !/^\d{7}$/.test(clave)){
            return false;
        }
        else {
            return true;
        }
    }

/* Validación del campo dirección. Este campo debe de contener caracteres alfanuméricos y únicamente los
caracteres especiales de # y -. Así mismo, el campo deberá de contar con una longitud no mayor a 50
caracteres y al ser un campo requerido no puede quedar vacío.*/

function checkDir(valor){
    valor.preventDefault();
    Dir=document.getElementById('Direccion').value;
    if (Dir == null || Dir.length == 0 || Dir.length > 50 ){
        return false;
    }
    else {
        return true;
    }
}

/*Validación del campo dirección. Este campo debe de contener caracteres alfanuméricos y únicamente los 
caracteres especiales de # y -. Así mismo, el campo deberá de contar con una longitud no mayor a 50
caracteres y al ser un campo requerido no puede quedar vacío. */

    function checkCorreo(valor){
        valor.preventDefault();
        valorEmail=document.getElementById('Correo').value;
        if (valorEmail == null || valorEmail.length == 0 || !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valorEmail)){
            return false;
        }
        else {
            return true;
        }
    }
 


    function checkContrasena(){
        valor.preventDefault();
        con=document.getElementById('Contrasena');
        if (con == null || con.length == 0 || con.length < 8 ){
            return false;
            }
        else {
            return true;
        }
    }


//De acá exporto las funciones en node.js
module.exports = {checkNombre, checkTelefono, checkCorreo, checkDir, checkContrasena} ;
