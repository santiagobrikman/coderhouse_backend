const moment = require('moment');

const fechaActual = moment()
const fechaNacimiento = moment('1999-02-07');

if(fechaNacimiento.isValid()) {
    console.log('Es valido')
    const dias = fechaActual.diff(fechaNacimiento, 'days')
    console.log(`Dias: ${dias}`)
}

