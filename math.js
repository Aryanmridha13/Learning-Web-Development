let num = Math.trunc(Math.random()*15  +1)//0 to 1
// console.log(num);
 let h1 = document.querySelector('#h1')
 let h2 =document.querySelector('#h2')
 let h3 =document.querySelector('#h3')
let num1 = Math.trunc(Math.random()*15  +1)
let num2 = Math.trunc(Math.random()*15  +1)
function fun(){
    h1.innerHTML=Math.trunc(Math.random()*15  +1)
}
function fun1(){
    h2.innerHTML=Math.trunc(Math.random()*15  +1)
}
function fun2(){
    h3.innerHTML=Math.trunc(Math.random()*15  +1)
}

function fun3(){
    let h1 = document.querySelector('#h1')
    let h2 =document.querySelector('#h2')
    let h3 =document.querySelector('#h3')

    h3.innerHTML=Math.trunc(Math.random()*15  +1)
    h2.innerHTML=Math.trunc(Math.random()*15  +1)
    h1.innerHTML=Math.trunc(Math.random()*15  +1)
}

