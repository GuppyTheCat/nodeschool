const http = require('http')

let url = process.argv[2]

http.get(url, (res) => {
    let data = ''
    res.setEncoding('utf8')
    res.on('data', (chunk) => {
        data += chunk
    })
    res.on('end', () => console.log(data.length + '\n' + data))
})