// nn bb ss u
// null number boolean bigint string symbol undefined
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "harry"
let f = Symbol("i am a nice symbol")
let g = undefined // or let g which is undefined
console.log(a , b , c , d , e , f , g)
console.log(typeof d , typeof f)


//objects - non promitive datatype

const deep = {
    "harry": true,
    "shubh": false,
    "lovish" : 67 , 
    "rohan" : undefined,
}
console.log(deep["harry"])
console.log(deep["lovish"])