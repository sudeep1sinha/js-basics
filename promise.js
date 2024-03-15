let promise= new Promise(function(resolve,reject){
    console.log("hello")
    resolve(56)
})


console.log("hello")

setTimeout(function(){
    console.log("hello in 2 seconds")
},2000)

console.log("my name is" + "hello three")

console.log(promise)


//fetch google.com homepage  ==> console.log("google.com homepage done")
//fetch data from the data api
//fetch pictures from the server
//print downloading
//rest of the script