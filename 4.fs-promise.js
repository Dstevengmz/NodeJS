const fs =require('node:fs/promises')


//PROMESAS
console.log("Leyendo el primer archivo")
const text = fs.readFile('./Nodejs.txt','utf-8')
.then(text =>{
    console.log("Primer text",text)
})

console.log("hacer cosas mientras")

console.log("Leyendo el segundo archivo")
fs.readFile('./dsd.txt','utf-8')
.then(text=>{
    console.log("Ejecutando segundo parrafo : ",text)
})




