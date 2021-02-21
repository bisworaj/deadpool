const btnField=document.getElementById('music-btns');

const sounds=[
    "1st","2nd","3rd","4th"
]

sounds.forEach((sound)=>{
    const button=document.createElement('button');
    button.classList.add('btn');

    button.innerText=sound;
    button.addEventListener('click',()=>{
        pauseAudio();
        document.getElementById(sound).play();
    })

    btnField.appendChild(button);
})

function pauseAudio(){
    sounds.forEach((sound)=>{
        const audio=document.getElementById(sound);

        audio.pause();
        audio.currentTime=0;
    })
}