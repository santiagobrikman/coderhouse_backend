const contador = () => {
    let cont = 1
    console.log('Iniciando el contador')
    let timer = setInterval(() => {
        console.log(cont++)
        if(cont > 5){
            clearInterval(timer)
        }
    }, 1000)
}

console.log('Iniciando programa')
contador()
console.log('Terminando programa')