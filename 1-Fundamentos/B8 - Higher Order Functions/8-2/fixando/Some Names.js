const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((elem) => elem === name )

console.log(hasName(names, 'Ana'))