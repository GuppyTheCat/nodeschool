const fs = require('fs')
const path = require('path')

let folder = process.argv[2],
    ext = process.argv[3]

fs.readdir(folder, (err, files) => {
    if (err)
        console.log(err)
    else {
        let filtered = files.filter(file => path.extname(file) === `.${ext}`).join('\n')
        console.log(filtered)
    }
})