let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
tasksList.unshift('Beber água')
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']


tasksList.pop();  // remove a última tarefa
tasksList.shift()
console.log(tasksList);

// [ 'Tomar café', 'Reunião' ]

let indexOfTask = tasksList.indexOf('Reunião');
console.log(indexOfTask);

// 1