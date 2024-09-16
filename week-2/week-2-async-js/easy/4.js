const fs = require('fs')
fs.writeFileSync("sampleText.txt","does this work")
let a = fs.readFileSync("sampleText.txt", "utf-8")
console.log(a)
