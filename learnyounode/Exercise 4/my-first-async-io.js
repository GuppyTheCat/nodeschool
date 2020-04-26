const fs = require('fs')

let path = process.argv[2]
fs.readFile(path, 'utf-8', (err, data) => {
    let lines = data.match(/\n/gi).length
    console.log(lines)
})