const draggableimg= document.querySelectorAll(".draggable");
const containers=document.querySelectorAll(".container");


//timer 

let timercontent=document.querySelector("#timer");

let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalId;
let hours=0;
let minutes=0;
let seconds=0;
let n=0;

function updateTime(){
    elapsedTime=Date.now()-startTime;

        function padwithZero(unit){
                return (("0")+unit).length >2 ? unit  : "0" + unit;
        }
    seconds=Math.floor( (elapsedTime/1000) % 60);
    minutes=Math.floor( (elapsedTime/(1000*60)) % 60);
    hours=Math.floor( (elapsedTime/(1000*60*60)) % 60);

    seconds=padwithZero(seconds);
    minutes=padwithZero(minutes);
    hours=padwithZero(hours);

    timercontent.textContent=`${hours}:${minutes}:${seconds}`
}

draggableimg.forEach((draggable)=>{
    draggable.addEventListener("dragstart",()=>{
        draggable.classList.add("imgdragged");
        if(paused){
            paused=false;
            startTime=Date.now()-elapsedTime;
            intervalId=setInterval(updateTime,75);
        }
    })
})
containers.forEach(container=>{
    if(container.length>0){
        paused=true;
    elapsedTime=Date.now()-startTime;
    clearInterval(intervalId);
    }
})

draggableimg.forEach((draggable)=>{
    draggable.addEventListener("dragend",()=>{
        n++;
        console.log(n);
        draggable.classList.remove("imgdragged");
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault();
      const draggable = document.querySelector('.imgdragged');
        container.appendChild(draggable);
    })
  })


  /*if(n===16 &&!paused){
    paused=true;
    elapsedTime=Date.now()-startTime;
    clearInterval(intervalId);
}*/