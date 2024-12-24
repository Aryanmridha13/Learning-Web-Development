function sub(){
    let name = document.querySelector('#name').value
    let con = document.querySelector('#contact').value
    let pass =document.querySelector('#password').value
let con1 = document.getElementById('contact').value
let cpass =document.querySelector('#cpassword').value
    if(name==''){
        alert('enter your name')
        document.querySelector('#name').focus()

        return false
    }else if(con==''){
        
        alert('enter your mobile number')
        document.querySelector('#contact').focus()

        return false }
    // }else if(con>10){

    //     alert('wrong input')
    //     return false
    // }
    else if(pass==''){
        alert("please enter password")
        document.querySelector('#password')
        return false
    }
    else if( !(pass.match(/[~!@#$%^&*]/))){
        alert("please enter aleast one special character")
    document.querySelector('#password')
        return false
}
    
    else if(cpass==''){
        alert("please enter password")
        document.querySelector('#cpassword')
        return false
    }
    else if(pass!=cpass){
        alert("password mis match")
        document.querySelector('#cpassword').focus()
        return false
    }
}

    