let args = process.argv.slice(2),
    sum = args.reduce((acc, item) => {
        return acc + Number(item)
    }, 0)
console.log(sum)