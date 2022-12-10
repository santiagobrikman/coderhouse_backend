const dividir = (num1, num2) => {
    return new Promise((resuelto, rechazado) =>{
        if(num2 == 0) {
            rechazado('No se puede dividir entre 0')
        } else {
            resuelto(num1/num2)
        }
    })
}

dividir(1,0)
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error))

    
