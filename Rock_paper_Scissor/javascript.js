
let wins=0;
let losses=0;
let equals=0;

while (true){
let choices=["scissors","rock","paper"];
let randomIndex=Math.floor(Math.random()*3);
let computerChoice= choices[randomIndex];

const humanChoice=prompt("Enter rock, paper scissors or q to quit: ");
if (humanChoice.toLowerCase()==="q"){
    break;
}

if (humanChoice!=="rock" && 
    humanChoice!=="scissors" &&
    humanChoice!=="paper"){
    alert("Please enter a valid choice.");
       continue;
    }

if (computerChoice===humanChoice){
    console.log("draw");
    equals++;

}else if(computerChoice==="rock" && humanChoice==="scissors" ||
         computerChoice==="paper" && humanChoice==="rock" ||
         computerChoice==="scissors" && humanChoice==="paper"){
        
         console.log("You lost");
         losses++;
}else{
    console.log("You won");
    wins++;
}
};
