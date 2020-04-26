const http = require('http')
const URL = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {
    let url = URL.parse(req.url),
        date,
        params
    switch (url.pathname) {
        case '/api/parsetime':
            params = new Date(url.search.match(/iso=(.*)/)[1])
            date = {
                "hour": params.getUTCHours() + 3,
                "minute": params.getUTCMinutes(),
                "second": params.getUTCSeconds()
            }
            break
        case '/api/unixtime':
            params = url.search.match(/.*?=(.*)/)[1]
            date = {
                "unixtime": new Date(params).getTime()
            }
            break
    }
    res.end(JSON.stringify(date))
})

server.listen(port)