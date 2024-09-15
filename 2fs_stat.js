//fs = file System
const fs =require('node:fs')

const stats = fs.statSync('./Nodejs.txt')


console.log(
    stats.isFile(), // Si es fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es n enalce simbolco
    stats.size, // tamaño en bytes
)
