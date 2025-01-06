let ar = [1,2,3,45,'aman',5,12,24,1,'shyam']
console.log(ar);

let neww = ar.map((e)=>{return e*2})
console.log(neww);

let narr = ar.filter((w)=>{ return w%2==0})
console.log(narr);


let student =[
    {
        id:1,
        name:'ram',
        age:20,
        city:'bhopal',
    },
    {
        id:2,
        name:'ankit',
        age:24,
        city:'goa',
    },
    {
        id:3,
        name:'aman',
        age:35,
        city:'indore',
    },
]

let st = student.map((m)=>{return m})
console.log(st);

let stfit = student.filter((n)=>{return n.age>20})
console.log(stfit);
