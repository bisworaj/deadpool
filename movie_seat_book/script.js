
const floor = document.getElementById('floor');
const theater = document.querySelector('.theater');

const populateFloor=()=>{
    var output='';
    for(let i=0;i<8;i+=1){
        output+=`
        <div class="row">
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        <div class="seat"></div>
        </div>
        `
    }
    floor.innerHTML=output;
    [...floor.children][0].children[0].classList.add('occupied');
    [...floor.children][2].children[3].classList.add('occupied');
    [...floor.children][4].children[5].classList.add('occupied');
    [...floor.children][3].children[2].classList.add('occupied');
}

populateFloor();

const seats = document.querySelectorAll('.row .seat:not(.occupied)'); 
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect=document.getElementById('movie');

const ticketPrice=parseInt(movieSelect.value);
//update total and count
const updateSelectedCounts = ()=>{
    const selectedSeats= document.querySelectorAll('.row .seat.selected');
}

floor.addEventListener('click',(e)=>{
  if(e.target.classList.contains('seat')
  && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected');
      updateSelectedCounts();
  }
})