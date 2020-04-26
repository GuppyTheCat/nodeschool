const net = require('net')
const server = net.createServer(function (socket) {
    let date = new Date(),
        year = modifyDate(date.getFullYear()),
        month = modifyDate(date.getMonth() + 1),
        day = modifyDate(date.getDate()),
        hours = modifyDate(date.getHours()),
        minutes = modifyDate(date.getMinutes()),
        response = `${year}-${month}-${day} ${hours}:${minutes}\n`
    socket.end(response)
})
let port = process.argv[2]
server.listen(port)

function modifyDate(str) {
    return (str < 10 ? '0' : '') + str
}