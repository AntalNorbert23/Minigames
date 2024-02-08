
const playerText=document.querySelector("#player");
const computerText=document.querySelector("#computer");
const resultText=document.querySelector("#result");
const humanscore=document.querySelector("#human");
const computerscore=document.querySelector("#pc");
const buttons=document.querySelectorAll("button");

let humanChoice;
let computerChoice;
let wins=0;
let losses=0;
let equals=0;


function computer(){
    let choices=["Scissors","Rock","Paper"];
    let randomIndex=Math.floor(Math.random()*3);
    computerChoice= choices[randomIndex];
    }

function checkWinner(){
if (computerChoice===humanChoice){
    equals++;
    return "It's equal"

}else if(computerChoice==="Rock" && humanChoice==="Scissors" ||
         computerChoice==="Paper" && humanChoice==="Rock" ||
         computerChoice==="Scissors" && humanChoice==="Paper"){
        
         losses++;
         return `You lost! Try again.`;
}else{
    wins++;
    return `You won! Congratulations!`;
}}

buttons.forEach(button => button.addEventListener("click",()=>{

    humanChoice=button.textContent;
    computer();
    playerText.textContent=humanChoice;
    computerText.textContent=computerChoice;

    resultText.textContent=checkWinner();
    computerscore.textContent=losses;
    humanscore.textContent=wins;
}));


