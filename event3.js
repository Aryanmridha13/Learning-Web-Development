let btn=document.querySelector('#btn')
let n =0
function fun(){
    let h1 = document.querySelector('#head')

    if(n==0){
    h1.innerHTML="cybrom"
    n++
    btn.innerHTML="hide"
    }
    else{
        h1.innerHTML="" 
        n--
        btn.innerHTML="show"

    }
     
   
    h1.classList.toggle('#head')

}