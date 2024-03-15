let p1 = new Promise((resolve,reject)=>{
    console.log("promise is pending ")
    setTimeout(() => {
        console.log("i am a promise and i am fulfilled")
        resolve(true)

        
        
    }, 5000)
})


let p2 = new Promise((resolve,reject)=>{
    console.log("promise is pending ")
    setTimeout(() => {
        console.log("i am a promise and i am rejected")

        reject(new Error("i am a error"))
        
    }, 5000)
})

p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log("some error has occurred in p2")
})

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

