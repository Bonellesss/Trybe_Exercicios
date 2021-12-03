// Fixando - 1 

// utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
console.log('Fixando - 1');

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let key in names) {
    console.log('Olá ', names[key]);
}


console.log(' ');
console.log('----------------');
console.log(' ');



// Fixando - 2

// utilize For/in e imprima um console.log com as chaves e valores desse objeto.
console.log('Fixando - 2');

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const key in car) {
    console.log(key, car[key]);
}