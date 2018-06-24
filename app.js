'use strict';

const addChoiceBtn = document.getElementById('addChoiceBtn');
const startBtn = document.getElementById('startBtn');
const inputDiv = document.getElementById('inputDiv');

function addChoice(){
    const choice = inputDiv.childElementCount + 1;
    const newInput = document.createElement("INPUT");
    newInput.setAttribute("placeholder", "Choice " + choice);
    newInput.setAttribute("class", "col-xs-6"); 
    document.getElementById('inputDiv').appendChild(newInput);
}

addChoiceBtn.addEventListener('click', (e) => {
    addChoice();
});

removeChoiceBtn.addEventListener('click', (e) => {
    inputDiv.removeChild(inputDiv.lastChild);
});