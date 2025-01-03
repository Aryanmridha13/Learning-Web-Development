let obj1 ={
    name : "vivek",
    age : 20,
    contact : 9837,
  stack : "FSD",

}

let obj2 = {
  contact : 9837,
  stack : "FSD",
}

let obj3={...obj1,...obj2}

console.log(obj3);


//functions that return array values and keys

let o = Object.values(obj1)
console.log(o[0]);

let k =Object.keys(obj1)
console.log(k[0]);

delete obj1.age

console.log(obj1);


