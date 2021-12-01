// Exercicio - 1 

// Algoritmo

// adicionar o Array
// criar o laço for 
//    imprimir com o console.log


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers) {
    console.log("R.1: " + number);
}
console.log('');
console.log('');




// Exercicio - 2

// Algoritmo

// cosidere o Array numbers
// criar variavel com valor = 0
// usar o for
//   somar todos os numeros do Array
// imprimir variavel com o resultado


let sum = 0
for (let numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
      sum += numbers[numberIndex];
}
console.log("R.2: The sum is: " + sum);
console.log('');
console.log('');




// Exercicio - 3 

// Algoritmo

// considere a variavel da soma do Array
// dividir variavel da soma pelo numero de itens no Array
// imprimir resultado

let average = sum / numbers.length

console.log("R.3: The average is: " + average);
console.log('');
console.log('');




// Exercicio - 4

// Algoritmo

// considerar resultado do exercicio anterior 
// verificar se o resultado é maior que 20
// se for maior
    // imprimir "valor maior que 20"
// se for menor
    // imprimir "valor menor que 20"

if (average > 20) {
    console.log("R.4: Average maior que 20");
    console.log('');
    console.log('');
} else {
    console.log("R.4: Average menor ou igual a 20");
    console.log('');
    console.log('');
}




// Exercicio - 5

// Algoritmo

// cosiderar Array numbers
usar

let bigger = 0 

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) {
        bigger = numbers[i]
    } 
} 

console.log("R.5: O maior é o " + bigger);
console.log('');
console.log('');




// Exercicio - 6

let countImpar = 0

for (let countIndex = 0; countIndex < numbers.length; countIndex += 1) {
    if (numbers[countIndex] % 2 !== 0) {
        countImpar += 1;
    }
}

if (countImpar !== 0) {
    console.log("R.6: " + countImpar);
    console.log('');
    console.log('');
} else {
    console.log("R.6: Nenhum impar encontrado");
    console.log('');
    console.log('');
}




// Exercicio - 7

let little = numbers[0] 

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < little) {
        little = numbers[i]
    } 
} 

console.log("R.7: O menor é o " + little);
console.log('');
console.log('');




// Exercicio - 8

let contagem = []

for (let Counter = 1; Counter < 26; Counter += 1) {    
    contagem.push(Counter)
}

console.log("R.8: " + contagem);
console.log('');
console.log('');




// Exercicio - 9

for (let indice = 0; indice < contagem.length; indice += 1) {
    console.log('R.9: ' + contagem[indice] / 2);
}