// Pegue cada um dos exercícios de 1 a 5 do final do dia 4.1 e faça com que todos eles sejam funções de um mesmo arquivo. As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções.

// fixando - 1

// const a = 9
// const b = 5
            
// let adição = a + b
// let subtração = a - b
// let mutiplicação = a * b
// let divisão = a / b
// let módulo = a % b

function adição(value1, value2) {
    return value1 + value2 
}

function subtração(value1, value2) {
    return value1 - value2
} 

function mutiplicação(value1, value2) {
    return value1 * value2
}
function divisão(value1, value2) {
    return value1 / value2
}
function modulo(value1, value2) {
    return value1 % value2
}

function operations (value1, value2){
console.log(adição(value1, value2));
console.log(subtração(value1, value2));
console.log(mutiplicação(value1, value2));
console.log(divisão(value1, value2));
console.log(modulo(value1, value2));
}

results=operations(10, 4)