const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign");
const btnSignUp = document.getElementById("btn-sign-out");

btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});

btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});

const formulario = document.getElementById("formulario1");
const formulario2 = document.getElementById("formulario2");
const inputs1 = document.querySelectorAll("#formulario1 input");
const inputs2 = document.querySelectorAll("#formulario2 input");
const prueba = {
    usuario: /^[a-zA-Z0-9_-]{3,16}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,100000}$/
}
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");

if (error1) {
    error1.style.display = "none";
    error1.style.color = "black";
    error1.style.backgroundColor = "#6e7dab6d";
    error1.style.padding = "10px";
    error1.style.marginTop = "10px";
    error1.style.borderRadius = "6px";
    error1.style.textAlign = "center";
}

if (error2) {
    error2.style.display = "none";
    error2.style.color = "#02020272";
    error2.style.backgroundColor = "#5761d56d";
    error2.style.padding = "10px";
    error2.style.marginTop = "10px";
    error2.style.borderRadius = "6px";
    error2.style.textAlign = "center";
}
const validacion1 = (e) => {
    switch (e.target.name) {
        case "correo":
            if (!prueba.correo.test(e.target.value)) {
                mostrar1("Correo no válido");
            } else {
                ocultar1();
            }
            break;
        case "contraseña":
            if (!prueba.contraseña.test(e.target.value)) {
                mostrar1("Contraseña no válida");
            } else {
                ocultar1();
            }
            break;
    }
    }
const validacion2 = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (!prueba.nombre.test(e.target.value)) {
                mostrar2("Nombre no válido");
            } else {
                ocultar2();
            }
            break;
        case "correo":
            if (!prueba.correo.test(e.target.value)) {
                mostrar2("Correo no válido");
            } else {
                ocultar2();
            }
            break;
        case "contraseña":
            if (!prueba.contraseña.test(e.target.value)) {
                mostrar2("Contraseña no válida");
            } else {
                ocultar2();
            }
            break;
    }
}


formulario.addEventListener("submit",(e) =>{
    e.preventDefault();
    let todoCorrecto = true;

    inputs1.forEach(input => {
        if (prueba[input.name] && !prueba[input.name].test(input.value)) {
            todoCorrecto = false;
        }
    });

    if (todoCorrecto) {
        window.location.href = "index.html";
    } else {
        mostrar1("Por favor, revisa tus datos");
    }
})

formulario2.addEventListener("submit",(e) =>{
    e.preventDefault();
    let todoCorrecto = true;

    inputs2.forEach(input => {
        if (prueba[input.name] && !prueba[input.name].test(input.value)) {
            todoCorrecto = false;
        }
    });

    if (todoCorrecto) {
        window.location.href = "index.html";
    } else {
        mostrar2("Completa el registro correctamente");
    }
})
function mostrar1(msg){
    if(!error1)
    return;
    error1.textContent = msg;
    error1.style.display = "block";

}
function ocultar1(){
    if(!error1)
    return;
    error1.textContent = "";
    error1.style.display = "none";
}
function mostrar2(msg){
    if(!error2)
    return;
    error2.textContent = msg;
    error2.style.display = "block";

}
function ocultar2(){
    if(!error2)
    return;
    error2.textContent = "";
    error2.style.display = "none";
}
inputs1.forEach(input => {
    input.addEventListener("blur", validacion1);
    input.addEventListener("keyup", validacion1);
})
inputs2.forEach(input => {
    input.addEventListener("blur", validacion2);
    input.addEventListener("keyup", validacion2);
});
