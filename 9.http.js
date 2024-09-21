const { Encontrarpuertovalido } = require('./10.free-port')
const http = require('node:http')

const desireport = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  res.end('holamundo')
})

Encontrarpuertovalido(desireport).then(port => {
  server.listen(port, () => {
    console.log(`server escuchando en el puerto ${port}`)
  })
})
