function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

const a = 14;
const b = 25;

const r1 = sum(a,b) - sub(a,b);
const r2 = r1 * multiplication(a,b);

console.log(r2);
