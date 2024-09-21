const net = require('node:net')

function Encontrarpuertovalido (desireport) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desireport, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        Encontrarpuertovalido(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}
module.exports = { Encontrarpuertovalido }
