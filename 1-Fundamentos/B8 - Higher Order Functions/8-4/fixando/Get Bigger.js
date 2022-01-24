const numbers = [50, 85, -30, 30, 15]
let bigger = 0;

const findBigger = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > bigger) {
          bigger = arr[i]
        }  
    }

    return bigger
}

const biggestFinder = (result, number) => number > result ? number : result;

const biggest = numbers.reduce(biggestFinder, 100)
console.log(biggest);
