const text="vanila crazy chalenges......";
const field=document.getElementById("txt");

let index=0;

function writeText(){
    field.innerText= text.slice(0,index);

    index+=1;
    
    if (index > text.length-1){
        index=0;
    }

    field.style.color=`rgb(${Math.round(Math.random()*200)},
    ${Math.round(Math.random()*100)},
    ${Math.round(Math.random()*100)})`;
}

setInterval(() => {
    writeText();
}, 100);