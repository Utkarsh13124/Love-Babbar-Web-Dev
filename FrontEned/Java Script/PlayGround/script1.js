// onclick attribute in button call function
    // jaise hi button call ho use click krte hue function ko call kr do . 

// eventListener 
    // hw or do again task
    // addeventlistener --> homework
// fetch 

// referring to html element
const countValue = document.querySelector('#counter');
// humari countValue ka add same rahega , aur ye hmesha counter ki value change krega  ,, hum const ko nhi change kr sakte hi , but counter jo iske ander ki value usko change kr sakte hi

function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value 
    value = value + 1;
    // set the value onto it
    countValue.innerText = value;
}
const decrement = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value 
    value = value - 1;
    // set the value onto it
    countValue.innerText = value;
}
// function const se bnaya , jo value change honi hi block specific , use let se bnao .

//! complete revision first , the concept used 
// JS --> parseInt , querySelector , arrowfunction , eventListener
// tailwind --> simple write again 
// html --> div  , button , i , fontawesome

//! proceduree used 
// first make html structure 
// then add tailwind on html structure , step by step ,
// check , hit and trial or help from  developer

// add js , small small pieces 