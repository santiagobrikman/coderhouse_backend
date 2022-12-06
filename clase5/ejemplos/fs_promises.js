const fs = require('fs')

const fsPromises = async (nombreArchivo) => {
    try{
        await fs.promises.writeFile(nombreArchivo, 'Buenas noches')

        let texto = await fs.promises.readFile(nombreArchivo, 'utf-8')
        console.log(texto)

        await fs.promises.appendFile(nombreArchivo, '\nBuenos dias')

        texto = await fs.promises.readFile(nombreArchivo, 'utf-8')
        console.log(texto)

        await fs.promises.unlink(nombreArchivo)

    } catch (error) {
        console.log('Ocurrio un error', error)
    }
}

fsPromises('./texto1.txt')