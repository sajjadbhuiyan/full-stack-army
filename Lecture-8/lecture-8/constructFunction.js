// construntor function
/* const fn = new Function('str',
`let obj = {};
for (let s of str){
   if (s !== " ") {
   obj[s] = s;
}
}

return obj;`);

function strToObj(str){
    let obj = {}
    for (let s of str){
       if (s !== " ") {
            obj[s] = s
       }
    }

    return obj;
}


console.log(fn("MD Sajjad")); */

const operations = [
   {
      ages:[25, 27],
      args: ['a', 'b'],
      body: 'console.log("a+b",a+b)',
   },

   {
      ages:[25, 27],
      args: ['a', 'b'],
      body: 'console.log("a-b",a-b)',
   },

   {
      ages:[25, 27],
      args: ['a', 'b'],
      body: 'console.log("a*b",a*b)',
      
   },
];

operations.forEach(operation => {
   console.log(...operation.body);
   console.log(...operation.args);
   const fn = new Function(...operation.args,operation.body);

   fn(...operation.ages);
})

