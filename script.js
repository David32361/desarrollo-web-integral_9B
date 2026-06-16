document.addEventListener("DOMContentLoaded", () => {

    console.log("Portal del Equipo 5 cargado correctamente");

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(tarjeta => {

        tarjeta.addEventListener("click", () => {

            alert(
                "Integrante seleccionado:\n\n" +
                tarjeta.querySelector("p").textContent
            );

        });

    });

});