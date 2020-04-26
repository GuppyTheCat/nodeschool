const fs = require('fs')
const path = require('path')

module.exports = (folder, ext, callback) => {
    fs.readdir(folder, (err, files) => {
        if (err)
            callback(err)
        else {
            let filtered = files.filter(file => path.extname(file) === `.${ext}`)
            callback(null, filtered)
        }
    })
}