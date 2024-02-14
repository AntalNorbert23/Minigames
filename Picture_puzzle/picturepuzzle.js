const draggableimg= document.querySelectorAll(".draggable");
const containers=document.querySelectorAll(".container");



draggableimg.forEach((draggable)=>{
    draggable.addEventListener("dragstart",()=>{
        draggable.classList.add("imgdragged");
    })
})

draggableimg.forEach((draggable)=>{
    draggable.addEventListener("dragend",()=>{
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