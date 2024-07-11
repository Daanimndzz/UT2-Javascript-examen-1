/**
 * 3 Función [4puntos]
 * 
 * Función que recibe como parámetros dos números y la operación a realizar. 
 * [1pt] Si la operación es 'sumar', muestra por pantalla la suma de ambos
 * [1pt] Si la operación es 'restar', muestra la resta
 * [1pt] Si la operación no  es ninguna de las dos, mostrar 'operación desconocida'
 * [1pt] Hacer que el parámetro de la operación sea siempre 'sumar' por defecto (en caso de que no se especifique)
 * 
 */

console.log('ejercicio 3') //no quitar este console.log, empezar debajo el ejercicio

function operacion(num1, num2, operacion = 'sumar') {
    switch(operacion) {
        case 'sumar':
            console.log(num1 + num2);
            break;
        case 'restar':
            console.log(num1 - num2);
            break;
        default:
            console.log('Operación desconocida');
    }
}

operacion(32, 87 , 'restar'); 
