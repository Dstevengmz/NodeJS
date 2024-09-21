const fs = require('node:fs')

// CALLBACKS
// ASINCRONO
console.log('Leyendo el primer archivo')
fs.readFile('./Nodejs.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error leyendo el archivo:', err)
    return
  }
  console.log('Primer texto: ', text)
})

console.log('"hacer cosas mientras"')

console.log('"Leyendo el segundo archivo"')
fs.readFile('./dsd.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error leyendo el archivo:', err)
    return
  }
  console.log('"Segundo texto"', text)
})
