const ob1 = { a: 1, b: 2, c: 2 };
const ob2 = { b: 2, a: 1 };
const ob3 = 0b1
if (ob1 == ob3) {
    console.log('Equal');

} else {
    // console.log('not');

}

// console.log(JSON.stringify(ob1));

if (JSON.stringify(ob1) === JSON.stringify(ob2)) {
    console.log('Equal');

} else {
    // console.log('not');

}

function compareObject(ob1, ob2) {
    if (Object.keys(ob1).length !== Object.keys(ob2).length) {
        return false;
    }
    for (const prop in ob2) {
        if (ob1[prop] !== ob2[prop]) {
            return false;
        } else {
            return true;
        }
    }
}

const result = compareObject(ob1, ob2);

console.log(result);