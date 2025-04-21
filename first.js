let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
let isWinner;

let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };

boxes.forEach((box)=>{
box.addEventListener("click",()=>{
   
    if (turnO) {
        box.innerText="O";
        turnO=false
        
    } else {
        box.innerText="X";
        turnO=true
    }
        box.disabled=true;
        count++;

         isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
          
}
});
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  }
let disableBoxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
}
let enableBoxes=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner =(winner)=>{
    msg.innerText=`congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes()
}
let checkWinner=()=>{
    for (const pattern of winPattern) {
    let result1= boxes[pattern[0]].innerText;
    let result2= boxes[pattern[1]].innerText;
    let result3= boxes[pattern[2]].innerText;

    if(result1!=""&&result2!=""&&result3!=""){
        if (result1===result2 && result2===result3) {
            showWinner(result1);
           // disableBoxes()
           return true;
        }
    }  
  }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
