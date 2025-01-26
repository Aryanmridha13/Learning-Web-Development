const condata =()=>{
    let perdata ={
     name : document.getElementById('uname').value,
     email : document.getElementById('mail').value,
     pass : document.getElementById('pass').value,
     
    }
    localStorage.setItem("userdata",JSON.stringify(perdata))

}

var data = JSON.parse(localStorage.getItem("userdata"))

function logdata(){
    let lgdata={
        name : document.getElementById('conusname').value,
        pass : document.getElementById('conpass').value
    }
    if(data.name != lgdata.name || data.pass != lgdata.pass){
        alert("user not found")
        return false
    }

}

 // localStorage.setItem("userdata",JSON.stringify(perdata))
