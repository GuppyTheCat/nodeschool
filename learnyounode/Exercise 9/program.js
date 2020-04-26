const http = require('http')

let result = []

for (let i = 2; i <= 4; i++) {
    let url = process.argv[i]
    http.get(url, (res) => {
        let data = ''
        res.setEncoding('utf8')
        res.on('data', (chunk) => {
            data += chunk
        })
        res.on('end', () => {
            result[i - 2] = data
        })
    })
    if (i == 4) {
        setTimeout(showResult, 300)
    }
}

function showResult() {
    if (result[0] && result[1] && result[2]) {
        console.log(result.join('\n'))
    } else {
        setTimeout(showResult, 300)
    }
}