// map


let arr=[1,2,3]

let a=arr.map((value,index , array)=>{
    console.log(value,index, array)
    return value + index
})

console.log(a)

//array filter method

let arr1=[1,2,3,4,5,6]

let a2=arr1.filter((a)=>{
    return a<4
})
console.log(a2)


//array reduce method

let arr3=[1,1,2,3,4,4,5,7,7]

let a3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)
