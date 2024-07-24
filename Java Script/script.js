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

// ! type 2 creating object 
// construcctor function
    // return nhi krna hi , comma bhi use nhi ho raha hi
let recObj1 = createRectangle(4,5);// createRectangle is returning the object.

function Square(len , bre){
    this.length = len;
    this.breadth = bre;
    this.draw = function(){
        console.log('Drawing a sqaure');
    }
}

let newSq = new Square(4,6);

// ! dynamic nature of object --> kisis bhi objecct ke ander , deletion bhi possible hi , insertion bhi possible hi . 

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

// 1 hr 11 min . 