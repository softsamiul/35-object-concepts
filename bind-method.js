const sohel = {
    id: 101,
    name: 'Samiul',
    Dept: 'CSE',
    balance: 5000,
    treatDey: function(expanse, tips) {
        this.balance = this.balance - (expanse + tips);
        return this.balance;
    }
}

const amir = {
    id: 102,
    name: 'amir',
    dept: 'CSE',
    balance: 6000
}
const sajda = {
    id: 102,
    name: 'amir',
    dept: 'CSE',
    balance: 6000
}



const amirTreatDey = sohel.treatDey.bind(amir);

// console.log(sohel);
// console.log(amir);

// console.log(amirTreatDey(100, 10));


const sajdaTreatDey = sohel.treatDey.bind(sajda);

console.log(sajdaTreatDey(500, 10));