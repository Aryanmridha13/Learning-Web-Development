let obj = {
    name : "Aryan",
    age : 19,
    city : "bhopal",
}

obj.city = "betul"

 console.log(obj);

 let emp = {
    emp_name : "Aryan",
    emp_age : 19,
    emp_id :12,
    emp_contact : 12344,
    emp_city : "Bhopal",

    emp_account:{
        emp_salary :500000,
        emp_acname : "SBI",
        emp_acblance : "Rs 40000000/- only "
    }
 }
  console.log(emp.emp_account.emp_acblance);
  

 let obj1 ={
    name : "vikas",
    demo : function(){
        alert("Hello")
        console.log(this.name);
        
    },

    frinds : ["Aryan","aaa","sddd"]
 } 

 console.log(obj1.frinds[0]);
 console.log(obj1.demo());
 obj1.demo()