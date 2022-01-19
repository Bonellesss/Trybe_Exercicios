const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testCheck = (template, student, callback) => callback(template, student)

const checker = (template, student) => {
    grade = 0;
    
    for (let i = 0; i < template.length; i += 1) {
        if (student[i] === template[i]) {
            grade += 1;
        } else if (student[i] !== 'N.A') {
            grade -= 0.5;
        }
    }  
    return grade
}

console.log(testCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, checker));
