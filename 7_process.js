//process
//argumentos de entrada

// console.log(process.argv)

//constrolar processo y su salida
// process.exit(1)

//Podemos controlar eventos del proceso

// process.on('exit',()=>{
//     //Limpiar los recursos
// })

//current working directory
process.cwd()

console.log(process.cwd())

//platform
console.log(process.env.NODE_ENV)