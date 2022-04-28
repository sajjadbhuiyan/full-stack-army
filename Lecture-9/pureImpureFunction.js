function sum(a,b){
    return a+ b;
}

sum(14, 15);


const arr = [1,2,3];
function add(arr, data){
    arr.push(data);
}

add(arr,4);
console.log(arr);



// side effect

let limit = 100;
function changteLimit(limit){
    limit = 500;
    console.log(limit)
}

changteLimit(200)
console.log(limit);

/* const arr = [1,2,3];
function add(data){
    arr.push(data);
}

add(4);
console.log(arr);
 */

function log(msg){
    console.log(msg)
}