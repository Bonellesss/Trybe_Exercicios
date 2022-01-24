const numbers = [18, 19, 24, 53, 4, 5, 76, 23, 54];

const sum = numbers.filter(number => number % 2 === 0).reduce((result, number) => number + result)

const evenSum = numbers.reduce((result, number) => number % 2 === 0 ? number + result : result)
console.log(sum); 
console.log(evenSum);