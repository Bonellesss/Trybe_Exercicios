// Interpretação;

// devemos utilizar o array fruits ;
// o termo " percorra " indica uma estrutura de repetição, ou loop;
// " somando todos os valores " mostra que devemos ter uma variável que guarda o valor da soma dos valores;
// o termo " caso " indica uma estrutura condicional, ou if ;
// " imprima o valor final " indica um console.log ;


// Criação do algoritmo;

// Adicionar o array;
// Criar uma variável com valor 0;
// Criar um loop que percorre o array;
// Incrementar a variável com o valor correspondente a cada loop;
// Criar um if com a condição da variável ser maior que 15;
// Caso a variável obedeça a condição;
// Imprimir a variável
// Caso não obedeça a condição;
// Imprimir a mensagem "valor menor que 16";


// Codificação do algoritmo.

let fruits = [3, 4, 10, 1, 12];
let fruitSum = 0

for (const fruit of fruits) {
    fruitSum += fruit
}

if (fruitSum > 15) {
    console.log(fruitSum);
} else {
    console.log("valor menor que 16");
}