const path = require("path");
console.log(path.sep)


const filePath = path.join('content','subfolder','test.text')
// console.log(filePath)

const base = path.basename(filePath);
// console.log(base)


const absulute = path.resolve( 'content','subfolder','test.text')
console.log(path.sep)
console.log(absulute)