const arr = [1, 2, 3, 4, 5]

//const nuevoArray = arr.map((val, ind) => {val: val * 2, ind})
//console.log(nuevoArray)

function algo(val, ind) {
    return {val: val * 2, ind}
}

const nuevoArray = arr.map(algo)

console.log(nuevoArray)