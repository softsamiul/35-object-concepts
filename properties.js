const student = {
    name: 'Samiul',
    id: 101,
    dept: 'CSE'
}

// 1. keys
const keys = Object.keys(student);
// console.log(keys);

// 2. values
const values = Object.values(student);
// console.log(values);

// 3. entries 
const entries = Object.entries(student);
// console.log(entries);

// 4. seal 

Object.seal(student);
student.name = 'SamiulPro';

// 5. freeze 
Object.freeze(student);
student.name = 'Samiul';

// 6. delete 
delete student.name;
console.log(student);