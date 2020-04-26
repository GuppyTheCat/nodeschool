const http = require('http')
const fs = require('fs')

let port = process.argv[2],
    file = process.argv[3]

const server = http.createServer((req, res) => {
    let stream = fs.createReadStream(file)
    stream.pipe(res)
})

server.listen(port)