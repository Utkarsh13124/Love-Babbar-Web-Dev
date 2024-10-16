
/*
//! Math Object
    // MDN

//! String
    // two types primitive and obje
        // mdn

    let firstName = new String('Utkarsh');
    let lastname = "Pandey";

    // making primitive to object
    // jaise hum dot operator lagate hi waise hi wo use as a object treat krne lag jata hi
    console.log(lastname.includes('P'));

    
// Split , trim , replace , startwith , endwith , trimstart , trimend, touppercase , length , include , 
//let str = "I love My  Country";
// split helps us to get all the word by splitting it by ' ' , 

// Escape notation 
//  \' ko use krne se hum ' print krwa payenge

//! backticks --> template signal., hum kaise bhi text ko likh sakte hi 
// if we want to refer to some variable , then use ${varName}


//! Date and Time --> 5 format to create , you can refer MDN for it
let date = new Date();
// setFullYear , setMonth , all are function in the object , get and set function



//! Array 
    // collection of item , same or different

    let numbers = [1 , 4 , 5 , 7 ];

    // insertion --> begin , mid , end
    numbers.push(9); // adding at last
    numbers.unshift(8); // adding at starting
    numbers.splice(2  , 0 , 'a' , 'b' , 'c'); // adding at idx , after deleting _element

    // finding/ searching by indexOf method , if present give its idx value else -1 , (key , idx jaha se search tart krna hi)
    if(numbers.indexOf(1 , 0) != -1){
        console.log("Present");
    }
    // method second --> include
    console.log(numbers.includes(4));// return true or false

// Array of Object


// indexof ka use krke hum Object ko search nhi kr sakte hi , kyuki dono ka reference alag hi , jo index of ke ander likha jaayega , aur jisko hum search krna chaah rha hi , 
// primitive ke case of Indexof work krta hi
// also not able to search by includes method
// because here we search through val = val  

// solution 53 : 30 min 
// searching on object / reference 
// callback function : - a callback function is a function passed in a function  as an argument , wwhich is then invoked inside the outer function to complete some kind of routine or action.

// predicate function , condition function , callback function
//! find helps us to search the object in array of object , 

let courses = [
    {no : 1 , name : "love"},
    {no : 2 , name : "babar"}
];

// let course = courses.find( function(course) {
//     return course.name === "Love";
// }); 

let course = courses.find( course => course.name === 'love');
// above code is written with help of arrow function , 
// parameter is single so we remove the bracket also., and single statement is here so we not included return statement.
// it returns an object

// converting
// returns the object,  

console.log(course);


//! Removing Element
// pop --> last element, shift --> begin , splice --> spice(idx , noOfElement to be reduced)

let numb = [1,2,3,4,5,6,7];

numb.pop(); // end

numb.shift(); // begining

numb.splice(2 , 1);// middle

console.log(numb);

*/
//! emptying

let number1 = [1,2,3,4,5,6,7];
let number2 = number1;
// number1 = [];// # garbage collector will delete all the value.

// console.log(number1);
// console.log(number2);
// humne inshort values ko delete nhi ki hi  , 
// kyuki wo abhi bhi number ki values ko point kr rha hi , kyuki array  ek object hi aur object copy nhi hote hi bulki wo to referce krte hi 

// Method 1 , length ko zero kr do
number1.length = 0;
console.log(number1);
console.log(number2);

// method 2
number1.splice(0,number1.length);

// method 3 
// pop kro jab tk length  0 na ho jaaye 


//! Combine
// Method 1 concatnate two array

let first = [1 , 2 , 3];
let second = [ 4, 5  , 6];

let comb = first.concat(second);
console.log(comb);

let sliced = comb.slice(2 ,3);// both are indexes 
// if we only a index ,, then it will take from that index to  last index.
// if we not write anything then it will create a copy of the array.
console.log(sliced);


// Method 2: -  spread operator

let combined = [...first,'a',...second];
console.log(combined);

//iterating an array :
// for of loop , for each
//? Javascript is easy , with practice things will become easy.

let arr = [1,2,3,4,5,6,7];
for(let val of arr){
    console.log(val);
}

arr.forEach(function(num){// writing callback function to defining what he has to do for each element
    console.log(num);
});


//! Joining array
// join all the value and get a single value.

const joined = arr.join(' ');// default separator is ','
console.log(joined);

//! spliting / separating each word in javascript : the split Method

let msg = 'This is my first message.';
let parts = msg.split(" ");

console.log(parts);// also can joi with above method.


//! sorting and reverseing

let brr = [4 , 2 , 8 , 5 , 0 ];
brr.sort();

brr.reverse();
console.log(brr);

// ! filtering array 

let crr = [-1 , 3 , -4 , -5 , 8 , 1 ,2];

let filtered = crr.filter(function(val){
    return val >= 0;
});

console.log(filtered);


//! mapping array 

let drr = [7,8,9,10];
let items = drr.map(function(val){
    return 'Student_no ' + val;
});

console.log(items);

// mapping with  object
let itemObj = filtered.map( function(num){
    let obj = {value : num};
    return obj;
})

let itemObj2 = filtered.map( num => {value : num});

//! chaining
let item3 = crr
                .filter(val => val >= 0)
                .map(num => {val : num});

console.log(itemObj);
