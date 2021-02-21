

function randomLetterGenerate(){
	let alphabets=[" ","a","b","c","d","e","f","g","h","i","j","k",
	"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	let num=Math.round(Math.random()*26);
        return (alphabets[num]);
}


function createLetter(){
    const letter=document.createElement('div');
    letter.classList.add('letter');
    letter.innerText=randomLetterGenerate();
    letter.style.fontSize=Math.round(Math.random()*10)+"rem";
    letter.style.left= Math.round(Math.random()*100)+"vw";
    letter.style.color=`rgb(${Math.round(Math.random()*200)},
    ${Math.round(Math.random()*100)},
    ${Math.round(Math.random()*200)})`;
    letter.style.animationDuration=Math.round(Math.random()*2)+3+"s";

    document.body.appendChild(letter);
    setTimeout(() => {
        letter.remove();
    },5000);
}

setInterval(() => {
    createLetter();
}, 300);