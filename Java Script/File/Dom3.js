// variables creat
// loop likh sakte ho --
// fucntion likh sakte ho 
// onbject -- likh sakte ho
// array --> likh sakte hi  
// operators --> likh sakte ho
// ifelse aati hi --> likh sakte ho

// js basics wale week me itna aa rha hi to fine hi , mere ko to aur bhi aa rha hi , saath hi ratna nhi hi , with project and homework I will done rest part nicely.

// Dom week 
// document object ke baare me pahda hi , DOM , BOM , window object , create  , delete , update ,
// fetching an element , query select , get element by tagname , id name ,
// dom ka matlab , 

// css changes , style property  , class name , csstext , setAttribut , class list
// update , innertext ,innertext, textcontent , outer html ,
// create element , to creant  
// append child , remove child method 

// events , click ,dblclick , scroll
// top level interace , eventtarget
// addevent listner , remove event listener , dispatch event listener.
// addevent ke ander do cheeze jaati hi , event type , function 
// phases ke baare me seekha , capturing , true bhejne, at target , bubbling phase 
// event object --> koi bhi information lena ho, fetch krna
// agar default action preventdefaut krna chahta hun to use use kr sakta hun 
// bhut saare event to kaise thk kre
// event.target --> 
// nodeName -> exact tag name kon sa use hua hi  

//! practice and make project --> jisse dr khatam ho jayega . 

//* Today class
    // performance --> measure , speed of code      
    // how to write efficient work , efficient  & performing  code         
    // event loop 

// adding  100 para 
const t1 = performance.now();
for(let i = 1 ; i <= 100 ; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log('This took ' + (t2 - t1)  + "ms")
// optimising a bit
let myDiv = document.createElement('div');

for(let i = 1; i<= 100; i++){
    let element = document.createElement('p');
    element.textContent = 'This is para ' + i;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);

const t3 = performance.now();
console.log('This took ' + (t3 - t2)  + "ms")
// standard way to measure , how long your code takes to run 
// performance.know()  -> tell timestamp , by using this we measure time taken.


//! reflow : jab bhi ek naya element dom me dalta hi , remove hota hi  ,to poorimathematical calculations hoti hi , 
//! repent :us naye screen layout ko apke display ki screen pr pixel by pixel show krne ko repent kehta hi.    
// reflow takes much time than repqint

//! good practice jitne kam se kam reflow , aur repent ho sake

//! document fragent
// lightweight document object --> iske liye na to reflow aur na hi repent hota hi, but jab hum isko documet me add kr denge tab repent and reflow hoga 

let fragment = document.createDocumentFragment();
for(let i = 1; i<= 100; i++){
    let element = document.createElement('p');
    element.textContent = 'This is para ' + i;

    fragment.appendChild(element);
}
document.body.appendChild(fragment);// 1 reflow 1 repaint

//! callStack
// single-threadine --> one time one command is running, processing on one command at a time
// JS is single-threaded language.
// top to bottom , line by line chalti ,khi function wala call hota hi , tab waha jata hi aur kaam krke aata hi , 

// Observation 
    // run to completion , nature of code
    // dies not execute multiple lines/ function at a time.

// Event loop 
    // synchronous --> occuring at the same time. 
    // async matlab turant nhi ho rha hi , kuch samay baad ho rhi hi 

    // call Stack : normal things to simply run hoti hi , entry aayi , kaam hua , aur remove hui , like console.log statement
        // but agar whi koi eventlister aaya , to uski entry hui , phir wo turant to run nhi kr sakta hi , kyuki ho sakta ho abhi na execute ho kyuki abhi event nhi hua hoga to wo usko browser me save kra dega hi , aur wo stack se remove ho jayega .  
    // browser 
    // event queue : supoose jab code run ho rha hota , tab tk me koi event ho jatahi like click aur us pe kuch honahi jo browser me save hi , to ohir hum turant hi function ko event queue me daal denge ,
    // on click ye browser se queue me aayega , aur synchronous , call stack khali hone pr isse execute kiya jaayega 


//  ? hw loop tool? 
// phillip robert --> jake event loop ki video dekhi 



// async code --> event loop ka use kr rha hota hi. 
// handling is done by browser
// whenever callstack is empty , queue ke functions move to callstack 


//! setTimeout method

    // tells minimum time to run the code , it might be after minimum time callstack is not empty
    // async me pta hi nhi hota ki kab run hona hi 
    // takes two parameter , a function that we wnat to run , a time after which we want to run 
    // time in ms 

setTimeout(function(){
    console.log("hello everyone");
}, 10000);

// what if we put 0 in setTimeout --> it not runs immediately , it goes to browser then queue , then wiat for call stack to be empty.
// whenever you are trying to defer something untill the stack is close.

// hw --> median article , stackoverflow , MDN , phillip robust. 
// you can use chatgpt but definitely you should know every line of code. 









