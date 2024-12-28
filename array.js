
let ar =[]

for (let a = 0; a < 10; a++) {

 ar[a]=parseInt(prompt("Enter number :"));
  
}
let sum =0
for(let v of ar){
    if(v%2!=0){
        sum=sum+v
    }
}

console.log(sum);


