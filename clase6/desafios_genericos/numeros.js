// Crear un proyecto de node que genere 10000 numeros aleatorios en un rango de 1 a 20.
// Crear un objeto cuyas claves sean los numeros salidos y el valor asociado a cada clave sera la cantidad de veces que salio dicho numero.
// Representar por consola los resultados.

const objeto = {}

for(let i=0; i < 10000; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 20 ) + 1
    if(objeto[numeroAleatorio]){
        objeto[numeroAleatorio] ++
    } else {
        objeto[numeroAleatorio] = 1
    }
}

console.log(objeto)

