const names = document.querySelector('#InputNombres');
const email = document.querySelector('#InputEmail');
const telefono = document.querySelector('#InputTelefono');
const empresa = document.querySelector('#InputEmpresa');
const pais = document.querySelector('#InputPais');
const asunto = document.querySelector('#InputAsunto');
const textarea2 = document.querySelector('#Textarea2');
//console.log(names)

const namesError = document.querySelector('#nombresError');
const emailError = document.querySelector('#emailError');
const telefonoError = document.querySelector('#telefonoError');
const empresaError = document.querySelector('#empresaError');
const paisError = document.querySelector('#paisError');
const asuntoError = document.querySelector('#asuntoError');
const textarea2Error = document.querySelector('#textarea2Error');

const button = document.querySelector('#button3');

button.addEventListener('click',(event)=>{
    event.preventDefault();
    //console.log(event);
    validateEmpty(names.value, names, namesError, "Los nombres no pueden estar vacíos");
    validateEmpty(email.value, email, emailError, "El email no puede estar vacío");
    validateEmpty(telefono.value, telefono, telefonoError, "El telefono no puede estar vacío");
    validateEmpty(empresa.value, empresa, empresaError, "EL nombre de la empresa no puede estar vacío");
    validateEmpty(pais.value, pais, paisError, "EL nombre del pais no puede estar vacío");
    validateEmpty(asunto.value, asunto, asuntoError, "EL asunto no puede estar vacío");
    validateEmpty(textarea2.value, textarea2, textarea2Error, "Debe escribir un mensaje");
});

function validateEmpty(valueInput, divInput, divError, mensajeInput){
    //console.log(valueInput.length)
    if(valueInput.length == 0){
        showError(divInput, divError, mensajeInput);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, mensajeInput){
    divInput.style.border = '1px solid red';
    divError.innerHTML = `<i class="fa-solid fa-circle-exclamation error_icon"></i>
    <p class="error">${mensajeInput}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid #ced4da';
    divError.innerHTML = ``;
}
