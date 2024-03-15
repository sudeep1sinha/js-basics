// for loop

/*for(let i=0; i<34 ; i++){
    console.log(i)


//program to add first n natural number

let sum =0;
let n = 5
n=Number.parseInt(n)
for(let i =0 ; i<=n; i++){
    sum += (i)
    console.log(i)
}
console.log("the sum of " +n+" is "+sum)
}*/

// for in loop

let obj={
    harry:90,
    shubham:45,
    deep:85,
    roy:67,
    rahul:77,
}

for (let a in obj){
    console.log("marks of " + a +" is " + obj[a])
}


// for of loop
for( a of "sudeep"){
    console.log(a)
}