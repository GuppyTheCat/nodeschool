const fs = require('fs')

let path = process.argv[2]
let file = fs.readFileSync(path , 'utf-8')
let count = file.match(/\n/gi).length

console.log(count)