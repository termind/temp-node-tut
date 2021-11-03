// GLOBALS - NO WINDOW!!!!

// __dirname  - path to current directory
// __filename - current file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about the environment where the program is being executed

console.log(__dirname);

setInterval(() => {
  console.log("Howdy Y'all!");
}, 1000);
