const inputSlider = document.querySelector("[data-lengthSlider]"); // syntax of using custom attribute 
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]"); // imp

//! write way is write html code , write js code , give custom id to element as use com , and fetch above in js code.

let password = "";
let passwordLength = 10;
let checkCount = 1;
// set strength circle color to grey

// function to make
// copy content
// handle slider 
// generate password
// set indicator to bring color
// getRandomInteger(min , max )
// get randomuppercase
// get randomlowercase
//getRandomNumber
// getRandomSymbol
// calculate strength


handleSlider();
// set password length as per slider
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = 10;
    // other thing
}

// set color and strength
function setIndicator(){
    
}
