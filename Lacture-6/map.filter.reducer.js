//map, filter, reduce

const numbers = [1,2,3,4,false,'', NaN, 5,6];

/* const strs = numbers.filter((v) => v).map((v) => v.toString())
console.log(strs); */ // chain bole etare

const result = numbers.reduce((accumulator, cur, index) => {
    if (index === 0) accumulator += '[';
    if(cur){
        accumulator = accumulator + cur.toString() + (index < numbers.length - 1 ? ',' : '');
    }
    if (index === numbers.length - 1) accumulator += ']';
    return accumulator;
}, '')

console.log(result);