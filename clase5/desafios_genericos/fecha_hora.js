const fs = require('fs');

const fecha = new Date().toLocaleDateString()

fs.writeFile('./fecha_hora.txt', fecha, (error) => {
    if(error) console.log('Ocurrio un error: ', error)

    fs.readFile('./fecha_hora.txt')
})

