// What is Function 
// a block of code that fulfills a Specific task.
// why need --> Reusability, 

// Method 1 to declare 
/*
    function(keyword)  function_name (parameter){
        function_body;
    }
*/

// run();
// this will be run --> hoisting : it is the process of moving a function declaration to top of a file.

function run(){
    console.log("Running");
}

// function call / invoke
// run();

// Method 2 Named function assignment

// let stand = function walk(){ // hoisting will not work
//     console.log("Walking");
// };

// stand();

// Anonymous function assignment
let stand2 = function () { // hoisting will not work
    console.log("Walking");
}

// stand2();

// functions me hum 1 ,2 , 0 , 3 , 5 , ... parameters bhej sakte hi , 
// ! hum jo bhi pass krte hi , wo argument me store hote hi 
// jo key value ke for me hote hi , key to 0 se start hoti hi , array mt samajhna 

function sum(a,b){ // dynamic function --> kitne bhi parameter pass kro
    let total = 0;
    console.log(arguments);
    for(let val of arguments){
        total = total + val;
    }
    return total;
}

// console.log(sum(1,2));
// console.log(sum(1));
// console.log(sum());
// console.log(sum(1,2,3,4,5,6,7));
// console.log(sum(1,2,3,4,5));


//! rest operator ...
// it should be the last parameter
function sum2(num,...args){
    // console.log(args);
}

// hum jitne bhi parameters pass krenge wo saare args naam ke array ke ander store ho jayege 
sum2(1,2,3,4,5,6);  

// default parameter --> placed at last
function intererst(p,r = 5,t=2){

};

//hack 
// console.log(1000, undefined ,8);
 
// 43:45
let person = {
    fName : 'Love',
    lName : 'Babbar',
    get fulName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(val){// assuming rahul kumar is coming in val
        // if(typeof val !== String){
        //     throw new Error("You have not sent a String");
        // }
        let parts = val.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// ! getter setter ko call krte hue () nhi lagate hi , kyuki wo function nhi hi , wo property hi 


// console.log(fullName());// fullname function jab bnaya tha
person.fullName = 'Rahul Kumar '; // setter 
console.log(person.fulName);// callling getter 

// Getter , Setter
// getter --> you access the properties, setter :-> update ya change krne ke liye hota hi.
// setter --> change or to set properties.


// !Try & catch : error Handling 
// error in try , throw from catch 

// try {
//     person.fullName = 9;
// } catch (e) {
//     alert("You have got a error.");
// }
// finallr homework

// console.log(person.fulName);

//! Scope

{
    var a = 5;
    console.log(a);
}
// let se jo define hi wo block ke bahar access nhi ho sakte hi
// var se jo define hi wo function ke bahar access nhi ho sakte hi
// function ke ander defined hi nhi hi , to wo poore file me access kr sakte hi 
// const ka scope bhi block ke ander block wala , function ke ander function wal , explicit hota  hhi 
console.log(a);
//redefinition ka error nhi aayega const ke case me , do barr in two diff function, & also when one in funcion and one outside the function


// reduce

let arr = [1,2,3,4];
let total = 0;

for(let value of arr){
    total = total + value;
}

// method 2
// reduce ke ander callback function , uske ander accumulator and currentvalue likhna hoga , and second thing is initialisation of accumulator. 
// accumulator = total , value is value of array 
let totalSum = arr.reduce( (acc,cur) => acc + cur , 50); // 0 is the starting value of accumulator
// default value is first value of current value , if not given and current value will be our second value

console.log(totalSum);