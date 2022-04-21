// construntor function
const fn = new Function('str',
`let obj = {};
for (let s of str){
   if (s !== " ") {
   obj[s] = s;
}
}

return obj;`);

/* function strToObj(str){
    let obj = {}
    for (let s of str){
       if (s !== " ") {
            obj[s] = s
       }
    }

    return obj;
}
 */

console.log(fn("MD Sajjad"))

