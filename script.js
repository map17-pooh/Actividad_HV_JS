document.addEventListener("DOMContentLoaded", function() {

    // 1. Mensaje de bienvenida
    alert("Bienvenido a la hoja de vida de Monica Polania");

    // 2. Crear botón de imprimir
    const botonImprimir = document.createElement("button");
    botonImprimir.textContent = "Descargar / Imprimir CV";
    botonImprimir.style.margin = "20px";
    botonImprimir.style.padding = "10px";
    botonImprimir.style.cursor = "pointer";

    document.body.insertBefore(botonImprimir, document.body.firstChild);

    botonImprimir.addEventListener("click", function() {
        window.print();
    });

    // 3. Ocultar / mostrar secciones al hacer clic en títulos
    const titulos = document.querySelectorAll("h2");

    titulos.forEach(function(titulo) {
        titulo.style.cursor = "pointer";

        titulo.addEventListener("click", function() {
            const siguiente = titulo.nextElementSibling;

            if (siguiente.style.display === "none") {
                siguiente.style.display = "block";
            } else {
                siguiente.style.display = "none";
            }
        });
    });

    // 4. Efecto en habilidades
    const habilidades = document.querySelectorAll("ul li");

    habilidades.forEach(function(item) {
        item.addEventListener("mouseover", function() {
            item.style.color = "#2E6F95";
            item.style.fontWeight = "bold";
        });

        item.addEventListener("mouseout", function() {
            item.style.color = "black";
            item.style.fontWeight = "normal";
        });
    });

});