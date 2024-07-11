/**
 * 1 Condicionales [3 puntos]
 * 
 * Crear un programa que pida al usuario(prompt) que introduzca uno de los siguientes caracteres: + - x /
 * 
 * Si introduce '+' mostrar por consola 'sumar'
 * Si introduce '-' mostrar por consola 'restar'
 * Si introduce 'x' mostrar por consola 'multiplicar'
 * Si introduce '/' mostrar por consola 'dividir'
 * Si no introduce ninguno de los anteriores, mostrar :'no conozco esa operación'
 * 
 */

console.log('ejercicio 1') //no quitar este console.log, empezar debajo el ejercicio


let operacion = window.prompt("Operacion a realizar")
let a = window.prompt("Numero 1")
let b = window.prompt("Numero 2")
let suma = parseFloat(a) + parseFloat(b)

if(operacion === '+'){
    console.log('Suma='+ suma);
}else if(operacion === '-'){
    console.log('Resta='+ (parseFloat(a) - parseFloat(b)));
}   else if(operacion === 'x'){
    console.log('Multiplicar='+ suma);
}else if(operacion === '/'){
    console.log('Dividir='+ (parseFloat(a) / parseFloat(b)));
} else{
    console.log('No conozco esa operacion');
}


