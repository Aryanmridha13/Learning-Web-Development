let employee =[
    {
        emp_name :"ashish",
        emp_age :20,
        emp_contact : 1234,


    },

    {
        emp_name :"harsh",
        emp_age :20,
        emp_contact : 1234,


    }
]

console.log(employee);

let obj ={
    emp_name :"umesh",
        emp_age :20,
        emp_contact : 1234,


}

employee.unshift(obj )
// employee.shift(obj )
employee.push(obj )

console.log(employee.slice(0,2));




