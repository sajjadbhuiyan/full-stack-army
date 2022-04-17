const arr = [];

for (let i = 0; i <= 5000000; i++) {
    arr.push(i)
}

console.time("not-Optimize");
arr.filter(item => item % 2 === 0).map(item => item*2);
console.timeEnd("not-Optimize");

console.time("Optimize");
arr.reduce((acc, cur) =>{
    if(cur){
        acc.push(cur * 2);
    }
    return acc;
}, []);
console.timeEnd("Optimize");