const arr = [];
const obj = {};

for(let i = 0; i<5000000; i++){
    const o = {
        id: i,
        value: i,
    }
    arr.push(o);
    obj[i] = o;
}

console.time('find');
const id = 4999999;
const idtoBeUpdated = arr.find(item => item.id === id);
idtoBeUpdated.value = 555;
console.timeEnd('find');

console.time('obj');
obj[id].value = 999;
console.timeEnd('obj');
