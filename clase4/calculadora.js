//Definicion de funciones de operaciones matematicas

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calculadora = (num1, num2, cb) => {
    let resultado = cb(num1, num2)
    return resultado
}

console.log(calculadora(2,8, multiplicar))
console.log(calculadora(2,8, dividir))

