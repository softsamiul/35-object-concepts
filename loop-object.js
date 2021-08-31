const arr = ['samiul', 'Web Developer', 'Stackers Panda'];

const student = {
    name: 'Samiul',
    dept: 'CSE',
    year: '4th',
    sem: '5th',
    roll: 52
};
// loop in array
for (const elem of arr) {
    // console.log(elem);

}

// loop in object

// 1. using for in 
for (const elem in student) {
    // console.log(elem, student[elem]);

}

// 2. using key 

const keys = Object.keys(student);

for (const elem of keys) {
    // console.log(elem, student[elem]);

}

// advance ==> using entries

const entries = Object.entries(student);

for (const [key, value] of entries) {
    console.log(key, value);

}