const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const cars = [palio, shelbyCobra, chiron]
// escreva toObject abaixo
const toObject = ([name, brand, releaseYear]) => ({
    name,
    brand,
    releaseYear,
})

const carsObjects = arr => arr.map(car => toObject(car))

console.log(carsObjects(cars));

