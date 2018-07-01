'use strict';

const addChoiceBtn = document.getElementById('addChoiceBtn');
const removeChoicesBtn = document.getElementById('removeChoicesBtn');
const startBtn = document.getElementById('startBtn');
const clearLogBtn = document.getElementById('clearLogBtn');
const inputDiv = document.getElementById('inputDiv');
let inputCount = inputDiv.childElementCount;

let choiceArray = new Array();

// Creates a new input element then sets it's attributes
function addChoice(){
    const choice = inputDiv.childElementCount + 1;
    const newInput = document.createElement("INPUT");
    newInput.setAttribute("placeholder", "Choice " + choice);
    newInput.setAttribute("class", "col-sm-6"); 
    document.getElementById('inputDiv').appendChild(newInput);
}

// Random number function
function randomNumber(max){
    return Math.floor(Math.random() * max); 
}

//Event listener on Add Choice Button
addChoiceBtn.addEventListener('click', (e) => {
    addChoice();
    inputCount++;
});

// Event listener on Remove Choice button
    // Removes last child of input div
removeChoiceBtn.addEventListener('click', (e) => {
    inputDiv.removeChild(inputDiv.lastChild);
    inputCount--;
});

// // Event listener on Start button
startBtn.addEventListener('click', (e) => {
    // Clears array each time start button is pressed
    choiceArray = [];
    // Declares inputs as function to be used throughout event listener
    let inputs = document.querySelectorAll('input');
    let noValue;
    // Cycles through all inputs, takes value and then pushes to array
    for(let i = 0; i < inputCount; i++){
        // Evaluating for empty input fields
        if(!inputs[i].value){
            noValue = true;
        }else{
        let x = inputs[i].value;
        choiceArray.push(x);
        // Clears input fields
        inputs[i].value = ""; 
        }   
    }
    if(noValue === true){
        alert("Please make sure all choices are input correctly");     
    }else{
    // Create random number for value selection
    let number = randomNumber(inputCount);
    // Select which value of choiceArray to display
    let choice = choiceArray[number];
    // Log choice into list item
    const choiceOutput = document.createElement("LI");
    choiceOutput.textContent = choice;
    document.getElementById("displayList").appendChild(choiceOutput);
    } 
});

// Event listener on clearLogBtn
clearLogBtn.addEventListener('click', (e) => {
    // Clears Choice Log
    const displayList = document.getElementById('displayList');
    displayList.innerHTML = "";
});