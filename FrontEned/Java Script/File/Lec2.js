
// object create
    let rectangle = {
        length : 1,
        breadth : 2,

        draw : function(){
            console.log('drawing a rectangle');
        }
    };

//! creating multiple object 1
// factory function
    // this is creating a object and returning it.
    // currently this is returning the rectangles of fixed length and breadth but we want that we decided what it should be.

function createRectangle(len , bre){
    let rectangle = {
        length : len,
        breadth : bre,
    
        draw : function(){
            console.log('drawing a rectangle');
        }
        ,
        draw1(){
            console.log('Same funtion as above');
        }
    };
    return rectangle;
}

let recObj1 = createRectangle(4,5);// createRectangle is returning the object.

// ! type 2 creating object 
// construcctor function
    // return nhi krna hi , comma bhi use nhi ho raha hi

function Square(len , bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('Drawing a sqaure');
    }
}

let newSq = new Square(4,6);

// ! dynamic nature of object --> kisis bhi object ke ander , deletion bhi possible hi , insertion bhi possible hi . 

newSq.area = 24; // inserting a property to an object 
console.log(newSq);

delete newSq.area;
console.log(newSq);

// ! constructor Property 
    // every object will have constructor , function in javascript is also object.
    // by default constructor ka bhi canstructor Function hota hi , or if not define then also its constructor will be Function
    // Function internall bnata hi hum khud bhi bna sakte hi , 
    // let Circle = new Function(' ', ' ', `  backtick ke ander poora code hota hi .`) 

    // creating constructor of constructor ,
let Circle = new Function('len' , 'bre' , `
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
    console.log('Circle');
    }
    `)

let cir = new Circle(37,4);
console.log(cir);

// Function are object

// 1 hr 11 min. 
// continuing

//! types in JS
    // primitive or value types --> Number , string , boolean , undef , null , symbol
    // reference types or object --> arrays , function , object

let a = 10;
let b = a;//! copy is creating
a++;
console.log(a);
console.log(b);

// by reference
let aa = { value : 10};
let bb = aa; //! address is passing

aa.value++;
console.log(aa.value);
console.log(bb.value);

// Notess: - Primitive are copy by their value
// references are copied by their address.
 
// pass by value

let c = 10;

function inc(c){ // primitive are pass by their copy , Pass by value
    c++;// copy of c is created and that is incremented., that is incremented. 
}

inc(c); // primitive is passed

console.log(c);// 10

// pass by reference
function incre(d){
    d.value++;
}

// let d = {value : 10};
// incre(d);
// console.log(d);

//! Iterating through object
    // for in , for of loop 

let rhombus = {
    length : 2,
    breadth : 4
};

// for-in loop
for(let key in rhombus){ //! using to iterate inside the object
    // keys are reflected through key variable  value with rectangle[key] 
    console.log(key , rhombus[key]);
}

// for of loop
    // iterables pr laga sakte hi , Array , Map 
    // for(let key of rhombus){// error as rhombus is not iterable
for(let key of Object.entries(rhombus)){ // ab ye humara ek array bn gya hi, jo saari keys contain krta hi.
    console.log(key);
}

// of jo ki iterables pr lagta hi 
// Objec pr for in lagta hi
// but hum for of , Object.keys() --> se key , Object.entries() --> key value pair print krwa sakte hi   

// finding that certain properties existor not;
if('length' in rhombus){
    console.log("present");
}else{
    console.log("Absent");
}

//! Object Cloning
// above we are not cloning by b = a ; we are pointing
    // iteration
    let src = {val : 10 , a : 10 , b : 20 , c : 30};
    let dest = {};

    for(let key in src){
        dest[key] = src[key];
    }

    src.a++;// as copy create ho rhi yaha reference nhi hi , so jo pehle copy ho chuka hi uspr koi fark nhi padega
    // assign
    let dest2 = Object.assign({} , src);


    // spread 3rd method
    let dest3 = {...src};

//! Garbage Collection -->
    // Eise var / const ko find krta hi jinka use me nhi hi , unki value ko ye free krwa deta hi.

