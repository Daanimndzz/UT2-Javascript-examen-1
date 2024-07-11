//Prueba ejercicio

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Básica</title>
</head>
<body>
    <script>
        function calcular(num1, num2, operacion) {
            let resultado;
            switch (operacion) {
                case '+':
                    resultado = num1 + num2;
                    break;
                case '-':
                    resultado = num1 - num2;
                    break;
                case 'X':
                case 'x':
                    resultado = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        alert("No se puede dividir por cero.");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                default:
                    alert("Operación no válida. Use +, -, X o /.");
                    return;
            }
            alert(`El resultado de ${num1} ${operacion} ${num2} es: ${resultado}`);
        }

        const operacion = prompt("Introduce una operación (+, -, X, /):");
        if (operacion === '+' || operacion === '-' || operacion === 'X' || operacion === 'x' || operacion === '/') {
            const num1 = parseFloat(prompt("Introduce el primer número:"));
            const num2 = parseFloat(prompt("Introduce el segundo número:"));
            if (isNaN(num1) || isNaN(num2)) {
                alert("Por favor, introduce números válidos.");
            } else {
                calcular(num1, num2, operacion);
            }
        } else {
            alert("Operación no válida. Use +, -, X o /.");
        }
    </script>
</body>
</html>
