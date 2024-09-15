const fs =require('node:fs')


//CALLBACKS
//ASINCRONO
console.log("Leyendo el primer archivo")
const text = fs.readFile('./Nodejs.txt','utf-8',(err,text)=>{ 
    console.log("Primer texto : ",text)
})

console.log("hacer cosas mientras")

console.log("Leyendo el segundo archivo")
fs.readFile('./dsd.txt','utf-8',(err,text)=>{
    console.log("Segundo texto",text)
})



