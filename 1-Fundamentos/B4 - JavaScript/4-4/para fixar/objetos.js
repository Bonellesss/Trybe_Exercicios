// fixando - 1 

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

console.log('Fixando - 1');

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 43,
    medals: {
        golden: 2,
        silver:3,
    }
}
console.log(' ');
console.log('----------------');
console.log(' ');

// fixando - 2

// Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('Fixando - 2');

player ['fullName'] = player.name + ' ' + player.lastName

console.log('A jogadora ' + player.fullName + ' tem ' + player.age + ' anos de idade');

console.log(' ');
console.log('----------------');
console.log(' ');



// fixando - 3


// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

console.log('Fixando - 3');

 player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(' ');
console.log('----------------');
console.log(' ');



// fixando - 4


// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('Fixando - 4');

console.log('A jogadora ' + player.fullName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

console.log(' ');
console.log('----------------');
console.log(' ');



// fixando - 5


// Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('Fixando - 5');

console.log('A jogadora ' + player.fullName + ' possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

console.log(' ');
console.log('----------------');
console.log(' ');


