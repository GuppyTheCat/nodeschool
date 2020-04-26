const mymodule = require('./mymodule.js')

let folder = process.argv[2],
    ext = process.argv[3]

mymodule(folder, ext, (err, data) => {
    if (err)
        console.log(err)
    else {
        console.log(data.join('\n'));
    }
})