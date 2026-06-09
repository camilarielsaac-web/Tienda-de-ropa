const container=document.querySelector(".container");
const btnSignIn=document.getElementById("btn-sign");
const btnSignUp=document.getElementById("btn-sign-out");
btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});
/*onst btn=document.getElementById("btn");
const container=document.querySelector(".container");

btn.addEventListener("click",()=>{
    container.classList.toggle("toggle");
})*/