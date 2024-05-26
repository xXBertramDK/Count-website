const DecreaseButton = document.getElementById("Button1")
const ResetButton = document.getElementById("Button2")
const IncreaseButton = document.getElementById("Button3")
const countlabel = document.getElementById("countlabel")
let count = 0;

IncreaseButton.onclick = function(){
    count++;
    countlabel.textContent = count;
}
DecreaseButton.onclick = function(){
    count--;
    countlabel.textContent = count;
}
ResetButton.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

