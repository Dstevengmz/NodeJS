import { readFile } from 'node:fs/promises'
// PROMESAS

console.log('Leyendo el primer archivo')
const text = await readFile('./Nodejs.txt', 'utf-8')
console.log('Primer text', text)

console.log('hacer cosas mientras')

console.log('Leyendo el segundo archivo')
const second = await readFile('./dsd.txt', 'utf-8')

console.log('Ejecutando segundo parrafo : ', second)
