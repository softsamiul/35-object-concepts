// 1. ES-6 new way

const students = { name: 'Samiul', age: 72 };

// 2. using new keyword

const person = new Object();

// 3. using prototypical inheritance

const human = Object.create(students)
    // console.log(human.age);

// 4. using class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peop = new People('Selim', 32);

// console.log(peop.name);

// 5 using function
function MyPeople(name) {
    this.name = name;
}

const mypep = new MyPeople('Samiul');

console.log(mypep);