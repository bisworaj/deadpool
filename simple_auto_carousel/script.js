const imgs=document.getElementById('imgs');

const allImgs=document.querySelectorAll('#imgs img');
let idx=0;

function run(){
    idx+=1;

    if(idx>allImgs.length -1){
        idx=0;
    };

    imgs.style.transform=`translateX(${-idx*500}px)`;
};


setInterval(run, 1000);
