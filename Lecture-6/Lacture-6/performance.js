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
const idtoBeUpdated = arr.findIndex(item => item.id === id);
arr.splice(id,1)
console.timeEnd('find');

console.time('obj');
delete obj[id];
console.timeEnd('obj');
