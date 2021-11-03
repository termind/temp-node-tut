// CommonJS - every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./003--modules-names');
const sayHi = require('./003--modules-utils');
const data = require('./003--modules-alternative-flavor');
require('./003--modules-mind-grenade');
console.log(data);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
