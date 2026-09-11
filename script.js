

"use strict"

//campturar los datos
const formulario = document.querySelector("#formularioContacto");
const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#correo")
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");


//Mostrar mensaje error

function mostrarError(campo, texto){

    campo.classList.add("invalido");

    const error = document.querySelector(
        `#error ${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
    );

    error.textContent = texto;
}


//Limpiar mensaje de error

function limpiarError(campo){

    campo.classList.remove("invalido");

    const error = document.querySelector(
        `#error ${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
    );
    error.textContent = "";
}


//capturar el evento submit, al presionar el boton enviar

formulario.addEventListener("submit", function(evento){
    const nombreValor = nombre.value.trim();
    const correoValor = correo.value.trim();

    const mensajeValor = mensaje.value.trim();

    // crear una variable para saber si el formulario esta correcto
    let formularioValido = true;

    //validando el campo de nombre

    if(nombreValor.length < 3){
        mostrarError(
            nombre, 
            "Ingresar un nombre con al menos 3 caracteres o mas"
        );

        formularioValido = false;

    }else{
        limpiarError(nombre);
    }

    //Validar correo
    const expresionCorreo = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";

    if(!expresionCorreo.test(correoValor)){
        mostrarError(
            correo,
            "Ingresar un correo valido."
        );
    }else{
        limpiarError(correo);
    }

    //validamos el mensaje que tenga al menor 10 caracteres o mas
    if(mensajeValor.length <10){

        mostrarError(
            mensaje, 
            "Ingresar al menos un mensaje con 10 caracteres o mas"
        );

        formularioValido = false;   
    }

    // si hay errores se detiene el formulario
    if(!formularioValido){
        
        evento.preventDefault();
        resultado.textContent = "Revisar los campos antes de enviar el formulario.";

        resultado.classList.add("visible");
        return; //finaliza
    }

    // si todo esta bien el formulario se debe enviar

    resultado.textContent = "Formulario valido. Enviando mensaje"
    resultado.classList.add("visible");
    
});





/*        evento.preventDefault();
        resultado.classList.remove("visible");
        return; //finaliza
    }
 */