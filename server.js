let http = require('http')

let server = http.createServer()

server.on('request', (request, response) => {
    console.log('requete')
})


server.listen(8080)