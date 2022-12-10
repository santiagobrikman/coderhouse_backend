const dividir = (num1, num2) => {
    return new Promise((resuelto, rechazado) =>{
        if(num2 == 0) {
            rechazado('No se puede dividir entre 0')
        } else {
            resuelto(num1/num2)
        }
    })
}

const calculadora = async (num1, num2) => {
    try {
        let resultado = await dividir(num1, num2)
        console.log(resultado)
    } catch(error){
        console.log(error)
    }
}

calculadora(2, 0)