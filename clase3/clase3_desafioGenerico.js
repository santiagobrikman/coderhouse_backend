// Desafio generico

const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

let arrayProductos = objetos.map(prod => Object.keys(prod))
console.log(arrayProductos)

let total = objetos.map(value => Object.values(value))
console.log(total)

