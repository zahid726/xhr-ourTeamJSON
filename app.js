let btn1=document.querySelector('.btn-1')
let btn2=document.querySelector('.btn-2')
let btn3=document.querySelector('.btn-3')
let btn4=document.querySelector('.btn-4')
btn1.addEventListener('click',showItem)
btn2.addEventListener('click',showItem)
btn3.addEventListener('click',showItem)
btn4.addEventListener('click',showItem)
function showItem(){
  let parentId= (this.parentElement.id);
 
 
    let key=this.id
    let index = parseInt(key);
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    
    // LOAD
    xhr.onload = function(){
      const teamMembers= JSON.parse(this.responseText)
      if(this.status === 200)
      {

       
       let output= `<div class="card p-1">
       <img src="${teamMembers[index].img}"  class="card-img-top" alt="...">
       <h5 class="card-title">${teamMembers[index].name} <span > <p class="bg-dark text-light" >${teamMembers[0].job}<p/> </span></h5>
          <p >${teamMembers[index].text}</p>
          <a href="#" id="close" class="btn Close btn-primary " >Close</a>
          </div>
         
      
       `
       
     document.querySelector(`#${parentId}`).innerHTML=output;
      //  document.getElementById('close').addEventListener('click',function(){
      //   display.innerHTML= `
      //   <a href="#" class="btn btn-3 btn-primary" >${teamMembers[index].name} </a>'; `
      //  })
      // }
      // else if(this.status === 404){
        
      // }
      
      }}
  xhr.send()
   }