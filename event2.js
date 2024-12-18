function fun1(){
    let img = document.getElementById('chimg')
    img.src="images/newmain.jpg"
}
function fun2(){
    let img = document.getElementById('chimg')
    img.src="items/download.jpeg"
}

function demofun(){
    let he1= document.querySelector('#head')
    he1.classList.add('he1')
}

function rem(){
    let he1 = document.getElementById('head')
    he1.classList.remove('he1')
}

function btnone(){
        let he1 = document.getElementById('head')
        he1.classList.toggle('he1')
    
}

function theme(){
    let bd = document.body
    bd.classList.toggle('theam')
}