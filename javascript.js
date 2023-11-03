document.getElementById("changeBackgroundColor").addEventListener("click", function() {
    const newBackgroundColor = prompt("Ingrese un nuevo color de fondo (por ejemplo, #ff6b6b):");
    if (newBackgroundColor) {
        document.body.style.backgroundColor = newBackgroundColor;
    }
});

document.getElementById("changeTextColor").addEventListener("click", function() {
    const newTextColor = prompt("Ingrese un nuevo color de texto (por ejemplo, #fff):");
    if (newTextColor) {
        document.body.style.color = newTextColor;
    }
});

document.getElementById("changeHaircutImage").addEventListener("click", function() {
    const newHaircutImage = prompt("Ingrese la URL de la nueva imagen de corte de pelo:");
    if (newHaircutImage) {
        document.querySelector(".service img[alt='Corte de Pelo']").src = newHaircutImage;
    }
});

// Repite el código anterior para los botones de cambio de imagen de coloración y manicure
