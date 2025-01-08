let studen =[
    {
        roll:1,
        name:'harsh',
        age:19,
        city:"sagar",
    },
    {
        roll:2,
        name:'vikash',
        age:22,
        city:"bhopal",
    },
    {
        roll:3,
        name:'pranav',
        age:23,
        city:"shapur",
    },
    {
        roll:4,
        name:'mohit',
        age:20,
        city:"indor",
    },
]

let finaldata = studen.map((e)=>`

 <tr> 
 
    <td> ${e.roll} </td>
    <td> ${e.name} </td>
    <td> ${e.age} </td>
    <td> ${e.city} </td>
 </tr>
`).join("")

document.querySelector('#displaydata').innerHTML=finaldata