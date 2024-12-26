let btn = document.querySelector('#btn')

//                    event name , function
btn.addEventListener('dblclick',()=>alert("clicked"))

let h1=document.querySelector('#head')
let btn2 = document.querySelector('#btn2')
btn2.addEventListener('click',()=>{h1.innerHTML="cybrom"})

let btn3 = document.querySelector('#btn3')
btn3.addEventListener('click',()=>{h1.innerHTML=""})

