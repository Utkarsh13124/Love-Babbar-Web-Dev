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

let courses = [
    {no : 1 , name : "love"},
    {no : 2 , name : "babar"}
];
// indexof ka use krke hum Object ko search nhi kr sakte hi , kyuki dono ka reference alag hi , jo index of ke ander likha jaayega , aur jisko hum search krna chaah rha hi , 
// primitive ke case of Indexof work krta hi
// also not able to search by includes method
// because here we search through val = val  

// solution 53 : 30 min 
// searching on object / reference 
// callback function : - a callback function is a function passed in a function  as an argument , wwhich is then invoked inside the outer function to complete some kind of routine or action.