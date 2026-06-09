document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("botonde");
  const cantidad = document.getElementById("cantidad");
  const tipo = document.getElementById("tipo");
  const total = document.getElementById("total");
  const tallas = document.querySelectorAll(".talla");

  let compras = 0;
  let tallaSeleccionada = null;
  const precioNormal = 195;
  const descuento = 15;

  // Seleccionar talla (aquí NO contamos, solo marcamos la elección)
  tallas.forEach(t => {
    t.addEventListener("click", () => {
      tallaSeleccionada = t.dataset.talla;
      tipo.textContent = tallaSeleccionada;
    });
  });

  // Al hacer clic en COMPRAR, incrementamos los contadores
  btn.addEventListener("click", () => {
    if (!tallaSeleccionada) {
      alert("Por favor selecciona una talla antes de comprar.");
      return;
    }

    // AQUÍ es donde realmente sumamos al contador de la talla específica
    let clicksTalla = Number(localStorage.getItem("clicks_" + tallaSeleccionada)) || 0;
    clicksTalla++;
    localStorage.setItem("clicks_" + tallaSeleccionada, clicksTalla);

    compras++;
    cantidad.textContent = compras;

    // aplicar descuento si compras >= 4
    let precioUnitario = compras >= 3 ? (precioNormal - descuento) : precioNormal;
    let totalCalculado = compras * precioUnitario;
    total.textContent = totalCalculado;
    localStorage.setItem("totalCompra", totalCalculado);
    localStorage.setItem("cantidadCompra", compras);
    localStorage.setItem("tallaCompra", tallaSeleccionada);
  });
});