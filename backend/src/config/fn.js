const fs = require('fs')
const path = require('path')

module.exports = function (obj = {}) {
    const date = new Date()
    fs.writeFile(path.resolve(__dirname,'..','logs',`${date.toISOString()}.json`), JSON.stringify(obj), err => console.log(err))
}