// method 
// inside object funcion is called method
const student = {
    id: 101,
    name: 'Samiul',
    Dept: 'CSE',
    Subjects: ['Computer Fundamentals', 'C programming', 'Java Programmig', 'Computer Arthitecture'],
    balance: 5000,
    isReach: false,
    takeExam: function() {
        console.log(this.name, 'Giving exam');
    },
    treatDey: function(expanse, tips) {
        this.balance = this.balance - (expanse + tips);
        return this.balance;
    }
}

student.takeExam();
const remaining1 = student.treatDey(500, 100);
const remaining2 = student.treatDey(900, 100);
console.log(remaining2);