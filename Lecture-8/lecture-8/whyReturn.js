function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

const a = 2;
const b = 4;

const result = Math.abs(multiplication(sum(a,b), sub(a,b)));

/*  এখানে প্রথমে sum এবং sub এর return, multiplication তার নিজের value অথবা argument হিসেবে ব্যবহার করেছে। আবার multiplication এর return, Math.abs() argument হিসেবে ব্যবহার করেছে। */

// console.log(result);

/* 
 - Function defination
 - Function invoking
 - Function Parameters/ Arguments
 - Return result from function
*/

/* 
What is functional Progrmming?
    Answer: Funciton is a first class citizen
        What is First Class Citizen?
            Answer: we can treat function as value
            যেসব প্রোগ্রামিং ল্যাংগুয়েজের ফাংশনকে ভ্যালু হিসেবে পাস করা যায় সে সকল প্রোগ্রামিং ল্যাঙ্গুয়েজ কে ফাংশনাল প্রগ্রমিং লঙ্গুয়েজ বলে।

            value is 10, "text", true -> function
            value বলতে কেমন মনে করতে পারি সেটা হচ্ছে যে আমরা একটা নম্বর কে, টেক্সটকে আমরা যেভাবে মনে করি ঠিক সেভাবেই ভ্যালু হিসেবে ফাংশনকে মনে করতে যদি পারা যায় তাহলে আসলেই ফাংশনাল প্রগ্রমিং বলা যাবে।

            * Benefits:
             - we can store functions in a variable. Most of the programming language has no this benifits or impossible.

             - We can store function inside an object / array.

             - we can pass function as an argument
             - we cna also return a function from another function.

             * Prove -> Function is a value
*/

/* function hogaandMatha(pass){
    if (pass === 'hoga') {
        return "Matha"
    }else{
        return "Hoga"
    }
    
}

const fn = hogaandMatha("hoga")
console.log(fn)
 */
