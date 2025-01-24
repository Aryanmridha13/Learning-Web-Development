let per_obj={
   name : "harsh",
   age : 18,
   email : "kjkdsjdj@nsdn",
   pass : 123

}

localStorage.setItem("userdata",JSON.stringify(per_obj))

let data = JSON.parse(localStorage.getItem("userdata"))
console.log(data);

console.log(data.name);
