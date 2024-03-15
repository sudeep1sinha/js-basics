let num=[1,2,3,4,5]

for(let i=0;i<num.length;i++){
    console.log(i)
}

num.forEach((element) => {
    console.log(element*element)
})
// array from 
let name="sudeep"

let arr= Array.from(name)

console.log(arr)

// array for ......of

for(let i of num){
    console.log(i)
}

for(let j in num){
    console.log(num[j])
}

