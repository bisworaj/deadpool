const container=document.querySelector('.container')

function loadDta(){
    //create xhr
    const xhr= new XMLHttpRequest();
    
    //open()
    xhr.open('GET','folder_info.json',true);

    xhr.onload=function(){
        if (this.status==200){
            textfile =JSON.parse(this.responseText);
            console.log(textfile)
            let output="";
            textfile.folders.forEach((item,index)=>{
                output+=
                `<a href="./${item.name}/index.html">
                <div class="box-container" id="box${index+1}">
                <div class="box">
                <h4><span>${index+1}.</span>${item.name}</h4>
                <p>${item.desc}</p>
                </div></div>
                </a>`
            })
            container.innerHTML=output;
        }
    }
    xhr.send();
}


loadDta();

