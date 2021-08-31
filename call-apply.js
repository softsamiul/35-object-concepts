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

// using call pass  the parameter using comma
// console.log(sohel.treatDey.call(amir, 500, 100));
// console.log(sohel.treatDey.call(sajda, 1000, 100));

// using apply pass the parameter using array

console.log(sohel.treatDey.apply(amir, [500, 100]));
console.log(sohel.treatDey.apply(sajda, [500, 100]));