const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// System uptime (in seconds)
console.log(`The system uptime is ${os.uptime()} seconds`);

// System information
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);
