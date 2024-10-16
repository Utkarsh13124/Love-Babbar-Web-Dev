// async code -- > humhe pta hi ki ho jayrga but kab hoga humhe pta nhi hi.
// ex
    // setTimeout(function(){
    //     console.log("Third");
    // } , 3000);
    // function sync(){
    //     console.log('first');
    // }
    // sync();

    // console.log('second');

// concurrency is maintained through Asynchchronous programming , as JS is single threaded

//! API
// application programming Interface :- two software ke beech me communication stablish krna hi.
//send , receive krne ke api hoti hi
// hw --> getcall, postcall, putcall , delete call
// INTERFACE : banklocker , custoomer , bank wale uncle example. , is a blueprint

//! features of Async
    // clean code
    // better error hnandling 
    // easier debugging
    // find out

//! Promise
    // two things happen , fulfill or failed 
    // promise is used for parallel execution.
    // two parameter --> resolve , reject are passed inside callBack Function , pending  --> waiting for getiing remaining two options

// let myPromiseAsync = new Promise( function(resolve , reject){
//     setTimeout(function(){
//         console.log('I am inside Promise.');
//     },5000);
//     resolve(new Error('Bhaisahab Error aaaye hi'));
// });
// // if successfully run , status resolve , we can also do it by ourself
// let myPromiseSync = new Promise( function(resolve , reject){
//     console.log('I am inside Promise 2.');
//     // resolve(2223); // ye mujhe console.log(mypromi); krne pr bhi dikhega ka ki kya ho rha hi .
//     reject(102);// waise ye sab with ifelse ya aur kisi tarike se bhi krenge . 
// });
// console.log('pehla');

// //! what is value inside it ? it is the return thing from resolve , that is written inside resolve.
// myPromiseAsync.then((value => {console.log(value)}));
// myPromiseAsync.then((value => {console.log(value)}),(value) => {console.log("receieved an error")}); // writing try catch together , separated by  comma in between 
// myPromiseSync((value) => {console.log("receieved an error")});
// // asynchronus code ke status ko dikhata hi

// //! if on return value we want to do some work , then two methods are available.
// //  two methods if on state can apply
//     // then() --> if fulfilled a value return --> uspr humara then kaam krne wala hi
//     // catch() --> if reject then catch will do his job by the value that has been returned by the promise.


// // koi task background me chalana hi to promise use hoga
// // agar dependent cheezo ko background me chalana hi to wha pr promise ke then and catch use honge


// //! dependent task in background.

// let wadaa1 = new Promise( function(resolve, reject){
//     setTimeout( () => {
//         console.log('setTimeout-1 started');
//     }, 2000);
//     resolve(true);
// })

// wadaa1.then( () => {
//     let wadaa2 = new Promise(function(resolve , reject){
//         setTimeout( () => {
//             console.log('setTimeout-1 started');
//         }, 3000);
//         resolve("Wadaa 2 resolved");
//     })
//     return wadaa2;
// }).then( (value) => console.log(value));

// // wadda1 ka jo return usko leke humne wadaa 2 chalaya , wadaa2 promise return kiya , jispe dot operator ke saath turant then lagaya 
// // secondoption tha ki hum  agar kuch return nhi krte to is ka jo bhi naam hota uspr then ka use krte hi  ex - below : 

// let output = wadaa1.then( () => {
//     let wadaa2 = new Promise(function(resolve , reject){
//         resolve("Wadaa 2 resolved");
//     })
//     return wadaa2;// agar khi assignment operator ka use kr rhe hi . ya  issekuch chahte hi.
// })

// output.then( (value) => console.log(value));

// //50 min


// // promise chaining --> 50 promise depend on each other
// // above thing is promise chaining

// //! async await --> specail syntax used to work with promise
// // it always return promise
// // can make any function await also can make await to anyone.

// // await ::  if we wnant to  wait some function to work after some function then we use await keyword
// // async :: --> suru me async likh do to fuction async bn jata hi 


// async function abcd(){ // returns promise
//     return "It returns promise";
// }

// // lets try something 
// async function utility(){

//     let dlMausam = new Promise( (resolve , reject) => {
//         setTimeout(() => { // js settimeout ka wait nhi krta hi , wo apne aage badega aur code khatam hone ke baad promise resolve kr dega.
//             resolve("Delhi me bhot garmi");
//         }, 1000);
//     })

//     let hydMausam = new Promise( (resolve , reject) => {
//         setTimeout(() => {
//             resolve("Hyderabad me bhot cool");
//         }, 1000);
//     })
    
//     let dm = dlMausam;
//     let hm = hydMausam;

//     // using awiat for asynchronous , currently below they are running paralleley 

//     let dm1 = await  dlMausam;
//     let hm1 = await hydMausam;
//     // ab agar hum dm1 , dm 2 return krenge aur console krwauenge to ye jab ek khatam oga tabhi dusra chalega
//     return [dm,hyd];
// }

// // without await keyword they run parallely



// //! Fetch apt
// // api ka use kr saktte hi , diff diff software ko apas me communicate krwate hi  . 

// // send or receive an data 


// let content2 = fetch('https://jsonplaceholder.typicode.com/posts/1'); // calling an api
// // fetch api returns promise

// async function utility2 (){
//     let content2 = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // calling an api
//     let output =  await content2.json();// waiting till api does not respond in above code
//     // waiting till converion is not done json format , javascript object notation
//     // hw --> mdn json
//     console.log(output);
// }

// utility2();

// /*
// json formatter , online json ki file ko object me format krke dikhata hi 
// */
//! sometime api pr security hoti hi , to humhe apni user id bhi send krna hota hi , to hum url ke saath aur cheeze bhi bhejte hi 
//  fetch(' url ' , options );
// options me object create krte hi , aur phir usme properties set krke apni secret key bhejte hi 

//! send , post call 
// humhe options wale object ko kuch iss tarah set krna padega , jisse ki hum post call kr paaye. 

// async await iss olution of multiple then statement
async function helper(){
    let options = {
        method : 'POST',
        body : JSON.stringify({// stringify  convert javascript code into object
            tittle : 'Utkarsh',
            body : 'Pandey',
            userID : 2003,
        }),
        headers : { // additional information , for sequence number , for encryption , and other information , secret key , api key
            'Content-type' : 'application/json; charset=UTF-8',
        },

    };
    // with above code , w e are sending three property inside body to the url below to store 
    
    let content3 = await fetch('https://jsonplaceholder.typicode.com/posts' , options);
    let response = content3.json();
    // console.log(response);
    return response;
}
// json strigify homework
async function utility3(){
    let ans = helper();
    console.log(ans); 
}

utility3();

//! closures 
// var --> global , let --> block scoped, 
function init(){
    var name = "Mozilla";// name is local variable created by init
    function displayName(){
        console.log(name);
    }
    displayName();
}

let a = init();// function call complete hone pr variable apne aap destroy ho jaati hi .
a();

// function ke ander avariable and functions bna rakhe hi 
//  why mozilla is prinitng by line 210 , if name variable is destroyed

// Jab bhii aap nested function create kr rhe hote hi , to hr function ka closure create hota hi 
//! closure of funtion ==> function + required dat (lexical environment / surrounding state) , jab function pehli baar run kr rha hoga tab hoga ye . 
// reference create ho rha hi , copy nhi . 


//! Homework
// classes & export module in JS