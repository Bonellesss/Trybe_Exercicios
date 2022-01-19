const newEmployees = (genarator) => {
  const employees = {
    id1: genarator('Pedro Guerra'), 
    id2: genarator('Luiza Drumond'), 
    id3: genarator('Carla Paiva'), 
  }
  return employees;
};

const idGenerator = name => {
    const text = name.toLowerCase()
    const splited = text.split(' ');

    return {
        nomeCompleto: name,
        Email: `${splited[0]}_${splited[1]}@trybe.com`,
    }   
    
}

console.log(newEmployees(idGenerator)); 
