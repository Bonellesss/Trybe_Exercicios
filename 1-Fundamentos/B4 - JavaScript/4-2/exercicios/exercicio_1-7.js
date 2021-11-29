// Exercicio - 1 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers) {
    console.log("R.1: " + number);
}
console.log('');
console.log('');




// Exercicio - 2

let sum = 0
for (let numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
      sum += numbers[numberIndex];
}
console.log("R.2: The sum is: " + sum);
console.log('');
console.log('');




// Exercicio - 3 

let average = sum / numbers.length

console.log("R.3: The average is: " + average);
console.log('');
console.log('');




// Exercicio - 4

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
