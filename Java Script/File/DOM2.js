// browsser Event => click , double click , resize , loading , mouseOver , submit
// Invisible duniya , but we can see it , we have methods like , mouseEvent

//! monitorEvents(document)

// if we not want to see , 
// unmonitorEvents()

// class --> bluePrint , object aree like reality
// js --> interface --> bluePrint

// Event target --> interfface , implemented by object that can receive & may have listeners for them
    // top level interface/entity
    // 3 methods --> addEventListener() , removeEventListener() , dispatchEvent()
    // event target se inherit krta hi Node, matlab jo bhi properrty event Target ke pass hogi , wo saari node ke pass hongi.  --> element is inherited from node
    // EventTarget <-- Node <-- Element
// listener --> on recieving events what we want to them . 


// addEventListener --> listen to event , respond to event , hook into event
// eventTarget ke ander --> document , para ,article , sabkuch aata hi 
// window is global object, eventTarget is an interfacce

// syntax 
// eventTarget . addEventListener( event to listner for , function to run when event happen)



// //  hum kuch bhi kra sakte hi function me.
// document.addEventListener('click' , function(){
//     console.log("I clicked .");
// })

// hw --> go to codeHelp website --> apply an event that when we click , h2 element background color will be green .
// done
// access the element 
// add event listener 
// in function use cssText , style , setAttribute property to get the job done of changing css through Java Script


// remove EventListner 
//! aapne jo function pass kiya tha add event listner ke ander , exact same funciton you have to pass under removeEventListener();
// nhi to aap event ko remove nhi kr pao. 

// iske liye humhe ffunction alag se bnau, kyuki agar hum ander hi ikhenge , then function are object and they both are at distinct address , so they are not same. 


//? Not workable 
// document.addEventListener('click' , function(){
//     console.log('I have clicked on the document.');
// });
// document.removeEventListener('click' , function(){
//     console.log('I have clicked on the document.');
// });
// as function are not same
//? workable
// same target , same type , same function 
// function evenFunction(){
//     console.log("I have clicked...");
// }

// document.addEventListener('click' , evenFunction);

// document.removeEventListener('click' , evenFunction);

// this works as both functions are same


//! phases of event :- 
// 3 phases
    // capturing phase  : -> searching for the element at which the event is applied .
    // at target phase : - when you at target
    // bubbling phase : -> wapas lautne wala phase .

    // bydefault bubbling phase me event listner execute hota hi .  
    //! capturing phase ke liye hum addEventListener me 3rd parameter me True pass krte hi.

//! The event object : - for any event specific detail 
    // addEventListner ke ander jo function hota hi parameter me 
    // uske ander event naaam ka function hota hi , jo bhut saarii information storre krta hi . 

    // const  content1 = document.querySelector('#wrapper');
    
    // content1.addEventListener('click' , function(event){
    //     console.log(event);// event object , also we havenot passed any 3rd parameter so it will in bubbling mode applied.
    // }); 

//! the default action --> how to prevent default action
// .preventDefault()   --> method to do it.

    // let thirdlink = link[2]; // link is an list containing anchor tags
    // thirdlink.addEventListener('click' , function(event){// event pass kiya kyuki hum event ko rokne ke liye uspe laga rha hi
    //     event.preventDefault();
    //     console.log('maza aaya');
    // });  


// ! how to avoid too many event?
// Time 1 hr : 15 min --> 

let myDiv = document.createElement('div');

for(let i = 1 ; i <= 100 ; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is pata' + i;

    newElement.addEventListener('click', function(event){
        console.log('I have clicked on para');
    });
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// document --> div --> para, para , para ,... --> lister

// Optimised
function paraStatus(event){
    console.log('I have clicked on para');
}
for(let i = 1 ; i <= 100 ; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is pata' + i;

    newElement.addEventListener('click', paraStatus);
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);


// optimised instead of having 100 listeners , we couldd make a single listener over div  only
function updatedParaStatus(event){
    console.log('Para ' + event.target.textContent);
}

for(let i = 1 ; i <= 100 ; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is pata' + i;

    newElement.addEventListener('click', updatedParaStatus);
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
// but ab hum kahi pr click krenge to ye react kr dega . 
// paragraph ki individuality lost kr deta hi. 

//! target keyword :- 
// it tells where the event is happned , happening or being used.
// in above quesstion : - on applying it , if we click on div then event activated , but using target will help us where the event listeners is used. 


let element = document.querySelector('#wrapper');
element.addEventListener('click' , function(event){
    if(event.target.nodeName === 'SPAN'){
     console.log('Span pr click hiya hi' + event.target.textContent);
    }
});

// on clicking on span span is printed , but on clicking on para , both is printed 
// we want that span pr click kre tabhi print ho
// ! NodeName property 
// jis pr click krte hi , uska name batati hi in capital letter , like clicking on span will tell SPAN


//! Always kept script.js file at bottom in html
    // we have to make sure that , pehle humari saari html load ho jaye to karu. 


// Alternate 
// for cheking that our file is loaded , go to inspect -- > network 

// if we want to write script.js in starting we could write with help of eventListenter that tells that html is loaded , name is DOMcontentloaded

<script>
    document.addEventListener('DOMcontentloaded' , function(){
        // javaScript code 
    })
</script>