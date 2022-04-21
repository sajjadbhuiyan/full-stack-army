function myReducer(array, cb, init){
    let acc = init;
    for (let i = 0; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
        
    }
    return acc;
}

const sum = myReducer([1,2,3,4], (a,b)=> a+b, 0);
console.log(sum);

/* (a,b) => {
    acc = a+b;
    return acc;
}
 */

const arr = [1,2,'',false, 3, NaN, false, 4, 5, NaN, 6];
const result = myReducer(arr, (acc, cur) => {
    if(cur){
        acc.push(cur*cur);
    }
    return acc;
}, []);

console.log(result)