// Ecercicio - 1

// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

n = 5

console.log("exercicio_1");
console.log("");

for (let index = 0; index < n ; index += 1) {
    let xRow = ""
   for (let indexRow = 0; indexRow < n ; indexRow += 1) {
        xRow += "*"                         
   }
   console.log(xRow);
}
console.log("");
console.log("----------------");
console.log("");

// Exercicio - 2

// imprima um triângulo retângulo com 5 asteriscos de base.

console.log("exercicio_2");
console.log("");

for (let index = 0; index < n ; index += 1) {
    let xRow = ""
   for (let indexRow = 0; indexRow < index + 1 ; indexRow += 1) {
        xRow += "*"                         
   }
   console.log(xRow);
}
console.log("");
console.log("----------------")
console.log("");