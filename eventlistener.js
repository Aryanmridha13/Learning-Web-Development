let btn = document.querySelector('#btn')

//                    event name , function
btn.addEventListener('dblclick',()=>alert("clicked"))

let h1=document.querySelector('#head')
let btn2 = document.querySelector('#btn2')
let c= btn2.addEventListener('click',()=>{h1.innerHTML="cybrom"})

let btn3 = document.querySelector('#btn3')
btn3.addEventListener('click',()=>{h1.innerHTML=""})

function fun(){
    let btn4 = document.querySelector('#btn4')
    btn4.addEventListener('click',()=>{h1.innerHTML="cybrom"})

   
    
}