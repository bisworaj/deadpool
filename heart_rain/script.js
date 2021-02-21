function randomHeartGenerate(){
    let hearts=["❤","💚","💜","💛",
    "💙","🖤","💕","💔","💖","💘","💝","💗"];

	let num=Math.round(Math.random()*11);
    return hearts[num];
}

function createHeart(){
    const heart=document.createElement('div');
    heart.classList.add('heart');

    heart.innerText=randomHeartGenerate();
    heart.style.fontSize=Math.round(Math.random()*7)+"rem";
    heart.style.left= Math.round(Math.random()*100)+"vw";

    heart.style.animationDuration=Math.round(Math.random()*2)+3+"s";

    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    },5000);
}

setInterval(() => {
    createHeart();
}, 300);