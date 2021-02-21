// game values

let min=1;
let max=10;

let winningNum=2;

let guessesLeft=3;

//ui

const game = document.getElementById("game"),
      minNum=document.querySelector('.min-num'),
      maxNum=document.querySelector('.max-num'),
      guessBtn=document.querySelector('#guess-btn'),
      guessInput=document.querySelector('#guess-input'),
      messege=document.querySelector('.messege');

minNum.textContent=min;
maxNum.textContent=max;

guessBtn.addEventListener('click',()=>{
    let guess=parseInt(guessInput.value);

    if(isNaN(guess) || guess<min || guess>max){
        setMessege(`enter a number between ${min} and ${max}`,"red");
    }

    if(guess=== winningNum){
        guessInput.disabled=true;
        guessInput.style.borderColor="green";
        setMessege(`${winningNum} is correct`,"green");
    }else{
        guessesLeft-=1;
        if(guessesLeft===0){
            guessInput.disabled=true;
            guessInput.style.borderColor="red";
            setMessege(`${winningNum} is wining number`,"red");
        }else{
            setMessege(`${guess} is not correct. ${guessesLeft} guesses left.`);
            guessInput.value="";
        }
    }
});

function setMessege(msg,color){
    messege.textContent=msg;
    messege.style.color=color;
}