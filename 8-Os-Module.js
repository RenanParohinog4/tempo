const os = require('os');


//info about the current user 
const user = os.userInfo();
console.log(user)


//methods return the sytem uptime in seconds
console.log(`The system uptime is ${os.uptime}`)


const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()

}
console.log(currentOs)