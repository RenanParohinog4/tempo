//CommonJS - every file is a module (by default)
//Modules - Encapsulated Code (Only share minimum)
const name = require('./4-name');
const sayHi = require('./5-utils');
const data = require('./6-alternative');

console.log(data.singlePerson.name)

require('./7-mind-grenade')
sayHi('susan')
sayHi(name.nameOne)
sayHi(name.nameTwo)
