const os = require('os');
const color = require('colors');
//operating system


var totalMemory = os.totalmem();
console.log(`The total memory in the operating system: ${totalMemory}`.bgBrightMagenta);



var freeMemory = os.freemem();
console.log(`The free memory in the operating system: ${freeMemory}`.bgBrightMagenta);



var host = os.hostname();
console.log(host.bgBrightMagenta);


var directory = os.homedir();
console.log(`The home directory of the current user is ${directory}`.bgBrightMagenta);



//ime na operativniot sistem, ako e linux = Linux, darwin = macOS
var type = os.type();
console.log(`We are using: ${type}`.bgBrightMagenta);


