async function sudeep(){
        let delhiweather=new Promise((resolve , reject)=>{
            setTimeout(()=>{
                resolve("27 deg")
            },3000)
})

let bangaloreweather=new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("21 deg")
    },4000)
})
//delhiweather.then(alert)
//bangaloreweather.then(alert)
console.log("fetching delhi weather please wait . . .")
let delhiW=await delhiweather
console.log("fetched delhi weather:" + delhiW)
console.log("fetching bangalore weather please wait . . .")
let bangaloreW=await bangaloreweather
console.log("fetched bangalore weather:" + bangaloreW)
return [delhiW,bangaloreW]



}


console.log("welcome to weather control room")

let a = sudeep()
a.then((value)=>{
    console.log(value)
})
