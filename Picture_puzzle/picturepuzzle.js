
//timer variables
let timercontent=document.querySelector("#timer");
let resetbtn=document.querySelector("#buton");
let stopbtn=document.querySelector("#stop");
let startminutes=0.75;
let time=startminutes*60;
let intervalid;

//pictureboard variables
let rows=4;
let columns=4;
let currentPicture;
let otherPicture;
let turns=0;

//countdown timer function
function updateTime(){
    let minutes=Math.floor(time / 60);
    let seconds=time % 60;
        
        //pad with zero
        function padwithZero(unit){
                return (("0") + unit).length >2 ? unit  : "0" + unit;
        }
    
    seconds=padwithZero(seconds);
    minutes=padwithZero(minutes);

    timercontent.textContent=`${minutes}:${seconds}`;
    time--;

    //check if there is no time left
    if(minutes==0 && seconds==0){
        timercontent.textContent="Check the picture, if it is the same you won!";
        clearInterval(intervalid);
        document.querySelector("#fullpic").style.display="block";
        document.querySelectorAll("img").forEach((image)=>image.style.pointerEvents="none");
    }
}

//start the countdown after four seconds 
setTimeout(()=>{intervalid=setInterval(updateTime,1000)},3000);
  

//reset button
resetbtn.addEventListener("click",()=>{
    window.location.reload();
   
})
//stop button
stopbtn.addEventListener("click",()=>{
    clearInterval(intervalid);
    timercontent.textContent=`${timercontent.textContent} Check the picture, if it is the same you won!`;
    document.querySelector("#fullpic").style.display="block";
    document.querySelectorAll("img").forEach((image)=>image.style.pointerEvents="none");
})

//drag function of the event listeners
function dragStart(){
    currentPicture=this;
}

function dragOver(event){
    event.preventDefault();
}

function dragEnter(event){
    event.preventDefault();
}

function dragDrop() {
    otherPicture = this; 
}
function dragEnd(){
    if(currentPicture.src.includes("blank")){
        return;
    }
    let currentimg=currentPicture.src;
    let otherimg=otherPicture.src;
    currentPicture.src=otherimg;
    otherPicture.src=currentimg;

    turns+=1;
    document.getElementById("turns").textContent=turns;
}


//create the board where the pics should be put to complete the puzzle;
window.onload=function(){
    for(r=0; r<rows; r++){
        for(c=0; c<columns;c++){
            let picture=document.createElement("img");
            picture.src="./images/blankpic.jpg";


            picture.addEventListener("dragstart",dragStart);
            picture.addEventListener("dragover",dragOver);
            picture.addEventListener("dragenter",dragEnter);
            picture.addEventListener("drop",dragDrop);
            picture.addEventListener("dragend",dragEnd);

            document.getElementById("outercontainer").appendChild(picture);
        }
    }
}

//create the place where the starter images are put 
let picturetodrag=[];
for(let i=1; i<=rows*columns;i++){
    picturetodrag.push(i.toString());
}

//shuffle the pictures randomly
picturetodrag.reverse();

for(let i=0; i<picturetodrag.length;i++){
    let j=Math.floor(Math.random()*picturetodrag.length);

    let tmp=picturetodrag[i];
    picturetodrag[i]=picturetodrag[j];
    picturetodrag[j]=tmp;
}

for(let i=0; i<picturetodrag.length;i++){
    let picture=document.createElement("img");
    picture.src="./images/"+picturetodrag[i]+".jpg";

    picture.addEventListener("dragstart",dragStart);
    picture.addEventListener("dragover",dragOver);
    picture.addEventListener("dragenter",dragEnter);
    picture.addEventListener("drop",dragDrop);
    picture.addEventListener("dragend",dragEnd);

    document.getElementById("gridcontainer").appendChild(picture);
}