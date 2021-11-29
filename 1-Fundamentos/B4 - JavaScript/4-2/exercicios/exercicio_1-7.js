// Exercicio - 1 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let number of numbers) {
    console.log(number);
}

// Exercicio - 2

let sum = 0
for (let numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
      sum += numbers[numberIndex];
}
console.log("The sum is: " + sum);

// Exercicio - 3 

let average = sum / numbers.length

console.log("The average is: " + average);

// Exercicio - 4

if (average > 20) {
    console.log("Average maior que 20");
} else {
    console.log("Average menor ou igual a 20");
}

