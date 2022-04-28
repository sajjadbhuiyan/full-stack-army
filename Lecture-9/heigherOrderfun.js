/* 
* Higher order function
* - function can be passed as an argument
* - function can be return from another function

*/


/* 
* Hidden concepts
* - Scope
* - clouser
* - Execution/functon context
* - Hosting
*/

function gererateTwoRandomNumber(max, whatDoYouWant /* ai kanne ki hoise? whatDoYouWant er modde ekta function assign hoise */){ 
    const random1 = Math.floor(Math.random() * max);
    const random2 = Math.floor(Math.random() * max);
    /*const whatDoYouWant = (rend1, rend2) =>{
        console.log(rend1, rend2)
    } */  // airokom odirrsho ekta function creat hobe er modede. ekhon porjonto ja buslam.
    const result =  whatDoYouWant(random1, random2);
    return result;    
}

/* gererateTwoRandomNumber(100, (rend1, rend2) =>{
    console.log(rend1, rend2)
}) */

console.log(gererateTwoRandomNumber(100, (rend1, rend2) => rend1 + rend2));
console.log(gererateTwoRandomNumber(10, (rend1, rend2) => rend1 - rend2));
console.log(gererateTwoRandomNumber(50, (rend1, rend2) => rend1 * rend2 + rend2 * rend2));



function power(p){
    return function (n){
        let  resultOfPower = 1;
        for (let i = 1; i <= p; i++) {
            resultOfPower *= n;
        }
        return resultOfPower;
    } 
}

const sqr /* sqr = function (n){
    let  resultOfPower = 1;
    for (let i = 1; i <= p; i++) {
        resultOfPower *= n;
    }
    return resultOfPower;
}  */ = power(2);

const cube = power(3);
const power8 = power(8);

console.log("SQR", sqr(4));
console.log("CUBE", cube(3));
console.log("POWER8", power8);

console.log(sqr(4))