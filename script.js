document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DE HORARIOS (ABIERTO / CERRADO) ---
    const badgeEstado = document.getElementById("estado-local");
    const ahora = new Date();
    const diaSemana = ahora.getDay(); 
    const horaActual = ahora.getHours(); 

    let estaAbierto = false;

    // Lunes = 1. Si no es lunes, evaluamos.
    if (diaSemana !== 1) { 
        // Si es Sábado (6) o Domingo (0)
        if (diaSemana === 0 || diaSemana === 6) {
            // Abre de 12 a 16 y de 20 a 02
            if ((horaActual >= 12 && horaActual < 16) || (horaActual >= 20 || horaActual < 2)) {
                estaAbierto = true;
            }
        } else {
            // Martes a Viernes: Abre de 20 a 01
            if (horaActual >= 20 || horaActual < 1) {
                estaAbierto = true;
            }
        }
    }

    // Actualizar el HTML según el estado
    if (estaAbierto) {
        badgeEstado.textContent = "● ABIERTO AHORA";
        badgeEstado.classList.add("open");
    } else {
        badgeEstado.textContent = "● CERRADO";
        badgeEstado.classList.add("closed-badge");
    }

    // --- LÓGICA EXTRA: Efecto visual opcional ---
    // Este código detecta cuando un elemento entra en la pantalla.
    // Es muy útil si querés agregar animaciones de entrada en el CSS más adelante.
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si el elemento entra en la pantalla, le podés agregar una clase
                // entry.target.classList.add('animacion-activa');
                // console.log("Un elemento es visible");
            }
        });
    });

    // Seleccionamos todas las tarjetas del menú para observarlas
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});