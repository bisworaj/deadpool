//const

const form=document.querySelector('#task-form');
const tasklist=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-task');
const taskinput = document.querySelector('#task');
const filter = document.querySelector('#filter');
// load all event listeners

LoadAllEventListeners();

//
function LoadAllEventListeners(){
    //add task events
    form.addEventListener('submit',addTask);

    //
    tasklist.addEventListener('click',removeTask);
    //
    clearBtn.addEventListener('click',clearTasks);
    //
    filter.addEventListener('keyup',filterTask);
}

function addTask(e){
    if(taskinput.value===''){
        alert('add a task')
    }else{

    }
    //
    const li=document.createElement('li');
    li.className='collection-item';
    //
    li.appendChild(document.createTextNode(taskinput.value));
    //
    const link=document.createElement('a')
    link.className='delete-item secondary-content';
    link.innerHTML='❌';
    //
    li.appendChild(link);


    console.log(li);
    //
    tasklist.appendChild(li);
    taskinput.value="";
    //
    e.preventDefault()
}
//
function removeTask(e){
    if(e.target.classList.contains('delete-item')){
        e.target.parentElement.remove();
    }
};
//

function clearTasks(){
    // simple way to do it.
    // if(confirm("are you sure")){
    //     tasklist.innerHTML="";
    // }

    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
}
//

function filterTask(e){

    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
}