function calcularFactorial() {
    let num;
    let esValido = false;

    // Bucle para pedir el número hasta que sea válido
    while (!esValido) {
        num = prompt("Introduce un número para calcular su factorial:");

        // Validar que sea un número
        if (!isNaN(num) && num > 0) {
            esValido = true;
            num = Number(num);
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }

    // Calcular el factorial
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    // Mostrar el resultado en el DOM
    document.getElementById("result").innerText = `El factorial de ${num} es: ${factorial}`;
}

// Llamar a la función para que se ejecute al cargar el script
calcularFactorial();