//Uso de setTimeout

const temporizador = (callback, nombre, tiempo) => {
    setTimeout(() => {
        console.log("Ejecutando la tarea")
        callback(nombre)
    }, tiempo)
}

const saludo = (nombre) => console.log(`Hola ${nombre}, todo bien?`)

console.log(`Iniciando programa`)
temporizador(saludo, 'Juancho', 5000)
console.log(`Terminando programa`)



