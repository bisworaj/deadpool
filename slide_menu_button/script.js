const btn=document.getElementById("btn");
const nav=document.getElementById("nav");

btn.addEventListener('click',()=>{
    nav.classList.toggle('activ');
    btn.classList.toggle('activ');
    console.log("clicking")
})