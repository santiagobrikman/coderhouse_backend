const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 <= 0 || num2 <= 0) {
            reject('Operacion innecesaria')
        } else {
            resolve(num1 + num2)
        }
    })
}

const restar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 <= 0 || num2 <= 0) {
            reject('Operacion invalida')
        } else {
            let resultado = num1 - num2
            if(resultado < 0) {
                reject('La calculadora solo calcula valores positivos')
            } else {
                resolve(resultado)
            }
        } 
        
    })
}

const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 < 0 || num2 < 0) {
            reject('La calculadora solo puede devolver valores positivos')
        } else {
            resolve(num1 * num2)
        }
    })
}

const dividir = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 == 0) {
            reject('No se puede dividir entre cero')
        } else {
            resolve(num1 / num2)
        }
    })
}

const calculadora = async (num1, num2) => {
    try{
        let suma = await sumar(num1, num2)
        console.log(suma)

        let resta = await restar(num1, num2)
        console.log(resta)

        let multiplicacion = await multiplicar(num1, num2)
        console.log(multiplicacion)

        let division = await dividir(num1, num2)
        console.log(division)

    } catch (error) {
        console.log('No se pudo hacer la operacion', error)
    }
}

calculadora(4,3)