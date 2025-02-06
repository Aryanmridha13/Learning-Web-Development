function savadata(){
    let frmdata={
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        contact : document.querySelector('#contact').value,
        city : document.querySelector('#city').value
    }


fetch("http://localhost:3000/student",{
method:"POST",
headers:{
    'Content-type':'application/json'
},
body:JSON.stringify(frmdata)
})
.then(r=>alert("data Inserted sucsefully.....!!!!"))

return false;

}