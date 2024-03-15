let a =[1,2,3,4,5,true,false,"sudeep"];

for(let i=0; i<a.length;i++){
    console.log(a[i])
}

let num1=[1,2,3,4,5];
let num2=[6,7,8,9];

let new_num=num1.concat(num2)

console.log(new_num)



// sort methods
let compare=(a,b)=>{
    return a-b
}
let num3=[4,56,776,8,222,345,555,576,8754,2567]

num3.sort(compare)

console.log(num3)

//splice and slice


let num4=[1,2,3,4,5,6]

num4.splice(2,0,104,105,106,107,108,109)

console.log(num4)


let num5=[1,2,3,4,5,6]
num5.reverse()
console.log(num5)