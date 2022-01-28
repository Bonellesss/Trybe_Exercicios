// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'pera', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'nutella'];

const fruitSalad = (fruit, additional) => {
   const saladFruits = [...fruit, ...additional]

   return saladFruits
};

console.log(fruitSalad(specialFruit, additionalItens));