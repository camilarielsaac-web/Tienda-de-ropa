const container=document.querySelector(".container");
const btnSignIn=document.getElementById("btn-sign");
const btnSignUp=document.getElementById("btn-sign-out");
btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});
const formulario=document.getElementById("formulario");
const formulario2=document.getElementById("formulario2");
const inputs=document.querySelectorAll("#formulario input");
const inputs2=document.querySelectorAll("#formulario2 input");


const expresiones={
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/,
    domicilio: /^[a-zA-ZÀ-ÿ0-9\s]{10,40}$/,
    carnet: /^[0-9]{6,10}$/,
};
const compraE={
    ntarjeta: /^(?:\d[ -]*){13,16}$/,
    fechavenc: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
    codigo: /^\d{3,4}$/,
};
const error = document.querySelector("#error");
const error1 = document.querySelector("#error1");
const validarFormulario = (e) => {
    switch (e.target.name) {
           case "nombre":
             if (!expresiones.nombre.test(e.target.value)) {
                 Mostrar("Nombre no válido");
             } else {
                 ocultar();
             }
           break;
           case "correo":
             if (!expresiones.correo.test(e.target.value)) {
                 Mostrar("Correo no válido");
             } else {
                 ocultar();
             }
           break;
           case "domi":
             if (!expresiones.domicilio.test(e.target.value)) {
                 Mostrar("Domicilio no válido");
             } else {
                 ocultar();
             }
           break;
           case "celular":
             if (!expresiones.telefono.test(e.target.value)) {
                 Mostrar("Teléfono no válido");
             } else {
                 ocultar();
             }
           break;
           case "carnet":
             if (!expresiones.carnet.test(e.target.value)) {
                 Mostrar("Carnet no válido");
             } else {
                 ocultar();
             }
           break;


            case "numero":
             if (!compraE.ntarjeta.test(e.target.value)) {
                 Mostrar1("Numero de tarjeta no válido");
             } else {
                 ocultar1();
             }
           break;
           case "fecha":
             if (!compraE.fechavenc.test(e.target.value)) {
                 Mostrar1("Fecha no aceptada");
             } else {
                 ocultar1();
             }
           break;
           case "codigo":
             if (!compraE.codigo.test(e.target.value)) {
                 Mostrar1("Codigo no válido");
             } else {
                 ocultar1();
             }
           break;
    }
}
function Mostrar(msg){
    if(!error) return;
    error.textContent = msg;
    error.classList.add("show");
}
function ocultar(){
    if(!error) return;
    error.textContent = "";
    error.classList.remove("show");
}


function Mostrar1(msg){
    if(!error1) return;
    error1.textContent = msg;
    error1.classList.add("show");
}
function ocultar1(){
    if(!error1) return;
    error1.textContent = "";
    error1.classList.remove("show");
}
inputs.forEach((input) =>{
    input.addEventListener("keyup",validarFormulario )
    input.addEventListener("blur",validarFormulario )
})
inputs2.forEach((input) =>{
    input.addEventListener("keyup",validarFormulario )
    input.addEventListener("blur",validarFormulario )
})
formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
});

function validateFormulario1() {
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const domi = document.getElementById("domi").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const carnet = document.getElementById("CI").value.trim();
    const validNombre = expresiones.nombre.test(nombre);
    const validCorreo = expresiones.correo.test(correo);
    const validDomi = expresiones.domicilio.test(domi);
    const validCelular = expresiones.telefono.test(celular);
    const validCarnet = expresiones.carnet.test(carnet);
    if (!validNombre || !validCorreo || !validDomi || !validCelular || !validCarnet) {
        Mostrar("Formulario incorrecto");
        return false;
    }
    ocultar();
    return true;
}

function validateFormulario2() {
    const numero = document.getElementById("numeroT").value.trim();
    const fecha = document.getElementById("fechade").value.trim();
    const codigo = document.getElementById("codigode").value.trim();
    const validNumero = compraE.ntarjeta.test(numero);
    const validFecha = compraE.fechavenc.test(fecha);
    const validCodigo = compraE.codigo.test(codigo);
    if (!validNumero || !validFecha || !validCodigo) {
        Mostrar1("Formulario incorrecto");
        return false;
    }
    ocultar1();
    return true;
}

formulario2.addEventListener("submit",(e) =>{
    const valid1 = validateFormulario1();
    const valid2 = validateFormulario2();
    if (!valid1 || !valid2) {
        e.preventDefault();
    }
});