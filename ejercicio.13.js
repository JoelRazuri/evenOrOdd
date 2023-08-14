/*
    Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const evenOrOdd = (number=undefined) => {
    if (!Number.isInteger(number)) return console.warn("Debe ingresar un número");

    (number%2 === 0) 
        ?console.info(`El número ingresado ${number} es par`)
        :console.info(`El número ingresado ${number} es impar`);
}

console.info("EJERCICIO 13");
evenOrOdd(true);
evenOrOdd(10);
evenOrOdd(3);