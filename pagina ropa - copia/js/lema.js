
window.addEventListener("scroll", function () {
    const topBar = document.querySelector(".lema");

    if (window.scrollY > 50) {
        topBar.classList.add("oculta");
    } else {
        topBar.classList.remove("oculta");
    }
});
console.log("componentes.js cargado");

