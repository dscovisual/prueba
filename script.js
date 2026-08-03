document.addEventListener("DOMContentLoaded", function() {
    
--
    const badgeEstado = document.getElementById("estado-local");
    const ahora = new Date();
    const diaSemana = ahora.getDay(); 
    const horaActual = ahora.getHours(); 

    let estaAbierto = false;


    if (diaSemana !== 1) { 
    )
        if (diaSemana === 0 || diaSemana === 6) {
      
            if ((horaActual >= 12 && horaActual < 16) || (horaActual >= 20 || horaActual < 2)) {
                estaAbierto = true;
            }
        } else {
 
            if (horaActual >= 20 || horaActual < 1) {
                estaAbierto = true;
            }
        }
    }


    if (estaAbierto) {
        badgeEstado.textContent = "● ABIERTO AHORA";
        badgeEstado.classList.add("open");
    } else {
        badgeEstado.textContent = "● CERRADO";
        badgeEstado.classList.add("closed-badge");
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
              
            }
        });
    });

  
    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
        observer.observe(tarjeta);
    });
});
