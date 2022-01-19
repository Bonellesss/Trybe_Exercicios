const raffle = (maxNumber, myNumber, callBack) => {
    const randomNumber = Math.floor(Math.random() * maxNumber + 1)   

    return  `O número sorteado foi: ${randomNumber}, seu numero é: ${myNumber}, ${callBack(myNumber, randomNumber)}`
}

const numCheck = (number, raffleNum) => number === raffleNum ? "Parabéns você ganhou" : "Tente novamente"

console.log(raffle(5, 5, numCheck)); 
