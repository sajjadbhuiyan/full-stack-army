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

const result = multiplication(sum(a,b) - sub(a,b));

console.log(result);
