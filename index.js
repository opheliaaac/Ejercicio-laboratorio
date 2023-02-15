window.onload = function () {
    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', validar);
}


function validar(e) {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let clave = document.getElementById("clave");
    let confir = document.getElementById("confirmacion");
    let nombreCheck = validaNombre(nombre);
    let emailCheck = validaEmail(email);
    let claveCheck = validaClave(clave);
    let confirmacionCheck = validaConfirmacion(confir, clave.value);
    e.preventDefault();
    if (nombreCheck && emailCheck && claveCheck && confirmacionCheck) {
        alert("Inscripción correcta")
    }
}

function validaNombre(nombre) {

    let parrafoError = document.getElementById("control-nombre");
    let patron = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g;

    if (nombre.value === "") {
        nombre.className = "error";
        muestraMensajeError(parrafoError, "Rellene este campo");
        return false;
    } else if (!patron.test(nombre.value)) {
        nombre.className = "error";
        muestraMensajeError(parrafoError, "Valores numéricos o caracteres especiales no admitidos");
        return false;
    } else {
        nombre.className = "success";
        ocultaMensajeError(parrafoError);
        return true;
    }
}

function validaEmail(email) {

    let parrafoError = document.getElementById("control-email");
    let patron = /[^@\s]+@[^@\s]+/g;

    if (email.value === "") {
        email.className = "error";
        muestraMensajeError(parrafoError, "Rellene este campo");
        return false;
    } else if (!patron.test(email.value)) {
        email.className = "error";
        email.setCustomValidity('Incluye un signo &quot;&commat;&quot; en la dirección de correo electrónico. La dirección &quot;' + this.value + '&quot; no incluye el signo @.')
        muestraMensajeError(parrafoError, "Email inválido");
        return false;
    } else {
        email.className = "success";
        ocultaMensajeError(parrafoError);
        return true;
    }
}

function validaClave(clave) {

    let parrafoError = document.getElementById("control-clave");

    if (clave.value === "") {
        clave.className = "error";
        muestraMensajeError(parrafoError, "Rellene este campo");
        return false;
    } else if (clave.value.length > 8) {
        clave.className = "error";
        muestraMensajeError(parrafoError, "La contraseña no debe tener más de 8 caracteres.");
        return false;
    } else {
        clave.className = "success";
        ocultaMensajeError(parrafoError);
        return true;
    }
}

function validaConfirmacion(confir, clave) {

    let parrafoError = document.getElementById("control-confirmacion");

    if (confir.value === "") {
        confir.className = "error";
        muestraMensajeError(parrafoError, "Rellene este campo");
        return false;
    } else if (confir.value !== clave) {
        confir.className = "error";
        muestraMensajeError(parrafoError, "Las contraseñas no coinciden");
        return false;
    } else {
        confir.className = "success";
        ocultaMensajeError(parrafoError);
        return true;
    }
}

function muestraMensajeError(elemento, mensaje) {
    elemento.innerHTML = mensaje;
    elemento.className = "texto-control";
}

function ocultaMensajeError(elemento) {
    if (elemento.className === "texto-control") {
        elemento.className += " oculto";
    }
}

