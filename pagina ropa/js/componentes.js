/*document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar-container");

    fetch("./navbar.html")
        .then(res => {
            if (!res.ok) throw new Error("No se pudo cargar navbar");
            return res.text();
        })
        .then(data => {
            navbar.innerHTML = data;
        })
        .catch(err => console.error("Navbar error:", err));


    const footer = document.getElementById("footer-container");

    fetch("./footer.html")
        .then(res => {
            if (!res.ok) throw new Error("No se pudo cargar footer");
            return res.text();
        })
        .then(data => {
            footer.innerHTML = data;
        })
        .catch(err => console.error("Footer error:", err));

});*/
//PARA QUE FUNCIONE LA LUPITA EN MODELOS PEQUEÑOS//
document.getElementById("btnSearch").addEventListener("click", () => {
    const input = document.getElementById("mobileSearch");
    input.classList.toggle("d-none");
    input.focus();
});


//pa que habra en todas las paginas (no funciona aún)//
document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.getElementById("navbar-container");
    if (navbar) {
        fetch("navbar.html")
            .then(response => response.text())
            .then(data => {
                navbar.innerHTML = data;
            });
    }

    const footer = document.getElementById("footer-container");
    if (footer) {
        fetch("footer.html")
            .then(response => response.text())
            .then(data => {
                footer.innerHTML = data;
            });
    }

});


