
const body= document.body;
const heading=document.querySelector('h1')
body.addEventListener('mousemove',runEvent);
body.style.height="100vh";

function runEvent(e){
    let randm=Math.round(Math.random()*100);
    console.log(`event type :${e.type}`);
    
    heading.innerHTML=`<h1>MouseX: <span>${e.offsetX}</span>
                     MouseY: <span>${e.offsetY}</span >
                        MouseZ: <span>${randm}</span></h1>`
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${randm})`;

    e.preventDefault()
}

console.log("working")