

"use strict"

//campturar los datos
const formulario = document.querySelector("#formularioContacto");
const nombre = document.querySelector("#nombre");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");


//Funcion que muestra el error debajo del campo

function mostrarError(campo, texto){
    campo.classList.add("invalido");

    const error = document.querySelector(
        `#error ${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
    );

    error.textContent = texto;
}


//Funcion que va a limpiar el error de un campo
function limpiarError(campo){
    campo.classList.remove("invalido");

    const error = document.querySelector(
        `#error ${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`
    );
    error.textContent = "";
}


//capturar el evento submit, al presionar el boton enviar

formulario, addEventListener("submit", function(evento){
    const nombreValor = nombre.value.trim();

    const mensajeValor = mensaje.value.trim();

    // crear una variable para saber si el formulario esta correcto
    let formularioValido = true;

    //validando el campo de nombre

    if(nombreValor.length < 3){
        mostrarError(nombre, "Ingresar al menor un nombre con 3 caracteres o mas")
        formularioValido = false;

    }else{
        limpiarError(nombre);
    }

    //validamos el mensaje que tenga al menor 10 caracteres o mas
    if(mensajeValor.length <10){
        mostrarError(mensaje, "Ingresar al menos un mensaje con 10 caracteres o mas")
        formularioValido = false;   
    }

    // si hay errores se detiene el formulario
    if(!formularioValido){
        evento.preventDefault();
        resultado.classList.remove("visible");
        return; //finaliza
    }

    // si todo esta bien el formulario se debe enviar

    resultado.textContent = "Formulario valido. Enviando mensaje"
    resultado.classList.add("visible");
    
});