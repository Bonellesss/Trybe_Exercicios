// ./src/index.ts

///...

/* Fazemos a modificação da nossa função approvedStudents */
const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(({ grade }) => (
    school === 'Standard' ? grade >= 0.7 : grade >= 0.8
  ));

/* Abaixo temos o exemplo de execução com algumas adições */
const studentsExample = [
  {
    name: 'Lee',
    school: 'Standard',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
  {
    name: 'Albus',
    school: 'Hogwarts',
    disciplines: [
      { name: 'divination', grade: 0.8 },
      { name: 'potions', grade: 0.9 },
    ],
  },
];

// setApproved(studentsExample);