const btn=document.getElementById("btn");
const container=document.getElementById("container");

btn.addEventListener('click',()=>{
    createNotification();
})



function randomLetterGenerate(){
	let alphabets=[" ","a","b","c","d","e","f","g","h","i","j","k",
	"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	let num=Math.round(Math.random()*26);

    return alphabets[num];
}

function randomWordGenerate(){
	let word="";
	let wordLength=Math.round(Math.random()*20);
	for(let i=0;i<wordLength;i+=1){
		word=word+randomLetterGenerate();
	}

	return word;
}

function createNotification(){
    const notif=document.createElement('div');
    notif.classList.add('toast');
    container.appendChild(notif);

    notif.innerText=randomWordGenerate();
    notif.style.color=`rgb(${Math.round(Math.random()*200)},
    ${Math.round(Math.random()*100)},
    ${Math.round(Math.random()*100)})`;


    setTimeout(()=>{
        notif.remove();
    },5000)
}