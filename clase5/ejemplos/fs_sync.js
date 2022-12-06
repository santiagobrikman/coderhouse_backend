const fs = require('fs')
let nombre = 'Santiago'

fs.writeFileSync('./texto.txt', `Buenas noches ${nombre}`, 'utf-8') //Crea archivo si no existe y agrega texto.

if(fs.existsSync('./texto.txt')){
    let texto = fs.readFileSync('./texto.txt', 'utf-8') //Lee texto
    console.log(texto) //Imprime texto

    fs.appendFileSync('./texto.txt', '\nBuenos dias') //Agrega texto al archivo

    texto = fs.readFileSync('./texto.txt', 'utf-8') //Lee texto
    console.log(texto) //Imprime texto

    fs.unlinkSync('./texto.txt') //Borrar archivo
    console.log('Archivo borrado')
}


