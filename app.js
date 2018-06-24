'use strict';

const addChoiceBtn = document.getElementById('addChoiceBtn');
const removeChoiceBtn = document.getElementById('removeChoiceBtn');
const startBtn = document.getElementById('startBtn');
const inputDiv = document.getElementById('inputDiv');
let inputCount = inputDiv.childElementCount;

let choiceArray = new Array();

// Creates a new input element then sets it's attributes
function addChoice(){
    const choice = inputDiv.childElementCount + 1;
    const newInput = document.createElement("INPUT");
    newInput.setAttribute("placeholder", "Choice " + choice);
    newInput.setAttribute("class", "col-xs-6"); 
    document.getElementById('inputDiv').appendChild(newInput);
}

//Event listener on Add Choice Button
addChoiceBtn.addEventListener('click', (e) => {
    addChoice();
});

// Event listener on Remove Choice button
    // Removes last child of input div
removeChoiceBtn.addEventListener('click', (e) => {
    inputDiv.removeChild(inputDiv.lastChild);
});

// // Event listener on Start button
startBtn.addEventListener('click', (e) => {
    for(let i = 0; i < inputCount; i++){
        let inputs = document.querySelectorAll('input');
        let x = inputs[i].value;
        choiceArray.push(x);
    }
});