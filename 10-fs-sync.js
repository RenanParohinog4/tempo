const { readFileSync, writeFileSync} = require("fs")


const fileOne = readFileSync('./content/subfolder/test.text')
const fileTwo = readFileSync('./content/subfolder/test2.text')

console.log(`Here is the result ${fileOne}`)

writeFileSync('./content/subfolder/test3.text', `This is the result  ${fileOne}, ${fileTwo}`, {flag: 'a'})